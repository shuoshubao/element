<!--
 * @Author: shuoshubao
 * @Date: 2025-03-12 10:35:42
 * @LastEditors: shuoshubao
 * @LastEditTime: 2025-03-12 13:12:43
 * @Description: 
-->
<template>
    <div :class="['el-skeleton__item', `el-skeleton__${variant}`]">
        <img-placeholder v-if="variant === 'image'" />
    </div>
</template>

<script>
import ImgPlaceholder from './img-placeholder.vue';

export default {
    name: 'ElSkeletonItem',
    props: {
        variant: {
            type: String,
            default: 'text'
        }
    },
    components: {
        [ImgPlaceholder.name]: ImgPlaceholder
    }
};
</script>
