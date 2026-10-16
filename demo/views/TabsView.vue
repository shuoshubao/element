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
    name: 'TabsView',
    data() {
        return {
            sections: [
                {
                    title: '基础用法',
                    comp: {
                        template: `<div>
<el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
</div>`,
                        data() {
                            return {
                                activeName: 'second'
                            };
                        },
                        methods: {
                            handleClick(tab, event) {
                                console.log(tab);
                                console.log(event);
                            }
                        }
                    }
                },
                {
                    title: '选项卡样式',
                    comp: {
                        template: `<div>
<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
</div>`,
                        data() {
                            return {
                                activeName: 'first'
                            };
                        },
                        methods: {
                            handleClick(tab, event) {
                                console.log(tab);
                                console.log(event);
                            }
                        }
                    }
                },
                {
                    title: '卡片化',
                    comp: {
                        template: `<div>
<el-tabs type="border-card">
        <el-tab-pane label="用户管理">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
</div>`
                    }
                },
                {
                    title: '位置',
                    comp: {
                        template: `<div>
<el-radio-group v-model="tabPosition">
        <el-radio-button label="top">top</el-radio-button>
        <el-radio-button label="right">right</el-radio-button>
        <el-radio-button label="bottom">bottom</el-radio-button>
        <el-radio-button label="left">left</el-radio-button>
    </el-radio-group>

    <el-divider />

    <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="用户管理">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
</div>`,
                        data() {
                            return {
                                tabPosition: 'left'
                            };
                        }
                    }
                },
                {
                    title: '自定义标签页',
                    comp: {
                        template: `<div>
<el-tabs type="border-card">
        <el-tab-pane>
            <span slot="label">
                <i class="el-icon-date" />
                我的行程
            </span>
            我的行程
        </el-tab-pane>
        <el-tab-pane label="消息中心">消息中心</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
</div>`
                    }
                },
                {
                    title: '动态增减标签页',
                    comp: {
                        template: `<div>
<el-tabs v-model="editableTabsValue" type="card" editable @edit="handleEditTabs">
        <el-tab-pane :key="item.name" v-for="(item, index) in tabsData" :label="item.title" :name="item.name">{{ item.content }}</el-tab-pane>
    </el-tabs>
</div>`,
                        data() {
                            return {
                                editableTabsValue: '2',
                                tabsData: [
                                    {
                                        title: 'Tab 1',
                                        name: '1',
                                        content: 'Tab 1 content'
                                    },
                                    {
                                        title: 'Tab 2',
                                        name: '2',
                                        content: 'Tab 2 content'
                                    }
                                ],
                                tabIndex: 2
                            };
                        },
                        methods: {
                            handleEditTabs(targetName, action) {
                                if (action === 'add') {
                                    let newTabName = ++this.tabIndex + '';
                                    this.tabsData.push({
                                        title: 'New Tab',
                                        name: newTabName,
                                        content: 'New Tab content'
                                    });
                                    this.editableTabsValue = newTabName;
                                }
                                if (action === 'remove') {
                                    let tabs = this.tabsData;
                                    let activeName = this.editableTabsValue;
                                    if (activeName === targetName) {
                                        tabs.forEach((tab, index) => {
                                            if (tab.name === targetName) {
                                                let nextTab = tabs[index + 1] || tabs[index - 1];
                                                if (nextTab) {
                                                    activeName = nextTab.name;
                                                }
                                            }
                                        });
                                    }

                                    this.editableTabsValue = activeName;
                                    this.tabsData = tabs.filter(tab => tab.name !== targetName);
                                }
                            }
                        }
                    }
                },
                {
                    title: '自定义增加标签页触发器',
                    comp: {
                        template: `<div>
<el-button @click="addTab(editableTabsValue)">add tab</el-button>

    <el-divider />

    <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
        <el-tab-pane v-for="(item, index) in tabsData" :key="item.name" :label="item.title" :name="item.name">{{ item.content }}</el-tab-pane>
    </el-tabs>
</div>`,
                        data() {
                            return {
                                editableTabsValue: '2',
                                tabsData: [
                                    {
                                        title: 'Tab 1',
                                        name: '1',
                                        content: 'Tab 1 content'
                                    },
                                    {
                                        title: 'Tab 2',
                                        name: '2',
                                        content: 'Tab 2 content'
                                    }
                                ],
                                tabIndex: 2
                            };
                        },
                        methods: {
                            addTab(targetName) {
                                let newTabName = String(++this.tabIndex);

                                this.tabsData.push({
                                    title: 'New Tab',
                                    name: newTabName,
                                    content: 'New Tab content'
                                });

                                this.editableTabsValue = newTabName;
                            },
                            removeTab(targetName) {
                                let tabs = this.tabsData;

                                let activeName = this.editableTabsValue;

                                if (activeName === targetName) {
                                    tabs.forEach((tab, index) => {
                                        if (tab.name === targetName) {
                                            let nextTab = tabs[index + 1] || tabs[index - 1];
                                            if (nextTab) {
                                                activeName = nextTab.name;
                                            }
                                        }
                                    });
                                }

                                this.editableTabsValue = activeName;

                                this.tabsData = tabs.filter(tab => tab.name !== targetName);
                            }
                        }
                    }
                }
            ]
        };
    }
};
</script>
