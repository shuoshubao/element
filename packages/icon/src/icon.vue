<template>
    <i :class="'el-icon-' + name" />
</template>

<script>
export default {
    name: 'ElIcon',

    props: {
        name: String
    }
};
</script>
