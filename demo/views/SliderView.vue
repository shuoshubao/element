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
    name: 'SliderView',
    data() {
        return {
            sections: [
                {
                    title: '基础用法',
                    comp: {
                        template: `<div>
<div>默认</div>
    <el-slider v-model="value1" />

    <div>自定义初始值</div>
    <el-slider v-model="value2" />

    <div>隐藏 Tooltip</div>
    <el-slider v-model="value3" :show-tooltip="false" />

    <div>格式化 Tooltip</div>
    <el-slider v-model="value4" :format-tooltip="formatTooltip" />

    <div>禁用</div>
    <el-slider v-model="value5" disabled />
</div>`,
                        data() {
                            return {
                                value1: 0,
                                value2: 50,
                                value3: 36,
                                value4: 48,
                                value5: 42
                            };
                        },
                        methods: {
                            formatTooltip(val) {
                                return val / 100;
                            }
                        }
                    }
                },
                {
                    title: '离散值',
                    comp: {
                        template: `<div>
<div>不显示间断点</div>
    <el-slider v-model="value1" :step="10" />

    <div>显示间断点</div>
    <el-slider v-model="value2" :step="10" show-stops />
</div>`,
                        data() {
                            return {
                                value1: 0,
                                value2: 0
                            };
                        }
                    }
                },
                {
                    title: '带有输入框',
                    comp: {
                        template: `<div>
<el-slider v-model="value" show-input />
</div>`,
                        data() {
                            return {
                                value: 0
                            };
                        }
                    }
                },
                {
                    title: '范围选择',
                    comp: {
                        template: `<div>
<el-slider v-model="value" range show-stops :max="10" />
</div>`,
                        data() {
                            return {
                                value: [4, 8]
                            };
                        }
                    }
                },
                {
                    title: '竖向模式',
                    comp: {
                        template: `<div>
<el-slider v-model="value" vertical height="200px" />
</div>`,
                        data() {
                            return {
                                value: 0
                            };
                        }
                    }
                },
                {
                    title: '展示标记',
                    comp: {
                        template: `<div>
<el-slider v-model="value" range :marks="marks" />
</div>`,
                        data() {
                            return {
                                value: [30, 60],
                                marks: {
                                    0: '0°C',
                                    8: '8°C',
                                    37: '37°C',
                                    50: {
                                        style: {
                                            color: '#1989FA'
                                        },
                                        label: this.$createElement('strong', '50%')
                                    }
                                }
                            };
                        }
                    }
                }
            ]
        };
    }
};
</script>
