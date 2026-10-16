<template>
    <div>
        <template v-for="(s, i) in sections">
            <el-divider :key="'d' + i" content-position="left">{{ s.title }}</el-divider>
            <component :key="'c' + i" :is="s.comp" />
        </template>
    </div>
</template>

<script>
export default {
    name: "IconView",
    data() {
        return {
            sections: [
{ title: "使用方法", comp: { template: `<div>
<div class="block-horizontal">
        <i class="el-icon-edit" />
        <i class="el-icon-share" />
        <i class="el-icon-delete" />
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
</div>` } }
]
        };
    }
};
</script>

