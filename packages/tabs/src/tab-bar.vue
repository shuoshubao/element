<template>
    <div class="el-tabs__active-bar" :class="`is-${rootTabs.tabPosition}`" :style="barStyle" />
</template>

<script>
import { arrayFind } from 'element-ui/src/utils/util';

export default {
    name: 'TabBar',

    inject: ['rootTabs'],

    props: {
        tabs: Array
    },

    computed: {
        barStyle: {
            get() {
                const style = {};
                let offset = 0;
                let tabSize = 0;
                const sizeName = ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'width' : 'height';
                const sizeDir = sizeName === 'width' ? 'x' : 'y';
                const firstUpperCase = str => {
                    return str.toLowerCase().replace(/( |^)[a-z]/g, L => L.toUpperCase());
                };
                this.tabs.every((tab, index) => {
                    const $el = arrayFind(this.$parent.$refs.tabs || [], t => t.id.replace('tab-', '') === tab.paneName);
                    if (!$el) {
                        return false;
                    }

                    if (!tab.active) {
                        offset += $el[`client${firstUpperCase(sizeName)}`];
                        return true;
                    }
                    tabSize = $el[`client${firstUpperCase(sizeName)}`];
                    const tabStyles = window.getComputedStyle($el);
                    if (sizeName === 'width' && this.tabs.length > 1) {
                        tabSize -= parseFloat(tabStyles.paddingLeft) + parseFloat(tabStyles.paddingRight);
                    }
                    if (sizeName === 'width') {
                        offset += parseFloat(tabStyles.paddingLeft);
                    }
                    return false;
                });

                const transform = `translate${firstUpperCase(sizeDir)}(${offset}px)`;
                style[sizeName] = `${tabSize}px`;
                style.transform = transform;
                style.msTransform = transform;
                style.webkitTransform = transform;

                return style;
            }
        }
    }
};
</script>
