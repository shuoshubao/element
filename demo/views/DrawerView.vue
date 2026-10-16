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
    name: "DrawerView",
    data() {
        return {
            sections: [
{ title: "基本用法", comp: {
template: `<div>
<el-radio-group v-model="direction">
        <el-radio label="ltr">从左往右开</el-radio>
        <el-radio label="rtl">从右往左开</el-radio>
        <el-radio label="ttb">从上往下开</el-radio>
        <el-radio label="btt">从下往上开</el-radio>
    </el-radio-group>

    <el-divider />

    <el-button @click="drawerVisible = true">点我打开</el-button>

    <el-drawer title="我是标题" :visible.sync="drawerVisible" :direction="direction">
        <div>我来啦!</div>
    </el-drawer>
</div>`,
data() {
        return {
            drawerVisible: false,
            direction: 'rtl'
        };
    }
} },
{ title: "不添加 Title", comp: {
template: `<div>
<el-button @click="drawerVisible = true">点我打开</el-button>

    <el-drawer title="我是标题" :visible.sync="drawerVisible" :with-header="false">
        <div>我来啦!</div>
    </el-drawer>
</div>`,
data() {
        return {
            drawerVisible: false
        };
    }
} },
{ title: "自定义内容", comp: {
template: `<div>
<el-button @click="tableDrawerVisible = true">打开嵌套表格的 Drawer</el-button>

    <el-button @click="formDrawerVisible = true">打开嵌套 Form 的 Drawer</el-button>

    <el-drawer title="我嵌套了表格" :visible.sync="tableDrawerVisible" size="500px">
        <el-table :data="tableData">
            <el-table-column property="date" label="日期" width="150" />
            <el-table-column property="name" label="姓名" width="200" />
            <el-table-column property="address" label="地址" />
        </el-table>
    </el-drawer>

    <el-drawer ref="drawerRef" title="我嵌套了 Form" :visible.sync="formDrawerVisible" size="500px" :before-close="handleClose">
        <el-form :model="formModel" label-width="80px">
            <el-form-item label="活动名称">
                <el-input v-model="formModel.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select v-model="formModel.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai" />
                    <el-option label="区域二" value="beijing" />
                </el-select>
            </el-form-item>
        </el-form>

        <div class="el-drawer__footer">
            <el-button @click="handleCancel">取消</el-button>
            <el-button type="primary" :loading="loading" @click="$refs.drawerRef.closeDrawer()">{{ loading ? '提交中 ...' : '确定' }}</el-button>
        </div>
    </el-drawer>
</div>`,
data() {
        return {
            tableDrawerVisible: false,
            formDrawerVisible: false,
            loading: false,
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }
            ],
            formModel: {
                name: '',
                region: ''
            },
            timer: null
        };
    },
    methods: {
        handleClose(done) {
            if (this.loading) {
                return;
            }
            this.$confirm('确定要提交表单吗?')
                .then(() => {
                    this.loading = true;
                    this.timer = setTimeout(() => {
                        done();
                        // 动画关闭需要一定的时间
                        setTimeout(() => {
                            this.loading = false;
                        }, 400);
                    }, 2000);
                })
                .catch(() => {});
        },
        handleCancel() {
            this.loading = false;
            this.formDrawerVisible = false;
            clearTimeout(this.timer);
        }
    }
} },
{ title: "多层嵌套", comp: {
template: `<div>
<el-button @click="outerDrawerVisible = true">点我打开</el-button>

    <el-drawer title="我是外面的 Drawer" :visible.sync="outerDrawerVisible" size="500px">
        <el-button @click="innerDrawerVisible = true">打开里面的!</el-button>
    </el-drawer>

    <el-drawer title="我是里面的 Drawer" :visible.sync="innerDrawerVisible" :append-to-body="true" size="500px" :before-close="handleClose">
        <div>内容</div>
    </el-drawer>
</div>`,
data() {
        return {
            outerDrawerVisible: false,
            innerDrawerVisible: false
        };
    },
    methods: {
        handleClose(done) {
            this.$confirm('还有未保存的工作哦确定关闭吗?')
                .then(() => {
                    done();
                })
                .catch(() => {});
        }
    }
} }
]
        };
    }
};
</script>

