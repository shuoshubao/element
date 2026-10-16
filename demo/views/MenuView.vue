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
    name: "MenuView",
    data() {
        return {
            sections: [
{ title: "顶栏", comp: {
template: `<div>
<el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
            <template slot="title">我的工作台
</div>`,
data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
} },
{ title: "侧栏", comp: {
template: `<div>
<div class="block-horizontal aequilate">
        <div>
            <div>默认颜色</div>
            <el-menu default-active="2" style="width: 200px" @open="handleOpen" @close="handleClose">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location" />
                        <span>导航一</span>
</div>`,
methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
} },
{ title: "折叠", comp: {
template: `<div>
<el-radio-group v-model="isCollapse">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>

    <el-divider />

    <el-menu default-active="1-4-1" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location" />
                <span slot="title">导航一</span>
</div>`,
data() {
        return {
            isCollapse: true
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
} }
]
        };
    }
};
</script>

