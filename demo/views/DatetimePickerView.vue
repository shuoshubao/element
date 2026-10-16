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
    name: "DatetimePickerView",
    data() {
        return {
            sections: [
{ title: "日期和时间点", comp: {
template: `<div>
<div class="block-horizontal">
        <div>
            <div>默认</div>
            <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间" />
        </div>

        <div>
            <div>带快捷选项</div>
            <el-date-picker v-model="value2" type="datetime" :picker-options="pickerOptions" placeholder="选择日期时间" align="right" />
        </div>

        <div>
            <div>设置默认时间</div>
            <el-date-picker v-model="value3" type="datetime" placeholder="选择日期时间" default-time="12:00:00" />
        </div>
    </div>
</div>`,
data() {
        return {
            pickerOptions: {
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
            value2: '',
            value3: ''
        };
    }
} },
{ title: "日期和时间范围", comp: {
template: `<div>
<div class="block-horizontal">
        <div>
            <div>默认</div>
            <el-date-picker v-model="value1" type="datetimerange" start-placeholder="开始日期" end-placeholder="结束日期" range-separator="至" />
        </div>

        <div>
            <div>带快捷选项</div>
            <el-date-picker
                v-model="value2"
                type="datetimerange"
                :picker-options="pickerOptions"
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
            value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
            value2: ''
        };
    }
} },
{ title: "默认的起始与结束时刻", comp: {
template: `<div>
<div class="block-horizontal">
        <div>
            <div>起始日期时刻为 12:00:00</div>
            <el-date-picker v-model="value1" type="datetimerange" :default-time="['12:00:00']" start-placeholder="开始日期" end-placeholder="结束日期" />
        </div>

        <div>
            <div>起始日期时刻为 12:00:00, 结束日期时刻为 08:00:00</div>
            <el-date-picker
                v-model="value2"
                type="datetimerange"
                :default-time="['12:00:00', '08:00:00']"
                align="right"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            />
        </div>
    </div>
</div>`,
data() {
        return {
            value1: '',
            value2: ''
        };
    }
} }
]
        };
    }
};
</script>

