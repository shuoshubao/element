import Vue from 'vue';
import { addClass, removeClass } from 'element-ui/src/utils/dom';

let hasModal = false;
let hasInitZIndex = false;
let zIndex;

const getModal = function () {
    if (Vue.prototype.$isServer) return;
    let { modalDom } = PopupManager;
    if (modalDom) {
        hasModal = true;
    } else {
        hasModal = false;
        modalDom = document.createElement('div');
        PopupManager.modalDom = modalDom;

        modalDom.addEventListener('touchmove', event => {
            event.preventDefault();
            event.stopPropagation();
        });

        modalDom.addEventListener('click', () => {
            PopupManager.doOnModalClick && PopupManager.doOnModalClick();
        });
    }

    return modalDom;
};

const instances = {};

const PopupManager = {
    modalFade: true,

    getInstance(id) {
        return instances[id];
    },

    register(id, instance) {
        if (id && instance) {
            instances[id] = instance;
        }
    },

    deregister(id) {
        if (id) {
            instances[id] = null;
            delete instances[id];
        }
    },

    nextZIndex() {
        return PopupManager.zIndex++;
    },

    modalStack: [],

    doOnModalClick() {
        const topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
        if (!topItem) return;

        const instance = PopupManager.getInstance(topItem.id);
        if (instance && instance.closeOnClickModal) {
            instance.close();
        }
    },

    openModal(id, zIndex, dom, modalClass, modalFade) {
        if (Vue.prototype.$isServer) return;
        if (!id || zIndex === undefined) return;
        this.modalFade = modalFade;

        const { modalStack } = this;

        for (let i = 0, j = modalStack.length; i < j; i++) {
            const item = modalStack[i];
            if (item.id === id) {
                return;
            }
        }

        const modalDom = getModal();

        addClass(modalDom, 'v-modal');
        if (this.modalFade && !hasModal) {
            addClass(modalDom, 'v-modal-enter');
        }
        if (modalClass) {
            const classArr = modalClass.trim().split(/\s+/);
            classArr.forEach(item => addClass(modalDom, item));
        }
        setTimeout(() => {
            removeClass(modalDom, 'v-modal-enter');
        }, 200);

        if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
            dom.parentNode.appendChild(modalDom);
        } else {
            document.body.appendChild(modalDom);
        }

        if (zIndex) {
            modalDom.style.zIndex = zIndex;
        }
        modalDom.tabIndex = 0;
        modalDom.style.display = '';

        this.modalStack.push({ id, zIndex, modalClass });
    },

    closeModal(id) {
        const { modalStack } = this;
        const modalDom = getModal();

        if (modalStack.length > 0) {
            const topItem = modalStack[modalStack.length - 1];
            if (topItem.id === id) {
                if (topItem.modalClass) {
                    const classArr = topItem.modalClass.trim().split(/\s+/);
                    classArr.forEach(item => removeClass(modalDom, item));
                }

                modalStack.pop();
                if (modalStack.length > 0) {
                    modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
                }
            } else {
                for (let i = modalStack.length - 1; i >= 0; i--) {
                    if (modalStack[i].id === id) {
                        modalStack.splice(i, 1);
                        break;
                    }
                }
            }
        }

        if (modalStack.length === 0) {
            if (this.modalFade) {
                addClass(modalDom, 'v-modal-leave');
            }
            setTimeout(() => {
                if (modalStack.length === 0) {
                    if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom);
                    modalDom.style.display = 'none';
                    PopupManager.modalDom = undefined;
                }
                removeClass(modalDom, 'v-modal-leave');
            }, 200);
        }
    }
};

Object.defineProperty(PopupManager, 'zIndex', {
    configurable: true,
    get() {
        if (!hasInitZIndex) {
            zIndex = zIndex || (Vue.prototype.$ELEMENT || {}).zIndex || 2000;
            hasInitZIndex = true;
        }
        return zIndex;
    },
    set(value) {
        zIndex = value;
    }
});

const getTopPopup = function () {
    if (Vue.prototype.$isServer) return;
    if (PopupManager.modalStack.length > 0) {
        const topPopup = PopupManager.modalStack[PopupManager.modalStack.length - 1];
        if (!topPopup) return;
        return PopupManager.getInstance(topPopup.id);
    }
};

if (!Vue.prototype.$isServer) {
    // handle `esc` key when the popup is shown
    window.addEventListener('keydown', event => {
        if (event.keyCode === 27) {
            const topPopup = getTopPopup();

            if (topPopup && topPopup.closeOnPressEscape) {
                topPopup.handleClose ? topPopup.handleClose() : topPopup.handleAction ? topPopup.handleAction('cancel') : topPopup.close();
            }
        }
    });
}

export default PopupManager;
