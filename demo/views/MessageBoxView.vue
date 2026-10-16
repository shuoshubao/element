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
    name: 'MessageBoxView',
    data() {
        return {
            sections: [
                {
                    title: '消息提示',
                    comp: {
                        template: `<div>
<el-button @click="handleOpenMessage">点击打开 Message Box</el-button>
</div>`,
                        methods: {
                            handleOpenMessage() {
                                this.$alert('这是一段内容', '标题名称', {
                                    confirmButtonText: '确定',
                                    callback: action => {
                                        this.$message.info(`action: ${action}`);
                                    }
                                });
                            }
                        }
                    }
                },
                {
                    title: '确认消息',
                    comp: {
                        template: `<div>
<el-button @click="handleOpenMessage">点击打开 Message Box</el-button>
</div>`,
                        methods: {
                            handleOpenMessage() {
                                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                                    confirmButtonText: '确定',
                                    cancelButtonText: '取消',
                                    type: 'warning'
                                })
                                    .then(() => {
                                        this.$message.success('删除成功!');
                                    })
                                    .catch(() => {
                                        this.$message.info('已取消删除');
                                    });
                            }
                        }
                    }
                },
                {
                    title: '提交内容',
                    comp: {
                        template: `<div>
<el-button @click="handleOpenMessage">点击打开 Message Box</el-button>
</div>`,
                        methods: {
                            handleOpenMessage() {
                                this.$prompt('请输入邮箱', '提示', {
                                    confirmButtonText: '确定',
                                    cancelButtonText: '取消',
                                    inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                                    inputErrorMessage: '邮箱格式不正确'
                                })
                                    .then(({ value }) => {
                                        this.$message.success('你的邮箱是: ' + value);
                                    })
                                    .catch(() => {
                                        this.$message.info('取消输入');
                                    });
                            }
                        }
                    }
                },
                {
                    title: '自定义',
                    comp: {
                        template: `<div>
<el-button @click="handleOpenMessage">点击打开 Message Box</el-button>
</div>`,
                        methods: {
                            handleOpenMessage() {
                                this.$msgbox({
                                    title: '消息',
                                    message: (
                                        <div>
                                            <span>内容可以是</span>
                                            <span style="color: teal">VNode</span>
                                        </div>
                                    ),
                                    showCancelButton: true,
                                    confirmButtonText: '确定',
                                    cancelButtonText: '取消',
                                    beforeClose: (action, instance, done) => {
                                        if (action === 'confirm') {
                                            instance.confirmButtonLoading = true;
                                            instance.confirmButtonText = '执行中...';
                                            setTimeout(() => {
                                                done();
                                                setTimeout(() => {
                                                    instance.confirmButtonLoading = false;
                                                }, 300);
                                            }, 3000);
                                        } else {
                                            done();
                                        }
                                    }
                                }).then(action => {
                                    this.$message.info(`action: ${action}`);
                                });
                            }
                        }
                    }
                },
                {
                    title: '使用 HTML 片段',
                    comp: {
                        template: `<div>
<el-button @click="handleOpenMessage">点击打开 Message Box</el-button>
</div>`,
                        methods: {
                            handleOpenMessage() {
                                this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
                                    dangerouslyUseHTMLString: true
                                });
                            }
                        }
                    }
                },
                {
                    title: '区分取消与关闭',
                    comp: {
                        template: `<div>
<el-button @click="handleOpenMessage">点击打开 Message Box</el-button>
</div>`,
                        methods: {
                            handleOpenMessage() {
                                this.$confirm('检测到未保存的内容, 是否在离开页面前保存修改?', '确认信息', {
                                    distinguishCancelAndClose: true,
                                    confirmButtonText: '保存',
                                    cancelButtonText: '放弃修改'
                                })
                                    .then(() => {
                                        this.$message.info('保存修改');
                                    })
                                    .catch(action => {
                                        this.$message.info(action === 'cancel' ? '放弃保存并离开页面' : '停留在当前页面');
                                    });
                            }
                        }
                    }
                },
                {
                    title: '居中布局',
                    comp: {
                        template: `<div>
<el-button @click="handleOpenMessage">点击打开 Message Box</el-button>
</div>`,
                        methods: {
                            handleOpenMessage() {
                                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                                    confirmButtonText: '确定',
                                    cancelButtonText: '取消',
                                    type: 'warning',
                                    center: true
                                })
                                    .then(() => {
                                        this.$message.success('删除成功');
                                    })
                                    .catch(() => {
                                        this.$message.info('已取消删除');
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
