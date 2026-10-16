<template>
    <div>
        <template v-for="(s, i) in sections">
            <el-divider :key="'d' + i" content-position="left">{{ s.title }}</el-divider>
            <component :key="'c' + i" :is="s.comp" />
        </template>
    </div>
</template>

<script lang="jsx">
export default {
    name: 'MessageView',
    data() {
        return {
            sections: [
                {
                    title: '基础用法',
                    comp: {
                        template: `<div>
<el-button @click="open">打开消息提示</el-button>
    <el-button @click="openVn">VNode</el-button>
</div>`,
                        methods: {
                            open() {
                                this.$message('这是一条消息提示');
                            },

                            openVn() {
                                this.$message({
                                    message: (
                                        <div>
                                            <span>内容可以是</span>
                                            <span style="color: teal">VNode</span>
                                        </div>
                                    )
                                });
                            }
                        }
                    }
                },
                {
                    title: '不同状态',
                    comp: {
                        template: `<div>
<el-button @click="open2">成功</el-button>
    <el-button @click="open3">警告</el-button>
    <el-button @click="open1">消息</el-button>
    <el-button @click="open4">错误</el-button>
</div>`,
                        methods: {
                            open1() {
                                this.$message('这是一条消息提示');
                            },
                            open2() {
                                this.$message({
                                    message: '恭喜你, 这是一条成功消息',
                                    type: 'success'
                                });
                            },

                            open3() {
                                this.$message({
                                    message: '警告哦, 这是一条警告消息',
                                    type: 'warning'
                                });
                            },

                            open4() {
                                this.$message.error('错了哦, 这是一条错误消息');
                            }
                        }
                    }
                },
                {
                    title: '可关闭',
                    comp: {
                        template: `<div>
<el-button @click="open1">消息</el-button>
    <el-button @click="open2">成功</el-button>
    <el-button @click="open3">警告</el-button>
    <el-button @click="open4">错误</el-button>
</div>`,
                        methods: {
                            open1() {
                                this.$message({
                                    showClose: true,
                                    message: '这是一条消息提示'
                                });
                            },

                            open2() {
                                this.$message({
                                    showClose: true,
                                    message: '恭喜你, 这是一条成功消息',
                                    type: 'success'
                                });
                            },

                            open3() {
                                this.$message({
                                    showClose: true,
                                    message: '警告哦, 这是一条警告消息',
                                    type: 'warning'
                                });
                            },

                            open4() {
                                this.$message({
                                    showClose: true,
                                    message: '错了哦, 这是一条错误消息',
                                    type: 'error'
                                });
                            }
                        }
                    }
                },
                {
                    title: '文字居中',
                    comp: {
                        template: `<div>
<el-button @click="openCenter">文字居中</el-button>
</div>`,
                        methods: {
                            openCenter() {
                                this.$message({
                                    message: '居中的文字',
                                    center: true
                                });
                            }
                        }
                    }
                },
                {
                    title: '使用 HTML 片段',
                    comp: {
                        template: `<div>
<el-button @click="openHTML">使用 HTML 片段</el-button>
</div>`,
                        methods: {
                            openHTML() {
                                this.$message({
                                    dangerouslyUseHTMLString: true,
                                    message: '<strong>这是 <i>HTML</i> 片段</strong>'
                                });
                            }
                        }
                    }
                }
            ]
        };
    }
};
</script>
