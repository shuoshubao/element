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
    name: "LoadingView",
    data() {
        return {
            sections: [
{ title: "区域加载", comp: {
template: `<div>
<el-table v-loading="loading" :data="tableData">
        <el-table-column prop="date" label="日期" width="180" />
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="address" label="地址" />
    </el-table>
</div>`,
data() {
        return {
            loading: true,
            tableData: [
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }
            ]
        };
    }
} },
{ title: "自定义", comp: {
template: `<div>
<el-table
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        :data="tableData"
    >
        <el-table-column label="日期" prop="date" width="180" />
        <el-table-column label="姓名" prop="name" width="180" />
        <el-table-column label="地址" prop="address" />
    </el-table>
</div>`,
data() {
        return {
            loading: true,
            tableData: [
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }
            ]
        };
    }
} },
{ title: "整页加载", comp: {
template: `<div>
<el-button v-loading.fullscreen.lock="fullscreenLoading" type="primary" @click="handleOpenFullScreen1">指令方式</el-button>
    <el-button type="primary" @click="handleOpenFullScreen2">服务方式</el-button>
</div>`,
data() {
        return {
            fullscreenLoading: false
        };
    },
    methods: {
        handleOpenFullScreen1() {
            this.fullscreenLoading = true;
            setTimeout(() => {
                this.fullscreenLoading = false;
            }, 2000);
        },
        handleOpenFullScreen2() {
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(() => {
                loading.close();
            }, 2000);
        }
    }
} }
]
        };
    }
};
</script>

