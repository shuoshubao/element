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
    name: 'SelectView',
    data() {
        return {
            sections: [
                {
                    title: '基础用法',
                    comp: {
                        template: `<div>
<el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
</div>`,
                        data() {
                            return {
                                options: [
                                    {
                                        label: '黄金糕',
                                        value: '选项1'
                                    },
                                    {
                                        label: '双皮奶',
                                        value: '选项2'
                                    },
                                    {
                                        label: '蚵仔煎',
                                        value: '选项3'
                                    },
                                    {
                                        label: '龙须面',
                                        value: '选项4'
                                    },
                                    {
                                        label: '北京烤鸭',
                                        value: '选项5'
                                    }
                                ],
                                value: ''
                            };
                        }
                    }
                },
                {
                    title: '有禁用选项',
                    comp: {
                        template: `<div>
<el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled" />
    </el-select>
</div>`,
                        data() {
                            return {
                                options: [
                                    {
                                        label: '黄金糕',
                                        value: '选项1'
                                    },
                                    {
                                        label: '双皮奶',
                                        value: '选项2',
                                        disabled: true
                                    },
                                    {
                                        label: '蚵仔煎',
                                        value: '选项3'
                                    },
                                    {
                                        label: '龙须面',
                                        value: '选项4'
                                    },
                                    {
                                        label: '北京烤鸭',
                                        value: '选项5'
                                    }
                                ],
                                value: ''
                            };
                        }
                    }
                },
                {
                    title: '禁用状态',
                    comp: {
                        template: `<div>
<el-select v-model="value" disabled placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
</div>`,
                        data() {
                            return {
                                options: [
                                    {
                                        label: '黄金糕',
                                        value: '选项1'
                                    },
                                    {
                                        label: '双皮奶',
                                        value: '选项2'
                                    },
                                    {
                                        label: '蚵仔煎',
                                        value: '选项3'
                                    },
                                    {
                                        label: '龙须面',
                                        value: '选项4'
                                    },
                                    {
                                        label: '北京烤鸭',
                                        value: '选项5'
                                    }
                                ],
                                value: ''
                            };
                        }
                    }
                },
                {
                    title: '可清空单选',
                    comp: {
                        template: `<div>
<el-select v-model="value" clearable placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
</div>`,
                        data() {
                            return {
                                options: [
                                    {
                                        label: '黄金糕',
                                        value: '选项1'
                                    },
                                    {
                                        label: '双皮奶',
                                        value: '选项2'
                                    },
                                    {
                                        label: '蚵仔煎',
                                        value: '选项3'
                                    },
                                    {
                                        label: '龙须面',
                                        value: '选项4'
                                    },
                                    {
                                        label: '北京烤鸭',
                                        value: '选项5'
                                    }
                                ],
                                value: ''
                            };
                        }
                    }
                },
                {
                    title: '基础多选',
                    comp: {
                        template: `<div>
<el-select v-model="value1" multiple placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>

    <el-select v-model="value2" multiple collapse-tags placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
</div>`,
                        data() {
                            return {
                                options: [
                                    {
                                        label: '黄金糕',
                                        value: '选项1'
                                    },
                                    {
                                        label: '双皮奶',
                                        value: '选项2'
                                    },
                                    {
                                        label: '蚵仔煎',
                                        value: '选项3'
                                    },
                                    {
                                        label: '龙须面',
                                        value: '选项4'
                                    },
                                    {
                                        label: '北京烤鸭',
                                        value: '选项5'
                                    }
                                ],
                                value1: [],
                                value2: []
                            };
                        }
                    }
                },
                {
                    title: '自定义模板',
                    comp: {
                        template: `<div>
<el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
        </el-option>
    </el-select>
</div>`,
                        data() {
                            return {
                                options: [
                                    {
                                        label: '北京',
                                        value: 'Beijing'
                                    },
                                    {
                                        label: '上海',
                                        value: 'Shanghai'
                                    },
                                    {
                                        label: '南京',
                                        value: 'Nanjing'
                                    },
                                    {
                                        label: '成都',
                                        value: 'Chengdu'
                                    },
                                    {
                                        label: '深圳',
                                        value: 'Shenzhen'
                                    },
                                    {
                                        label: '广州',
                                        value: 'Guangzhou'
                                    }
                                ],
                                value: ''
                            };
                        }
                    }
                },
                {
                    title: '分组',
                    comp: {
                        template: `<div>
<el-select v-model="value" placeholder="请选择">
        <el-option-group v-for="group in options" :key="group.label" :label="group.label">
            <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value" />
        </el-option-group>
    </el-select>
</div>`,
                        data() {
                            return {
                                options: [
                                    {
                                        label: '热门城市',
                                        options: [
                                            {
                                                label: '上海',
                                                value: 'Shanghai'
                                            },
                                            {
                                                label: '北京',
                                                value: 'Beijing'
                                            }
                                        ]
                                    },
                                    {
                                        label: '城市名',
                                        options: [
                                            {
                                                label: '成都',
                                                value: 'Chengdu'
                                            },
                                            {
                                                label: '深圳',
                                                value: 'Shenzhen'
                                            },
                                            {
                                                label: '广州',
                                                value: 'Guangzhou'
                                            },
                                            {
                                                label: '大连',
                                                value: 'Dalian'
                                            }
                                        ]
                                    }
                                ],
                                value: ''
                            };
                        }
                    }
                },
                {
                    title: '可搜索',
                    comp: {
                        template: `<div>
<el-select v-model="value" filterable placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
</div>`,
                        data() {
                            return {
                                options: [
                                    {
                                        label: '黄金糕',
                                        value: '选项1'
                                    },
                                    {
                                        label: '双皮奶',
                                        value: '选项2'
                                    },
                                    {
                                        label: '蚵仔煎',
                                        value: '选项3'
                                    },
                                    {
                                        label: '龙须面',
                                        value: '选项4'
                                    },
                                    {
                                        label: '北京烤鸭',
                                        value: '选项5'
                                    }
                                ],
                                value: ''
                            };
                        }
                    }
                },
                {
                    title: '远程搜索',
                    comp: {
                        template: `<div>
<el-select v-model="value" multiple filterable remote reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
</div>`,
                        data() {
                            return {
                                options: [],
                                value: [],
                                list: [],
                                loading: false,
                                states: [
                                    'Alabama',
                                    'Alaska',
                                    'Arizona',
                                    'Arkansas',
                                    'California',
                                    'Colorado',
                                    'Connecticut',
                                    'Delaware',
                                    'Florida',
                                    'Georgia',
                                    'Hawaii',
                                    'Idaho',
                                    'Illinois',
                                    'Indiana',
                                    'Iowa',
                                    'Kansas',
                                    'Kentucky',
                                    'Louisiana',
                                    'Maine',
                                    'Maryland',
                                    'Massachusetts',
                                    'Michigan',
                                    'Minnesota',
                                    'Mississippi',
                                    'Missouri',
                                    'Montana',
                                    'Nebraska',
                                    'Nevada',
                                    'New Hampshire',
                                    'New Jersey',
                                    'New Mexico',
                                    'New York',
                                    'North Carolina',
                                    'North Dakota',
                                    'Ohio',
                                    'Oklahoma',
                                    'Oregon',
                                    'Pennsylvania',
                                    'Rhode Island',
                                    'South Carolina',
                                    'South Dakota',
                                    'Tennessee',
                                    'Texas',
                                    'Utah',
                                    'Vermont',
                                    'Virginia',
                                    'Washington',
                                    'West Virginia',
                                    'Wisconsin',
                                    'Wyoming'
                                ]
                            };
                        },
                        mounted() {
                            this.list = this.states.map(item => {
                                return { value: `value:${item}`, label: `label:${item}` };
                            });
                        },
                        methods: {
                            remoteMethod(query) {
                                if (query !== '') {
                                    this.loading = true;
                                    setTimeout(() => {
                                        this.loading = false;
                                        this.options = this.list.filter(item => {
                                            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
                                        });
                                    }, 200);
                                } else {
                                    this.options = [];
                                }
                            }
                        }
                    }
                },
                {
                    title: '创建条目',
                    comp: {
                        template: `<div>
<el-select v-model="value" multiple filterable allow-create default-first-option placeholder="请选择文章标签">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
</div>`,
                        data() {
                            return {
                                options: [
                                    {
                                        label: 'HTML',
                                        value: 'HTML'
                                    },
                                    {
                                        label: 'CSS',
                                        value: 'CSS'
                                    },
                                    {
                                        label: 'JavaScript',
                                        value: 'JavaScript'
                                    }
                                ],
                                value: []
                            };
                        }
                    }
                }
            ]
        };
    }
};
</script>
