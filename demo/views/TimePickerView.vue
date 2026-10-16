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
    name: 'TimePickerView',
    data() {
        return {
            sections: [
                {
                    title: '固定时间点',
                    comp: {
                        template: `<div>
<el-time-select
        v-model="value"
        :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
        }"
        placeholder="选择时间"
    />
</div>`,
                        data() {
                            return {
                                value: ''
                            };
                        }
                    }
                },
                {
                    title: '任意时间点',
                    comp: {
                        template: `<div>
<el-time-picker
        v-model="value1"
        :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
        }"
        placeholder="任意时间点"
    />

    <el-time-picker
        v-model="value2"
        arrow-control
        :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
        }"
        placeholder="任意时间点"
    />
</div>`,
                        data() {
                            return {
                                value1: new Date(2016, 9, 10, 18, 40),
                                value2: new Date(2016, 9, 10, 18, 40)
                            };
                        }
                    }
                },
                {
                    title: '固定时间范围',
                    comp: {
                        template: `<div>
<el-time-select
        v-model="startTime"
        :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
        }"
        placeholder="起始时间"
    />

    <el-time-select
        v-model="endTime"
        :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
            minTime: startTime
        }"
        placeholder="结束时间"
    />
</div>`,
                        data() {
                            return {
                                startTime: '',
                                endTime: ''
                            };
                        }
                    }
                },
                {
                    title: '任意时间范围',
                    comp: {
                        template: `<div>
<el-time-picker v-model="value1" is-range start-placeholder="开始时间" end-placeholder="结束时间" range-separator="至" placeholder="选择时间范围" />

    <el-time-picker
        v-model="value2"
        is-range
        arrow-control
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        range-separator="至"
        placeholder="选择时间范围"
    />
</div>`,
                        data() {
                            return {
                                value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
                                value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
                            };
                        }
                    }
                }
            ]
        };
    }
};
</script>
