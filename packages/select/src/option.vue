<template>
    <li
        v-show="visible"
        class="el-select-dropdown__item"
        :class="{
            selected: itemSelected,
            'is-disabled': disabled || groupDisabled || limitReached,
            hover: hover
        }"
        @mouseenter="hoverItem"
        @click.stop="selectOptionClick"
    >
        <slot>
            <span>{{ currentLabel }}</span>
        </slot>
    </li>
</template>

<script>
import Emitter from 'element-ui/src/mixins/emitter';
import { escapeRegexpString, getValueByPath } from 'element-ui/src/utils/util';

export default {
    name: 'ElOption',
    mixins: [Emitter],

    componentName: 'ElOption',

    inject: ['select'],

    props: {
        value: {
            required: true
        },
        label: [String, Number],
        created: Boolean,
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            index: -1,
            groupDisabled: false,
            visible: true,
            hitState: false,
            hover: false
        };
    },

    computed: {
        isObject() {
            return Object.prototype.toString.call(this.value).toLowerCase() === '[object object]';
        },

        currentLabel() {
            return this.label || (this.isObject ? '' : this.value);
        },

        currentValue() {
            return this.value || this.label || '';
        },

        itemSelected() {
            if (!this.select.multiple) {
                return this.isEqual(this.value, this.select.value);
            }
            return this.contains(this.select.value, this.value);
        },

        limitReached() {
            if (this.select.multiple) {
                return !this.itemSelected && (this.select.value || []).length >= this.select.multipleLimit && this.select.multipleLimit > 0;
            }
            return false;
        }
    },

    watch: {
        currentLabel() {
            if (!this.created && !this.select.remote) this.dispatch('ElSelect', 'setSelected');
        },
        value(val, oldVal) {
            const { remote, valueKey } = this.select;
            if (!this.created && !remote) {
                if (valueKey && typeof val === 'object' && typeof oldVal === 'object' && val[valueKey] === oldVal[valueKey]) {
                    return;
                }
                this.dispatch('ElSelect', 'setSelected');
            }
        }
    },

    created() {
        this.select.options.push(this);
        this.select.cachedOptions.push(this);
        this.select.optionsCount++;
        this.select.filteredOptionsCount++;

        this.$on('queryChange', this.queryChange);
        this.$on('handleGroupDisabled', this.handleGroupDisabled);
    },

    beforeDestroy() {
        const { selected, multiple } = this.select;
        const selectedOptions = multiple ? selected : [selected];
        const index = this.select.cachedOptions.indexOf(this);
        const selectedIndex = selectedOptions.indexOf(this);

        // if option is not selected, remove it from cache
        if (index > -1 && selectedIndex < 0) {
            this.select.cachedOptions.splice(index, 1);
        }
        this.select.onOptionDestroy(this.select.options.indexOf(this));
    },

    methods: {
        isEqual(a, b) {
            if (!this.isObject) {
                return a === b;
            }
            const { valueKey } = this.select;
            return getValueByPath(a, valueKey) === getValueByPath(b, valueKey);
        },

        contains(arr = [], target) {
            if (!this.isObject) {
                return arr && arr.indexOf(target) > -1;
            }
            const { valueKey } = this.select;
            return (
                arr &&
                arr.some(item => {
                    return getValueByPath(item, valueKey) === getValueByPath(target, valueKey);
                })
            );
        },

        handleGroupDisabled(val) {
            this.groupDisabled = val;
        },

        hoverItem() {
            if (!this.disabled && !this.groupDisabled) {
                this.select.hoverIndex = this.select.options.indexOf(this);
            }
        },

        selectOptionClick() {
            if (this.disabled !== true && this.groupDisabled !== true) {
                this.dispatch('ElSelect', 'handleOptionClick', [this, true]);
            }
        },

        queryChange(query) {
            this.visible = new RegExp(escapeRegexpString(query), 'i').test(this.currentLabel) || this.created;
            if (!this.visible) {
                this.select.filteredOptionsCount--;
            }
        }
    }
};
</script>
