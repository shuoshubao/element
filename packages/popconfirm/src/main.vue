<template>
    <el-popover v-bind="$attrs" v-model="visible" trigger="click">
        <div class="el-popconfirm">
            <div class="el-popconfirm__main">
                <i v-if="!hideIcon" :class="icon" class="el-popconfirm__icon" :style="{ color: iconColor }" />
                {{ title }}
            </div>
            <div class="el-popconfirm__action">
                <el-button size="mini" :type="cancelButtonType" @click="cancel">
                    {{ displayCancelButtonText }}
                </el-button>
                <el-button size="mini" :type="confirmButtonType" @click="confirm">
                    {{ displayConfirmButtonText }}
                </el-button>
            </div>
        </div>
        <slot slot="reference" name="reference" />
    </el-popover>
</template>

<script>
import ElButton from 'element-ui/packages/button/index';
import ElPopover from 'element-ui/packages/popover/index';
import { t } from 'element-ui/src/locale/index';

export default {
    name: 'ElPopconfirm',
    components: {
        ElPopover,
        ElButton
    },
    props: {
        title: {
            type: String
        },
        confirmButtonText: {
            type: String
        },
        cancelButtonText: {
            type: String
        },
        confirmButtonType: {
            type: String,
            default: 'primary'
        },
        cancelButtonType: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: 'el-icon-info'
        },
        iconColor: {
            type: String,
            default: '#ed5b56'
        },
        hideIcon: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            visible: false
        };
    },
    computed: {
        displayConfirmButtonText() {
            return this.confirmButtonText || t('el.popconfirm.confirmButtonText');
        },
        displayCancelButtonText() {
            return this.cancelButtonText || t('el.popconfirm.cancelButtonText');
        }
    },
    methods: {
        confirm() {
            this.visible = false;
            this.$emit('confirm');
        },
        cancel() {
            this.visible = false;
            this.$emit('cancel');
        }
    }
};
</script>
