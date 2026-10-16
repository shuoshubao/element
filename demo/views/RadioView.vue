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
    name: 'RadioView',
    data() {
        return {
            sections: [
                {
                    title: '基础用法',
                    comp: {
                        template: `<div>
<el-radio v-model="value" label="1">备选项</el-radio>

    <el-radio v-model="value" label="2">备选项</el-radio>
</div>`,
                        data() {
                            return {
                                value: '1'
                            };
                        }
                    }
                },
                {
                    title: '禁用状态',
                    comp: {
                        template: `<div>
<el-radio v-model="value" label="禁用" disabled>备选项</el-radio>
    <el-radio v-model="value" label="选中且禁用" disabled>备选项</el-radio>
</div>`,
                        data() {
                            return {
                                value: '选中且禁用'
                            };
                        }
                    }
                },
                {
                    title: '单选框组',
                    comp: {
                        template: `<div>
<el-radio-group v-model="value">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
    </el-radio-group>
</div>`,
                        data() {
                            return {
                                value: 3
                            };
                        }
                    }
                },
                {
                    title: '按钮样式',
                    comp: {
                        template: `<div>
<el-radio-group v-model="radio1">
        <el-radio-button label="上海" />
        <el-radio-button label="北京" />
        <el-radio-button label="广州" />
        <el-radio-button label="深圳" />
    </el-radio-group>

    <el-divider />

    <el-radio-group v-model="radio2" size="medium">
        <el-radio-button label="上海" />
        <el-radio-button label="北京" />
        <el-radio-button label="广州" />
        <el-radio-button label="深圳" />
    </el-radio-group>

    <el-divider />

    <el-radio-group v-model="radio3" size="small">
        <el-radio-button label="上海" />
        <el-radio-button label="北京" disabled />
        <el-radio-button label="广州" />
        <el-radio-button label="深圳" />
    </el-radio-group>

    <el-divider />

    <el-radio-group v-model="radio4" disabled size="mini">
        <el-radio-button label="上海" />
        <el-radio-button label="北京" />
        <el-radio-button label="广州" />
        <el-radio-button label="深圳" />
    </el-radio-group>
</div>`,
                        data() {
                            return {
                                radio1: '上海',
                                radio2: '上海',
                                radio3: '上海',
                                radio4: '上海'
                            };
                        }
                    }
                },
                {
                    title: '带有边框',
                    comp: {
                        template: `<div>
<el-radio v-model="radio1" label="1" border>备选项1</el-radio>
    <el-radio v-model="radio1" label="2" border>备选项2</el-radio>

    <el-divider />

    <el-radio v-model="radio2" label="1" border size="medium">备选项1</el-radio>
    <el-radio v-model="radio2" label="2" border size="medium">备选项2</el-radio>

    <el-divider />

    <el-radio-group v-model="radio3" size="small">
        <el-radio label="1" border>备选项1</el-radio>
        <el-radio label="2" border disabled>备选项2</el-radio>
    </el-radio-group>

    <el-divider />

    <el-radio-group v-model="radio4" size="mini" disabled>
        <el-radio label="1" border>备选项1</el-radio>
        <el-radio label="2" border>备选项2</el-radio>
    </el-radio-group>
</div>`,
                        data() {
                            return {
                                radio1: '1',
                                radio2: '1',
                                radio3: '1',
                                radio4: '1'
                            };
                        }
                    }
                }
            ]
        };
    }
};
</script>
