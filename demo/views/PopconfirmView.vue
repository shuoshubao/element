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
    name: 'PopconfirmView',
    data() {
        return {
            sections: [
                {
                    title: '基础用法',
                    comp: {
                        template: `<div>
<el-popconfirm title="这是一段内容确定删除吗?">
        <el-button slot="reference">删除</el-button>
    </el-popconfirm>
</div>`
                    }
                },
                {
                    title: '自定义',
                    comp: {
                        template: `<div>
<el-popconfirm title="这是一段内容确定删除吗?" confirm-button-text="好的" cancel-button-text="不用了" icon="el-icon-info" icon-color="red">
        <el-button slot="reference">删除</el-button>
    </el-popconfirm>
</div>`
                    }
                }
            ]
        };
    }
};
</script>
