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
    name: "DividerView",
    data() {
        return {
            sections: [
{ title: "基础用法", comp: { template: `<div>
<div>
        <div>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</div>

        <el-divider />

        <div>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</div>
    </div>
</div>` } },
{ title: "设置文案", comp: { template: `<div>
<div>
        <div>头上一片晴天, 心中一个想念</div>

        <el-divider content-position="left">少年包青天</el-divider>

        <div>饿了别叫妈, 叫饿了么</div>

        <el-divider>
            <i class="el-icon-mobile-phone" />
        </el-divider>

        <div>为了无法计算的价值</div>

        <el-divider content-position="right">阿里云</el-divider>
    </div>
</div>` } },
{ title: "垂直分割", comp: { template: `<div>
<span>雨纷纷</span>
    <el-divider direction="vertical" />
    <span>旧故里</span>
    <el-divider direction="vertical" />
    <span>草木深</span>
</div>` } }
]
        };
    }
};
</script>

