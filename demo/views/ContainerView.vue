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
    name: "ContainerView",
    data() {
        return {
            sections: [
{ title: "常见页面布局", comp: { template: `<div>
<div class="container-demo-wrap">
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
        </el-container>

        <el-divider />

        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>

        <el-divider />

        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>Main</el-main>
        </el-container>

        <el-divider />

        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>

        <el-divider />

        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-container>
                    <el-main>Main</el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>

        <el-divider />

        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>

        <el-divider />

        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</div>` } },
{ title: "实例", comp: {
template: `<div>
<el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246); color: #333;">
            <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-message" />
                        导航一
</div>`,
data() {
        const item = {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        };
        return {
            tableData: Array(20).fill(item)
        };
    }
} }
]
        };
    }
};
</script>

<style>

.container-demo-wrap .el-header,
.container-demo-wrap .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.container-demo-wrap .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.container-demo-wrap .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

.container-demo-wrap .el-container:nth-child(5) .el-aside,
.container-demo-wrap .el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.container-demo-wrap .el-container:nth-child(7) .el-aside {
    line-height: 320px;
}

</style>
