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
    name: 'DialogView',
    data() {
        return {
            sections: [
                {
                    title: '基本用法',
                    comp: {
                        template: `<div>
<el-button @click="dialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="500px" :before-close="handleClose">
        <div>这是一段信息</div>

        <template #footer>
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确定</el-button>
</div>`,
                        data() {
                            return {
                                dialogVisible: false
                            };
                        },
                        methods: {
                            handleClose(done) {
                                this.$confirm('确认关闭?')
                                    .then(_ => {
                                        done();
                                    })
                                    .catch(_ => {});
                            }
                        }
                    }
                },
                {
                    title: '自定义内容',
                    comp: {
                        template: `<div>
<el-button @click="tableDialogVisible = true">打开嵌套表格的 Dialog</el-button>

    <el-dialog title="收货地址" :visible.sync="tableDialogVisible">
        <el-table :data="tableData">
            <el-table-column property="date" label="日期" width="150" />
            <el-table-column property="name" label="姓名" width="200" />
            <el-table-column property="address" label="地址" />
        </el-table>
    </el-dialog>

    <el-button @click="formDialogVisible = true">打开嵌套表单的 Dialog</el-button>

    <el-dialog title="收货地址" :visible.sync="formDialogVisible">
        <el-form :model="formModel" label-width="120px">
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

        <template #footer>
            <el-button @click="formDialogVisible = false">取消</el-button>
            <el-button type="primary" @click="formDialogVisible = false">确定</el-button>
</div>`,
                        data() {
                            return {
                                tableDialogVisible: false,
                                formDialogVisible: false,
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
                                    region: '',
                                    date1: '',
                                    date2: '',
                                    delivery: false,
                                    type: [],
                                    resource: '',
                                    desc: ''
                                }
                            };
                        }
                    }
                },
                {
                    title: '嵌套的 Dialog',
                    comp: {
                        template: `<div>
<el-button @click="outerDialogVisible = true">点击打开外层 Dialog</el-button>

    <el-dialog title="外层 Dialog" :visible.sync="outerDialogVisible">
        <el-dialog title="内层 Dialog" :visible.sync="innerDialogVisible" width="500px" append-to-body />

        <template #footer>
            <el-button @click="outerDialogVisible = false">取消</el-button>
            <el-button type="primary" @click="innerDialogVisible = true">打开内层 Dialog</el-button>
</div>`,
                        data() {
                            return {
                                outerDialogVisible: false,
                                innerDialogVisible: false
                            };
                        }
                    }
                },
                {
                    title: '居中布局',
                    comp: {
                        template: `<div>
<el-button @click="centerDialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="500px" center>
        <div>需要注意的是内容是默认不居中的</div>

        <template #footer>
            <el-button @click="centerDialogVisible = false">取消</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">确定</el-button>
</div>`,
                        data() {
                            return {
                                centerDialogVisible: false
                            };
                        }
                    }
                }
            ]
        };
    }
};
</script>
