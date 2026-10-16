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
    name: "PopoverView",
    data() {
        return {
            sections: [
{ title: "基础用法", comp: {
template: `<div>
<el-popover title="标题" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容." placement="top-start" trigger="hover" width="200">
        <el-button slot="reference">hover 激活</el-button>
    </el-popover>

    <el-popover title="标题" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容." placement="bottom" trigger="click" width="200">
        <el-button slot="reference">click 激活</el-button>
    </el-popover>

    <el-popover ref="focusRef" title="标题" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容." placement="right" trigger="focus" width="200" />
    <el-button v-popover:focusRef>focus 激活</el-button>

    <el-popover v-model="visible" title="标题" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容." placement="bottom" trigger="manual" width="200">
        <el-button slot="reference" @click="visible = !visible">手动激活</el-button>
    </el-popover>
</div>`,
data() {
        return {
            visible: false
        };
    }
} },
{ title: "嵌套信息", comp: {
template: `<div>
<el-popover placement="right" trigger="click" width="400">
        <el-table :data="gridData">
            <el-table-column label="日期" prop="date" width="100" />
            <el-table-column label="姓名" prop="name" width="80" />
            <el-table-column label="地址" prop="address" />
        </el-table>

        <el-button slot="reference">click 激活</el-button>
    </el-popover>
</div>`,
data() {
        return {
            gridData: [
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
            ]
        };
    }
} },
{ title: "嵌套操作", comp: {
template: `<div>
<el-popover v-model="visible" width="160">
        <div>这是一段内容这是一段内容确定删除吗?</div>

        <div style="margin-top: 10px; text-align: right">
            <el-link :underline="false" @click="visible = false">取消</el-link>
            <el-link type="primary" :underline="false" @click="visible = false">确定</el-link>
        </div>

        <el-button slot="reference">删除</el-button>
    </el-popover>
</div>`,
data() {
        return {
            visible: false
        };
    }
} }
]
        };
    }
};
</script>

