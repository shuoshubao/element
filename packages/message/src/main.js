import { PopupManager } from 'element-ui/src/utils/popup/index';
import { isObject } from 'element-ui/src/utils/types';
import { isVNode } from 'element-ui/src/utils/vdom';
import Vue from 'vue';
import Main from './main.vue';

const MessageConstructor = Vue.extend(Main);

let instance;
const instances = [];
let seed = 1;

const Message = function (options) {
    if (Vue.prototype.$isServer) return;
    options = options || {};
    if (typeof options === 'string') {
        options = {
            message: options
        };
    }
    const userOnClose = options.onClose;
    const id = `message_${seed++}`;

    options.onClose = function () {
        Message.close(id, userOnClose);
    };
    instance = new MessageConstructor({
        data: options
    });
    instance.id = id;
    if (isVNode(instance.message)) {
        instance.$slots.default = [instance.message];
        instance.message = null;
    }
    instance.$mount();
    document.body.appendChild(instance.$el);
    let verticalOffset = options.offset || 20;
    instances.forEach(item => {
        verticalOffset += item.$el.offsetHeight + 16;
    });
    instance.verticalOffset = verticalOffset;
    instance.visible = true;
    instance.$el.style.zIndex = PopupManager.nextZIndex();
    instances.push(instance);
    return instance;
};

['success', 'warning', 'info', 'error'].forEach(type => {
    Message[type] = options => {
        if (isObject(options) && !isVNode(options)) {
            return Message({
                ...options,
                type
            });
        }
        return Message({
            type,
            message: options
        });
    };
});

Message.close = function (id, userOnClose) {
    const len = instances.length;
    let index = -1;
    let removedHeight;
    for (let i = 0; i < len; i++) {
        if (id === instances[i].id) {
            removedHeight = instances[i].$el.offsetHeight;
            index = i;
            if (typeof userOnClose === 'function') {
                userOnClose(instances[i]);
            }
            instances.splice(i, 1);
            break;
        }
    }
    if (len <= 1 || index === -1 || index > instances.length - 1) return;
    for (let i = index; i < len - 1; i++) {
        const dom = instances[i].$el;
        dom.style.top = `${parseInt(dom.style.top, 10) - removedHeight - 16}px`;
    }
};

Message.closeAll = function () {
    for (let i = instances.length - 1; i >= 0; i--) {
        instances[i].close();
    }
};

export default Message;
