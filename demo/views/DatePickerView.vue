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
    name: 'DatePickerView',
    data() {
        return {
            sections: [
                {
                    title: '选择日',
                    comp: {
                        template: `<div>
<div class="block-horizontal">
        <div>
            <div>默认</div>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期" />
        </div>

        <div>
            <div>带快捷选项</div>
            <el-date-picker v-model="value2" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions" />
        </div>
    </div>
</div>`,
                        data() {
                            return {
                                pickerOptions: {
                                    disabledDate(time) {
                                        return time.getTime() > Date.now();
                                    },
                                    shortcuts: [
                                        {
                                            text: '今天',
                                            onClick(picker) {
                                                picker.$emit('pick', new Date());
                                            }
                                        },
                                        {
                                            text: '昨天',
                                            onClick(picker) {
                                                const date = new Date();
                                                date.setTime(date.getTime() - 3600 * 1000 * 24);
                                                picker.$emit('pick', date);
                                            }
                                        },
                                        {
                                            text: '一周前',
                                            onClick(picker) {
                                                const date = new Date();
                                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                                picker.$emit('pick', date);
                                            }
                                        }
                                    ]
                                },
                                value1: '',
                                value2: ''
                            };
                        }
                    }
                },
                {
                    title: '其他日期单位',
                    comp: {
                        template: `<div>
<div class="block-vertical">
        <div class="block-horizontal">
            <div>
                <div>周</div>
                <el-date-picker v-model="value1" type="week" format="yyyy 第 WW 周" placeholder="选择周" />
            </div>

            <div>
                <div>月</div>
                <el-date-picker v-model="value2" type="month" placeholder="选择月" />
            </div>

            <div>
                <div>年</div>
                <el-date-picker v-model="value3" type="year" placeholder="选择年" />
            </div>
        </div>

        <div class="block-horizontal">
            <div>
                <div>多个日期</div>
                <el-date-picker v-model="value4" type="dates" placeholder="选择一个或多个日期" />
            </div>

            <div>
                <div>多个月</div>
                <el-date-picker v-model="value5" type="months" placeholder="选择一个或多个月" />
            </div>

            <div>
                <div>多个年</div>
                <el-date-picker v-model="value6" type="years" placeholder="选择一个或多个年" />
            </div>
        </div>
    </div>
</div>`,
                        data() {
                            return {
                                value1: '',
                                value2: '',
                                value3: '',
                                value4: '',
                                value5: '',
                                value6: ''
                            };
                        }
                    }
                },
                {
                    title: '选择日期范围',
                    comp: {
                        template: `<div>
<div class="block-horizontal">
        <div>
            <div>默认</div>
            <el-date-picker v-model="value1" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期" range-separator="至" />
        </div>

        <div>
            <div>带快捷选项</div>
            <el-date-picker
                v-model="value2"
                type="daterange"
                :picker-options="pickerOptions"
                unlink-panels
                align="right"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                range-separator="至"
            />
        </div>
    </div>
</div>`,
                        data() {
                            return {
                                pickerOptions: {
                                    shortcuts: [
                                        {
                                            text: '最近一周',
                                            onClick(picker) {
                                                const end = new Date();
                                                const start = new Date();
                                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                                picker.$emit('pick', [start, end]);
                                            }
                                        },
                                        {
                                            text: '最近一个月',
                                            onClick(picker) {
                                                const end = new Date();
                                                const start = new Date();
                                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                                picker.$emit('pick', [start, end]);
                                            }
                                        },
                                        {
                                            text: '最近三个月',
                                            onClick(picker) {
                                                const end = new Date();
                                                const start = new Date();
                                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                                picker.$emit('pick', [start, end]);
                                            }
                                        }
                                    ]
                                },
                                value1: '',
                                value2: ''
                            };
                        }
                    }
                },
                {
                    title: '选择月份范围',
                    comp: {
                        template: `<div>
<div class="block-horizontal">
        <div>
            <div>默认</div>
            <el-date-picker v-model="value1" type="monthrange" start-placeholder="开始月份" end-placeholder="结束月份" range-separator="至" />
        </div>

        <div>
            <div>带快捷选项</div>
            <el-date-picker
                v-model="value2"
                type="monthrange"
                :picker-options="pickerOptions"
                unlink-panels
                align="right"
                start-placeholder="开始月份"
                end-placeholder="结束月份"
                range-separator="至"
            />
        </div>
    </div>
</div>`,
                        data() {
                            return {
                                pickerOptions: {
                                    shortcuts: [
                                        {
                                            text: '本月',
                                            onClick(picker) {
                                                picker.$emit('pick', [new Date(), new Date()]);
                                            }
                                        },
                                        {
                                            text: '今年至今',
                                            onClick(picker) {
                                                const end = new Date();
                                                const start = new Date(new Date().getFullYear(), 0);
                                                picker.$emit('pick', [start, end]);
                                            }
                                        },
                                        {
                                            text: '最近六个月',
                                            onClick(picker) {
                                                const end = new Date();
                                                const start = new Date();
                                                start.setMonth(start.getMonth() - 6);
                                                picker.$emit('pick', [start, end]);
                                            }
                                        }
                                    ]
                                },
                                value1: '',
                                value2: ''
                            };
                        }
                    }
                },
                {
                    title: '日期格式',
                    comp: {
                        template: `<div>
<div>
        <div>默认为 Date 对象</div>
        <div>值: {{ value1 }}</div>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" />
    </div>
    <div>
        <div>使用 value-format</div>
        <div>值: {{ value2 }}</div>
        <el-date-picker v-model="value2" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" />
    </div>
    <div>
        <div>时间戳</div>
        <div>值: {{ value3 }}</div>
        <el-date-picker v-model="value3" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="timestamp" />
    </div>
</div>`,
                        data() {
                            return {
                                value1: '',
                                value2: '',
                                value3: ''
                            };
                        }
                    }
                },
                {
                    title: '默认显示日期',
                    comp: {
                        template: `<div>
<div>
        <div>组件值: {{ value }}</div>
        <el-date-picker v-model="value" type="daterange" :default-time="['00:00:00', '23:59:59']" start-placeholder="开始日期" end-placeholder="结束日期" />
    </div>
</div>`,
                        data() {
                            return {
                                value: ''
                            };
                        }
                    }
                }
            ]
        };
    }
};
</script>
