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
    name: 'NotificationView',
    data() {
        return {
            sections: [
                {
                    title: '基本用法',
                    comp: {
                        template: `<div>
<el-button plain @click="open1">可自动关闭</el-button>
    <el-button plain @click="open2">不会自动关闭</el-button>
</div>`,
                        methods: {
                            open1() {
                                this.$notify({
                                    title: '标题名称',
                                    message: (
                                        <div style="color: teal">
                                            这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案
                                        </div>
                                    )
                                });
                            },
                            open2() {
                                this.$notify({
                                    title: '提示',
                                    message: '这是一条不会自动关闭的消息',
                                    duration: 0
                                });
                            }
                        }
                    }
                },
                {
                    title: '带有倾向性',
                    comp: {
                        template: `<div>
<el-button plain @click="open1">成功</el-button>

    <el-button plain @click="open2">警告</el-button>

    <el-button plain @click="open3">消息</el-button>

    <el-button plain @click="open4">错误</el-button>
</div>`,
                        methods: {
                            open1() {
                                this.$notify({
                                    type: 'success',
                                    title: '成功',
                                    message: '这是一条成功的提示消息'
                                });
                            },
                            open2() {
                                this.$notify({
                                    type: 'warning',
                                    title: '警告',
                                    message: '这是一条警告的提示消息'
                                });
                            },
                            open3() {
                                this.$notify.info({
                                    title: '消息',
                                    message: '这是一条消息的提示消息'
                                });
                            },
                            open4() {
                                this.$notify.error({
                                    title: '错误',
                                    message: '这是一条错误的提示消息'
                                });
                            }
                        }
                    }
                },
                {
                    title: '自定义弹出位置',
                    comp: {
                        template: `<div>
<el-button plain @click="open1">右上角</el-button>

    <el-button plain @click="open2">右下角</el-button>

    <el-button plain @click="open3">左下角</el-button>

    <el-button plain @click="open4">左上角</el-button>
</div>`,
                        methods: {
                            open1() {
                                this.$notify({
                                    title: '自定义位置',
                                    message: '右上角弹出的消息'
                                });
                            },

                            open2() {
                                this.$notify({
                                    title: '自定义位置',
                                    message: '右下角弹出的消息',
                                    position: 'bottom-right'
                                });
                            },

                            open3() {
                                this.$notify({
                                    title: '自定义位置',
                                    message: '左下角弹出的消息',
                                    position: 'bottom-left'
                                });
                            },

                            open4() {
                                this.$notify({
                                    title: '自定义位置',
                                    message: '左上角弹出的消息',
                                    position: 'top-left'
                                });
                            }
                        }
                    }
                },
                {
                    title: '带有偏移',
                    comp: {
                        template: `<div>
<el-button plain @click="open">偏移的消息</el-button>
</div>`,
                        methods: {
                            open() {
                                this.$notify({
                                    title: '偏移',
                                    message: '这是一条带有偏移的提示消息',
                                    offset: 100
                                });
                            }
                        }
                    }
                },
                {
                    title: '使用 HTML 片段',
                    comp: {
                        template: `<div>
<el-button plain @click="open">使用 HTML 片段</el-button>
</div>`,
                        methods: {
                            open() {
                                this.$notify({
                                    title: 'HTML 片段',
                                    dangerouslyUseHTMLString: true,
                                    message: '<strong>这是 <i>HTML</i> 片段</strong>'
                                });
                            }
                        }
                    }
                },
                {
                    title: '隐藏关闭按钮',
                    comp: {
                        template: `<div>
<el-button plain @click="open">隐藏关闭按钮</el-button>
</div>`,
                        methods: {
                            open() {
                                this.$notify.success({
                                    title: 'Info',
                                    message: '这是一条没有关闭按钮的消息',
                                    showClose: false
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
