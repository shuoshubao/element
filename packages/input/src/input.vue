<template>
    <div
        :class="[
            type === 'textarea' ? 'el-textarea' : 'el-input',
            inputSize ? 'el-input--' + inputSize : '',
            {
                'is-disabled': inputDisabled,
                'is-exceed': inputExceed,
                'el-input-group': $slots.prepend || $slots.append,
                'el-input-group--append': $slots.append,
                'el-input-group--prepend': $slots.prepend,
                'el-input--prefix': $slots.prefix || prefixIcon,
                'el-input--suffix': $slots.suffix || suffixIcon || clearable || showPassword
            }
        ]"
        @mouseenter="hovering = true"
        @mouseleave="hovering = false"
    >
        <template v-if="type !== 'textarea'">
            <!-- 前置元素 -->
            <div v-if="$slots.prepend" class="el-input-group__prepend">
                <slot name="prepend" />
            </div>
            <input
                v-if="type !== 'textarea'"
                v-bind="$attrs"
                ref="input"
                :tabindex="tabindex"
                class="el-input__inner"
                :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
                :disabled="inputDisabled"
                :readonly="readonly"
                :autocomplete="autoComplete || autocomplete"
                :aria-label="label"
                @compositionstart="handleCompositionStart"
                @compositionupdate="handleCompositionUpdate"
                @compositionend="handleCompositionEnd"
                @input="handleInput"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange"
            />
            <!-- 前置内容 -->
            <span v-if="$slots.prefix || prefixIcon" class="el-input__prefix">
                <slot name="prefix" />
                <i v-if="prefixIcon" class="el-input__icon" :class="prefixIcon" />
            </span>
            <!-- 后置内容 -->
            <span v-if="getSuffixVisible()" class="el-input__suffix">
                <span class="el-input__suffix-inner">
                    <template v-if="!showClear || !showPwdVisible || !isWordLimitVisible">
                        <slot name="suffix" />
                        <i v-if="suffixIcon" class="el-input__icon" :class="suffixIcon" />
                    </template>
                    <i v-if="showClear" class="el-input__icon el-icon-circle-close el-input__clear" @mousedown.prevent @click="clear" />
                    <i v-if="showPwdVisible" class="el-input__icon el-icon-view el-input__clear" @click="handlePasswordVisible" />
                    <span v-if="isWordLimitVisible" class="el-input__count">
                        <span class="el-input__count-inner">{{ textLength }}/{{ upperLimit }}</span>
                    </span>
                </span>
                <i v-if="validateState" class="el-input__icon" :class="['el-input__validateIcon', validateIcon]" />
            </span>
            <!-- 后置元素 -->
            <div v-if="$slots.append" class="el-input-group__append">
                <slot name="append" />
            </div>
        </template>
        <textarea
            v-else
            ref="textarea"
            :tabindex="tabindex"
            class="el-textarea__inner"
            v-bind="$attrs"
            :disabled="inputDisabled"
            :readonly="readonly"
            :autocomplete="autoComplete || autocomplete"
            :style="textareaStyle"
            :aria-label="label"
            @compositionstart="handleCompositionStart"
            @compositionupdate="handleCompositionUpdate"
            @compositionend="handleCompositionEnd"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
        />
        <span v-if="isWordLimitVisible && type === 'textarea'" class="el-input__count">{{ textLength }}/{{ upperLimit }}</span>
    </div>
</template>

<script>
import emitter from 'element-ui/src/mixins/emitter';
import Migrating from 'element-ui/src/mixins/migrating';
import merge from 'element-ui/src/utils/merge';
import { isKorean } from 'element-ui/src/utils/shared';
import calcTextareaHeight from './calcTextareaHeight';

export default {
    name: 'ElInput',

    componentName: 'ElInput',

    mixins: [emitter, Migrating],

    inject: {
        elForm: {
            default: ''
        },
        elFormItem: {
            default: ''
        }
    },

    inheritAttrs: false,

    props: {
        value: [String, Number],
        size: String,
        resize: String,
        form: String,
        disabled: Boolean,
        readonly: Boolean,
        type: {
            type: String,
            default: 'text'
        },
        autosize: {
            type: [Boolean, Object],
            default: false
        },
        autocomplete: {
            type: String,
            default: 'off'
        },
        /** @Deprecated in next major version */
        autoComplete: {
            type: String,
            validator(val) {
                process.env.NODE_ENV !== 'production' &&
                    console.warn("[Element Warn][Input]'auto-complete' property will be deprecated in next major version. please use 'autocomplete' instead.");
                return true;
            }
        },
        validateEvent: {
            type: Boolean,
            default: true
        },
        suffixIcon: String,
        prefixIcon: String,
        label: String,
        clearable: {
            type: Boolean,
            default: false
        },
        showPassword: {
            type: Boolean,
            default: false
        },
        showWordLimit: {
            type: Boolean,
            default: false
        },
        tabindex: String
    },

    data() {
        return {
            textareaCalcStyle: {},
            hovering: false,
            focused: false,
            isComposing: false,
            passwordVisible: false
        };
    },

    computed: {
        _elFormItemSize() {
            return (this.elFormItem || {}).elFormItemSize;
        },
        validateState() {
            return this.elFormItem ? this.elFormItem.validateState : '';
        },
        needStatusIcon() {
            return this.elForm ? this.elForm.statusIcon : false;
        },
        validateIcon() {
            return {
                validating: 'el-icon-loading',
                success: 'el-icon-circle-check',
                error: 'el-icon-circle-close'
            }[this.validateState];
        },
        textareaStyle() {
            return merge({}, this.textareaCalcStyle, { resize: this.resize });
        },
        inputSize() {
            return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
        },
        inputDisabled() {
            return this.disabled || (this.elForm || {}).disabled;
        },
        nativeInputValue() {
            return this.value === null || this.value === undefined ? '' : String(this.value);
        },
        showClear() {
            return this.clearable && !this.inputDisabled && !this.readonly && this.nativeInputValue && (this.focused || this.hovering);
        },
        showPwdVisible() {
            return this.showPassword && !this.inputDisabled && !this.readonly && (!!this.nativeInputValue || this.focused);
        },
        isWordLimitVisible() {
            return (
                this.showWordLimit &&
                this.$attrs.maxlength &&
                (this.type === 'text' || this.type === 'textarea') &&
                !this.inputDisabled &&
                !this.readonly &&
                !this.showPassword
            );
        },
        upperLimit() {
            return this.$attrs.maxlength;
        },
        textLength() {
            if (typeof this.value === 'number') {
                return String(this.value).length;
            }

            return (this.value || '').length;
        },
        inputExceed() {
            // show exceed style if length of initial value greater then maxlength
            return this.isWordLimitVisible && this.textLength > this.upperLimit;
        }
    },

    watch: {
        value(val) {
            this.$nextTick(this.resizeTextarea);
            if (this.validateEvent) {
                this.dispatch('ElFormItem', 'el.form.change', [val]);
            }
        },
        // native input value is set explicitly
        // do not use v-model / :value in template
        // see: https://github.com/ElemeFE/element/issues/14521
        nativeInputValue() {
            this.setNativeInputValue();
        },
        // when change between <input> and <textarea>,
        // update DOM dependent value and styles
        // https://github.com/ElemeFE/element/issues/14857
        type() {
            this.$nextTick(() => {
                this.setNativeInputValue();
                this.resizeTextarea();
                this.updateIconOffset();
            });
        }
    },

    created() {
        this.$on('inputSelect', this.select);
    },

    mounted() {
        this.setNativeInputValue();
        this.resizeTextarea();
        this.updateIconOffset();
    },

    updated() {
        this.$nextTick(this.updateIconOffset);
    },

    methods: {
        focus() {
            this.getInput().focus();
        },
        blur() {
            this.getInput().blur();
        },
        getMigratingConfig() {
            return {
                props: {
                    icon: 'icon is removed, use suffix-icon / prefix-icon instead.',
                    'on-icon-click': 'on-icon-click is removed.'
                },
                events: {
                    click: 'click is removed.'
                }
            };
        },
        handleBlur(event) {
            this.focused = false;
            this.$emit('blur', event);
            if (this.validateEvent) {
                this.dispatch('ElFormItem', 'el.form.blur', [this.value]);
            }
        },
        select() {
            this.getInput().select();
        },
        resizeTextarea() {
            if (this.$isServer) return;
            const { autosize, type } = this;
            if (type !== 'textarea') return;
            if (!autosize) {
                this.textareaCalcStyle = {
                    minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
                };
                return;
            }
            const { minRows } = autosize;
            const { maxRows } = autosize;

            this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
        },
        setNativeInputValue() {
            const input = this.getInput();
            if (!input) return;
            if (input.value === this.nativeInputValue) return;
            input.value = this.nativeInputValue;
        },
        handleFocus(event) {
            this.focused = true;
            this.$emit('focus', event);
        },
        handleCompositionStart(event) {
            this.$emit('compositionstart', event);
            this.isComposing = true;
        },
        handleCompositionUpdate(event) {
            this.$emit('compositionupdate', event);
            const text = event.target.value;
            const lastCharacter = text[text.length - 1] || '';
            this.isComposing = !isKorean(lastCharacter);
        },
        handleCompositionEnd(event) {
            this.$emit('compositionend', event);
            if (this.isComposing) {
                this.isComposing = false;
                this.handleInput(event);
            }
        },
        handleInput(event) {
            // should not emit input during composition
            // see: https://github.com/ElemeFE/element/issues/10516
            if (this.isComposing) return;

            // hack for https://github.com/ElemeFE/element/issues/8548
            // should remove the following line when we don't support IE
            if (event.target.value === this.nativeInputValue) return;

            this.$emit('input', event.target.value);

            // ensure native input value is controlled
            // see: https://github.com/ElemeFE/element/issues/12850
            this.$nextTick(this.setNativeInputValue);
        },
        handleChange(event) {
            this.$emit('change', event.target.value);
        },
        calcIconOffset(place) {
            const elList = [].slice.call(this.$el.querySelectorAll(`.el-input__${place}`) || []);
            if (!elList.length) return;
            let el = null;
            for (let i = 0; i < elList.length; i++) {
                if (elList[i].parentNode === this.$el) {
                    el = elList[i];
                    break;
                }
            }
            if (!el) return;
            const pendantMap = {
                suffix: 'append',
                prefix: 'prepend'
            };

            const pendant = pendantMap[place];
            if (this.$slots[pendant]) {
                el.style.transform = `translateX(${place === 'suffix' ? '-' : ''}${this.$el.querySelector(`.el-input-group__${pendant}`).offsetWidth}px)`;
            } else {
                el.removeAttribute('style');
            }
        },
        updateIconOffset() {
            this.calcIconOffset('prefix');
            this.calcIconOffset('suffix');
        },
        clear() {
            this.$emit('input', '');
            this.$emit('change', '');
            this.$emit('clear');
        },
        handlePasswordVisible() {
            this.passwordVisible = !this.passwordVisible;
            this.$nextTick(() => {
                this.focus();
            });
        },
        getInput() {
            return this.$refs.input || this.$refs.textarea;
        },
        getSuffixVisible() {
            return (
                this.$slots.suffix ||
                this.suffixIcon ||
                this.showClear ||
                this.showPassword ||
                this.isWordLimitVisible ||
                (this.validateState && this.needStatusIcon)
            );
        }
    }
};
</script>
