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
    name: 'TreeView',
    data() {
        return {
            sections: [
                {
                    title: '基础用法',
                    comp: {
                        template: `<div>
<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
</div>`,
                        data() {
                            return {
                                data: [
                                    {
                                        label: '一级 1',
                                        children: [
                                            {
                                                label: '二级 1-1',
                                                children: [
                                                    {
                                                        label: '三级 1-1-1'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        label: '一级 2',
                                        children: [
                                            {
                                                label: '二级 2-1',
                                                children: [
                                                    {
                                                        label: '三级 2-1-1'
                                                    }
                                                ]
                                            },
                                            {
                                                label: '二级 2-2',
                                                children: [
                                                    {
                                                        label: '三级 2-2-1'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        label: '一级 3',
                                        children: [
                                            {
                                                label: '二级 3-1',
                                                children: [
                                                    {
                                                        label: '三级 3-1-1'
                                                    }
                                                ]
                                            },
                                            {
                                                label: '二级 3-2',
                                                children: [
                                                    {
                                                        label: '三级 3-2-1'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                defaultProps: {
                                    children: 'children',
                                    label: 'label'
                                }
                            };
                        },
                        methods: {
                            handleNodeClick(data) {
                                console.log(data);
                            }
                        }
                    }
                },
                {
                    title: '可选择',
                    comp: {
                        template: `<div>
<el-tree :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange" />
</div>`,
                        data() {
                            return {
                                props: {
                                    label: 'name',
                                    children: 'zones'
                                },
                                count: 1
                            };
                        },
                        methods: {
                            handleCheckChange(data, checked, indeterminate) {
                                console.log(data, checked, indeterminate);
                            },
                            handleNodeClick(data) {
                                console.log(data);
                            },
                            loadNode(node, resolve) {
                                if (node.level === 0) {
                                    return resolve([{ name: 'region1' }, { name: 'region2' }]);
                                }
                                if (node.level > 3) return resolve([]);

                                var hasChild;
                                if (node.data.name === 'region1') {
                                    hasChild = true;
                                } else if (node.data.name === 'region2') {
                                    hasChild = false;
                                } else {
                                    hasChild = Math.random() > 0.5;
                                }

                                setTimeout(() => {
                                    var data;
                                    if (hasChild) {
                                        data = [
                                            {
                                                name: 'zone' + this.count++
                                            },
                                            {
                                                name: 'zone' + this.count++
                                            }
                                        ];
                                    } else {
                                        data = [];
                                    }

                                    resolve(data);
                                }, 500);
                            }
                        }
                    }
                },
                {
                    title: '懒加载自定义叶子节点',
                    comp: {
                        template: `<div>
<el-tree :props="props" :load="loadNode" lazy show-checkbox />
</div>`,
                        data() {
                            return {
                                props: {
                                    label: 'name',
                                    children: 'zones',
                                    isLeaf: 'leaf'
                                }
                            };
                        },
                        methods: {
                            loadNode(node, resolve) {
                                if (node.level === 0) {
                                    return resolve([{ name: 'region' }]);
                                }
                                if (node.level > 1) return resolve([]);

                                setTimeout(() => {
                                    const data = [
                                        {
                                            name: 'leaf',
                                            leaf: true
                                        },
                                        {
                                            name: 'zone'
                                        }
                                    ];

                                    resolve(data);
                                }, 500);
                            }
                        }
                    }
                },
                {
                    title: '默认展开和默认选中',
                    comp: {
                        template: `<div>
<el-tree node-key="id" :data="data" :props="defaultProps" show-checkbox :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" />
</div>`,
                        data() {
                            return {
                                data: [
                                    {
                                        id: 1,
                                        label: '一级 1',
                                        children: [
                                            {
                                                id: 4,
                                                label: '二级 1-1',
                                                children: [
                                                    {
                                                        id: 9,
                                                        label: '三级 1-1-1'
                                                    },
                                                    {
                                                        id: 10,
                                                        label: '三级 1-1-2'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        id: 2,
                                        label: '一级 2',
                                        children: [
                                            {
                                                id: 5,
                                                label: '二级 2-1'
                                            },
                                            {
                                                id: 6,
                                                label: '二级 2-2'
                                            }
                                        ]
                                    },
                                    {
                                        id: 3,
                                        label: '一级 3',
                                        children: [
                                            {
                                                id: 7,
                                                label: '二级 3-1'
                                            },
                                            {
                                                id: 8,
                                                label: '二级 3-2'
                                            }
                                        ]
                                    }
                                ],
                                defaultProps: {
                                    children: 'children',
                                    label: 'label'
                                }
                            };
                        }
                    }
                },
                {
                    title: '禁用状态',
                    comp: {
                        template: `<div>
<el-tree node-key="id" :data="data" show-checkbox :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" />
</div>`,
                        data() {
                            return {
                                data: [
                                    {
                                        id: 1,
                                        label: '一级 2',
                                        children: [
                                            {
                                                id: 3,
                                                label: '二级 2-1',
                                                children: [
                                                    {
                                                        id: 4,
                                                        label: '三级 3-1-1'
                                                    },
                                                    {
                                                        id: 5,
                                                        label: '三级 3-1-2',
                                                        disabled: true
                                                    }
                                                ]
                                            },
                                            {
                                                id: 2,
                                                label: '二级 2-2',
                                                disabled: true,
                                                children: [
                                                    {
                                                        id: 6,
                                                        label: '三级 3-2-1'
                                                    },
                                                    {
                                                        id: 7,
                                                        label: '三级 3-2-2',
                                                        disabled: true
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                defaultProps: {
                                    children: 'children',
                                    label: 'label'
                                }
                            };
                        }
                    }
                },
                {
                    title: '树节点的选择',
                    comp: {
                        template: `<div>
<el-tree ref="treeRef" node-key="id" :data="data" :props="defaultProps" show-checkbox default-expand-all highlight-current />

    <el-divider />

    <el-button @click="getCheckedNodes">通过 node 获取</el-button>
    <el-button @click="getCheckedKeys">通过 key 获取</el-button>
    <el-button @click="setCheckedNodes">通过 node 设置</el-button>
    <el-button @click="setCheckedKeys">通过 key 设置</el-button>
    <el-button @click="resetChecked">清空</el-button>
</div>`,
                        data() {
                            return {
                                data: [
                                    {
                                        id: 1,
                                        label: '一级 1',
                                        children: [
                                            {
                                                id: 4,
                                                label: '二级 1-1',
                                                children: [
                                                    {
                                                        id: 9,
                                                        label: '三级 1-1-1'
                                                    },
                                                    {
                                                        id: 10,
                                                        label: '三级 1-1-2'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        id: 2,
                                        label: '一级 2',
                                        children: [
                                            {
                                                id: 5,
                                                label: '二级 2-1'
                                            },
                                            {
                                                id: 6,
                                                label: '二级 2-2'
                                            }
                                        ]
                                    },
                                    {
                                        id: 3,
                                        label: '一级 3',
                                        children: [
                                            {
                                                id: 7,
                                                label: '二级 3-1'
                                            },
                                            {
                                                id: 8,
                                                label: '二级 3-2'
                                            }
                                        ]
                                    }
                                ],
                                defaultProps: {
                                    children: 'children',
                                    label: 'label'
                                }
                            };
                        },
                        methods: {
                            getCheckedNodes() {
                                console.log(this.$refs.treeRef.getCheckedNodes());
                            },
                            getCheckedKeys() {
                                console.log(this.$refs.treeRef.getCheckedKeys());
                            },
                            setCheckedNodes() {
                                this.$refs.treeRef.setCheckedNodes([
                                    {
                                        id: 5,
                                        label: '二级 2-1'
                                    },
                                    {
                                        id: 9,
                                        label: '三级 1-1-1'
                                    }
                                ]);
                            },
                            setCheckedKeys() {
                                this.$refs.treeRef.setCheckedKeys([3]);
                            },
                            resetChecked() {
                                this.$refs.treeRef.setCheckedKeys([]);
                            }
                        }
                    }
                },
                {
                    title: '自定义节点内容',
                    comp: (function () {
                        let id = 1000;
                        return {
                            template: `<div>
<div class="block-horizontal aequilate">
        <div>
            <div>使用 render-content</div>
            <el-tree node-key="id" :data="data" show-checkbox default-expand-all :expand-on-click-node="false" :render-content="renderContent" />
        </div>

        <div>
            <div>使用 scoped slot</div>
            <el-tree node-key="id" :data="data" show-checkbox default-expand-all :expand-on-click-node="false">
                <div slot-scope="{ node, data }" class="custom-tree-node">
                    <span>{{ node.label }}</span>
                    <span>
                        <el-button type="text" size="mini" @click="() => append(data)">Append</el-button>
                        <el-button type="text" size="mini" @click="() => remove(node, data)">Delete</el-button>
                    </span>
                </div>
            </el-tree>
        </div>
    </div>
</div>`,
                            data() {
                                const data = [
                                    {
                                        id: 1,
                                        label: '一级 1',
                                        children: [
                                            {
                                                id: 4,
                                                label: '二级 1-1',
                                                children: [
                                                    {
                                                        id: 9,
                                                        label: '三级 1-1-1'
                                                    },
                                                    {
                                                        id: 10,
                                                        label: '三级 1-1-2'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        id: 2,
                                        label: '一级 2',
                                        children: [
                                            {
                                                id: 5,
                                                label: '二级 2-1'
                                            },
                                            {
                                                id: 6,
                                                label: '二级 2-2'
                                            }
                                        ]
                                    },
                                    {
                                        id: 3,
                                        label: '一级 3',
                                        children: [
                                            {
                                                id: 7,
                                                label: '二级 3-1'
                                            },
                                            {
                                                id: 8,
                                                label: '二级 3-2'
                                            }
                                        ]
                                    }
                                ];
                                return {
                                    data: JSON.parse(JSON.stringify(data)),
                                    data: JSON.parse(JSON.stringify(data))
                                };
                            },
                            methods: {
                                append(data) {
                                    const newChild = { id: id++, label: 'testtest', children: [] };
                                    if (!data.children) {
                                        this.$set(data, 'children', []);
                                    }
                                    data.children.push(newChild);
                                },
                                remove(node, data) {
                                    const parent = node.parent;
                                    const children = parent.data.children || parent.data;
                                    const index = children.findIndex(d => d.id === data.id);
                                    children.splice(index, 1);
                                },
                                renderContent(h, { node, data, store }) {
                                    return (
                                        <div class="custom-tree-node">
                                            <span>{node.label}</span>
                                            <span>
                                                <el-button size="mini" type="text" on-click={() => this.append(data)}>
                                                    Append
                                                </el-button>
                                                <el-button size="mini" type="text" on-click={() => this.remove(node, data)}>
                                                    Delete
                                                </el-button>
                                            </span>
                                        </div>
                                    );
                                }
                            }
                        };
                    })()
                },
                {
                    title: '节点过滤',
                    comp: {
                        template: `<div>
<el-input v-model="filterText" placeholder="输入关键字进行过滤" />

    <el-tree ref="treeRef" :data="data" :props="defaultProps" default-expand-all :filter-node-method="filterNode" />
</div>`,
                        data() {
                            return {
                                filterText: '',
                                data: [
                                    {
                                        id: 1,
                                        label: '一级 1',
                                        children: [
                                            {
                                                id: 4,
                                                label: '二级 1-1',
                                                children: [
                                                    {
                                                        id: 9,
                                                        label: '三级 1-1-1'
                                                    },
                                                    {
                                                        id: 10,
                                                        label: '三级 1-1-2'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        id: 2,
                                        label: '一级 2',
                                        children: [
                                            {
                                                id: 5,
                                                label: '二级 2-1'
                                            },
                                            {
                                                id: 6,
                                                label: '二级 2-2'
                                            }
                                        ]
                                    },
                                    {
                                        id: 3,
                                        label: '一级 3',
                                        children: [
                                            {
                                                id: 7,
                                                label: '二级 3-1'
                                            },
                                            {
                                                id: 8,
                                                label: '二级 3-2'
                                            }
                                        ]
                                    }
                                ],
                                defaultProps: {
                                    children: 'children',
                                    label: 'label'
                                }
                            };
                        },
                        watch: {
                            filterText(val) {
                                this.$refs.treeRef.filter(val);
                            }
                        },
                        methods: {
                            filterNode(value, data) {
                                if (!value) return true;
                                return data.label.indexOf(value) !== -1;
                            }
                        }
                    }
                },
                {
                    title: '手风琴模式',
                    comp: {
                        template: `<div>
<el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick" />
</div>`,
                        data() {
                            return {
                                data: [
                                    {
                                        label: '一级 1',
                                        children: [
                                            {
                                                label: '二级 1-1',
                                                children: [
                                                    {
                                                        label: '三级 1-1-1'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        label: '一级 2',
                                        children: [
                                            {
                                                label: '二级 2-1',
                                                children: [
                                                    {
                                                        label: '三级 2-1-1'
                                                    }
                                                ]
                                            },
                                            {
                                                label: '二级 2-2',
                                                children: [
                                                    {
                                                        label: '三级 2-2-1'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        label: '一级 3',
                                        children: [
                                            {
                                                label: '二级 3-1',
                                                children: [
                                                    {
                                                        label: '三级 3-1-1'
                                                    }
                                                ]
                                            },
                                            {
                                                label: '二级 3-2',
                                                children: [
                                                    {
                                                        label: '三级 3-2-1'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                defaultProps: {
                                    children: 'children',
                                    label: 'label'
                                }
                            };
                        },
                        methods: {
                            handleNodeClick(data) {
                                console.log(data);
                            }
                        }
                    }
                },
                {
                    title: '可拖拽节点',
                    comp: {
                        template: `<div>
<el-tree
        node-key="id"
        :data="data"
        default-expand-all
        draggable
        :allow-drop="allowDrop"
        :allow-drag="allowDrag"
        @node-drag-start="handleDragStart"
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"
        @node-drop="handleDrop"
    />
</div>`,
                        data() {
                            return {
                                data: [
                                    {
                                        id: 1,
                                        label: '一级 1',
                                        children: [
                                            {
                                                id: 4,
                                                label: '二级 1-1',
                                                children: [
                                                    {
                                                        id: 9,
                                                        label: '三级 1-1-1'
                                                    },
                                                    {
                                                        id: 10,
                                                        label: '三级 1-1-2'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        id: 2,
                                        label: '一级 2',
                                        children: [
                                            {
                                                id: 5,
                                                label: '二级 2-1'
                                            },
                                            {
                                                id: 6,
                                                label: '二级 2-2'
                                            }
                                        ]
                                    },
                                    {
                                        id: 3,
                                        label: '一级 3',
                                        children: [
                                            {
                                                id: 7,
                                                label: '二级 3-1'
                                            },
                                            {
                                                id: 8,
                                                label: '二级 3-2',
                                                children: [
                                                    {
                                                        id: 11,
                                                        label: '三级 3-2-1'
                                                    },
                                                    {
                                                        id: 12,
                                                        label: '三级 3-2-2'
                                                    },
                                                    {
                                                        id: 13,
                                                        label: '三级 3-2-3'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                defaultProps: {
                                    label: 'label',
                                    children: 'children'
                                }
                            };
                        },
                        methods: {
                            handleDragStart(node, ev) {
                                console.log('drag start', node);
                            },
                            handleDragEnter(draggingNode, dropNode, ev) {
                                console.log('tree drag enter: ', dropNode.label);
                            },
                            handleDragLeave(draggingNode, dropNode, ev) {
                                console.log('tree drag leave: ', dropNode.label);
                            },
                            handleDragOver(draggingNode, dropNode, ev) {
                                console.log('tree drag over: ', dropNode.label);
                            },
                            handleDragEnd(draggingNode, dropNode, dropType, ev) {
                                console.log('tree drag end: ', dropNode && dropNode.label, dropType);
                            },
                            handleDrop(draggingNode, dropNode, dropType, ev) {
                                console.log('tree drop: ', dropNode.label, dropType);
                            },
                            allowDrop(draggingNode, dropNode, type) {
                                if (dropNode.data.label === '二级 3-1') {
                                    return type !== 'inner';
                                } else {
                                    return true;
                                }
                            },
                            allowDrag(draggingNode) {
                                return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
                            }
                        }
                    }
                }
            ]
        };
    }
};
</script>

<style>
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
}
</style>
