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
    name: "LinkView",
    data() {
        return {
            sections: [
{ title: "基础用法", comp: { template: `<div>
<el-link href="https://baidu.com" target="_blank">默认链接</el-link>
    <el-link type="primary">主要链接</el-link>
    <el-link type="success">成功链接</el-link>
    <el-link type="warning">警告链接</el-link>
    <el-link type="danger">危险链接</el-link>
    <el-link type="info">信息链接</el-link>
</div>` } },
{ title: "禁用状态", comp: { template: `<div>
<el-link disabled>默认链接</el-link>
    <el-link type="primary" disabled>主要链接</el-link>
    <el-link type="success" disabled>成功链接</el-link>
    <el-link type="warning" disabled>警告链接</el-link>
    <el-link type="danger" disabled>危险链接</el-link>
    <el-link type="info" disabled>信息链接</el-link>
</div>` } },
{ title: "下划线", comp: { template: `<div>
<el-link>无下划线</el-link>
    <el-link underline>有下划线</el-link>
</div>` } },
{ title: "图标", comp: { template: `<div>
<el-link icon="el-icon-edit">编辑</el-link>
    <el-link>
        查看
        <i class="el-icon-view" />
    </el-link>
</div>` } }
]
        };
    }
};
</script>

