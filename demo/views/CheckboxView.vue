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
    name: 'CheckboxView',
    data() {
        return {
            sections: [
                {
                    title: '基础用法',
                    comp: {
                        template: `<div>
<el-checkbox v-model="checked">备选项</el-checkbox>
</div>`,
                        data() {
                            return {
                                checked: true
                            };
                        }
                    }
                },
                {
                    title: '禁用状态',
                    comp: {
                        template: `<div>
<el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>

    <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
</div>`,
                        data() {
                            return {
                                checked1: false,
                                checked2: true
                            };
                        }
                    }
                },
                {
                    title: '多选框组',
                    comp: {
                        template: `<div>
<el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框 A" />
        <el-checkbox label="复选框 B" />
        <el-checkbox label="复选框 C" />
        <el-checkbox label="禁用" disabled />
        <el-checkbox label="选中且禁用" disabled />
    </el-checkbox-group>
</div>`,
                        data() {
                            return {
                                checkList: ['选中且禁用', '复选框 A']
                            };
                        }
                    }
                },
                {
                    title: 'indeterminate 状态',
                    comp: (function () {
                        const options = ['上海', '北京', '广州', '深圳'];
                        return {
                            template: `<div>
<el-checkbox v-model="checkAll" :indeterminate="indeterminate" @change="handleChangeCheckAll">全选</el-checkbox>

    <el-divider />

    <el-checkbox-group v-model="checkedData" @change="handleChange">
        <el-checkbox v-for="item in options" :key="item" :label="item">{{ item }}</el-checkbox>
    </el-checkbox-group>
</div>`,
                            data() {
                                return {
                                    checkAll: false,
                                    checkedData: ['上海', '北京'],
                                    options,
                                    indeterminate: true
                                };
                            },
                            methods: {
                                handleChangeCheckAll(val) {
                                    this.checkedData = val ? options : [];
                                    this.indeterminate = false;
                                },
                                handleChange(value) {
                                    let checkedCount = value.length;
                                    this.checkAll = checkedCount === this.options.length;
                                    this.indeterminate = checkedCount > 0 && checkedCount < this.options.length;
                                }
                            }
                        };
                    })()
                },
                {
                    title: '可选项目数量的限制',
                    comp: (function () {
                        const options = ['上海', '北京', '广州', '深圳'];
                        return {
                            template: `<div>
<el-checkbox-group v-model="checkedData" :min="1" :max="2">
        <el-checkbox v-for="item in options" :key="item" :label="item">{{ item }}</el-checkbox>
    </el-checkbox-group>
</div>`,
                            data() {
                                return {
                                    checkedData: ['上海', '北京'],
                                    options
                                };
                            }
                        };
                    })()
                },
                {
                    title: '按钮样式',
                    comp: (function () {
                        const options = ['上海', '北京', '广州', '深圳'];
                        return {
                            template: `<div>
<div class="block-vertical">
        <el-checkbox-group v-model="checkboxGroup1">
            <el-checkbox-button v-for="item in options" :label="item" :key="item">{{ item }}</el-checkbox-button>
        </el-checkbox-group>

        <el-checkbox-group v-model="checkboxGroup2" size="medium">
            <el-checkbox-button v-for="item in options" :label="item" :key="item">{{ item }}</el-checkbox-button>
        </el-checkbox-group>

        <el-checkbox-group v-model="checkboxGroup3" size="small">
            <el-checkbox-button v-for="item in options" :label="item" :disabled="item === '北京'" :key="item">{{ item }}</el-checkbox-button>
        </el-checkbox-group>

        <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
            <el-checkbox-button v-for="item in options" :label="item" :key="item">{{ item }}</el-checkbox-button>
        </el-checkbox-group>
    </div>
</div>`,
                            data() {
                                return {
                                    checkboxGroup1: ['上海'],
                                    checkboxGroup2: ['上海'],
                                    checkboxGroup3: ['上海'],
                                    checkboxGroup4: ['上海'],
                                    options
                                };
                            }
                        };
                    })()
                },
                {
                    title: '带有边框',
                    comp: {
                        template: `<div>
<div class="block-vertical">
        <div>
            <el-checkbox v-model="checked1" label="备选项1" border />
            <el-checkbox v-model="checked2" label="备选项2" border />
        </div>

        <div>
            <el-checkbox v-model="checked3" label="备选项1" border size="medium" />
            <el-checkbox v-model="checked4" label="备选项2" border size="medium" />
        </div>

        <el-checkbox-group v-model="checkboxGroup1" size="small">
            <el-checkbox label="备选项1" border />
            <el-checkbox label="备选项2" border disabled />
        </el-checkbox-group>

        <el-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
            <el-checkbox label="备选项1" border />
            <el-checkbox label="备选项2" border />
        </el-checkbox-group>
    </div>
</div>`,
                        data() {
                            return {
                                checked1: true,
                                checked2: false,
                                checked3: false,
                                checked4: true,
                                checkboxGroup1: [],
                                checkboxGroup2: []
                            };
                        }
                    }
                }
            ]
        };
    }
};
</script>
