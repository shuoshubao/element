<template>
    <section class="el-container" :class="{ 'is-vertical': isVertical }">
        <slot />
    </section>
</template>

<script>
export default {
    name: 'ElContainer',

    componentName: 'ElContainer',

    props: {
        direction: String
    },

    computed: {
        isVertical() {
            if (this.direction === 'vertical') {
                return true;
            }
            if (this.direction === 'horizontal') {
                return false;
            }
            return this.$slots && this.$slots.default
                ? this.$slots.default.some(vnode => {
                    const tag = vnode.componentOptions && vnode.componentOptions.tag;
                    return tag === 'el-header' || tag === 'el-footer';
                })
                : false;
        }
    }
};
</script>
