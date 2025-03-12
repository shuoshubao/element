<template>
    <div :class="['el-skeleton__item', `el-skeleton__${variant}`]">
        <ImgPlaceholder v-if="variant === 'image'" />
    </div>
</template>

<script>
import ImgPlaceholder from './img-placeholder.vue';

export default {
    name: 'ElSkeletonItem',
    components: {
        [ImgPlaceholder.name]: ImgPlaceholder
    },
    props: {
        variant: {
            type: String,
            default: 'text'
        }
    }
};
</script>
