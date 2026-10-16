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
    name: "BacktopView",
    data() {
        return {
            sections: [
{ title: "基础用法", comp: { template: `<div>
Scroll down to see the bottom-right button.
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap" />
</div>` } },
{ title: "自定义显示内容", comp: { template: `<div>
<div>Scroll down to see the bottom-right button.</div>
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
        <div
            style="{ height: 100%; width: 100%; background-color: #f2f5f6; box-shadow: 0 0 6px rgba(0,0,0, .12); text-align: center; line-height: 40px; color: #1989fa; }"
        >
            UP
        </div>
    </el-backtop>
</div>` } }
]
        };
    }
};
</script>

