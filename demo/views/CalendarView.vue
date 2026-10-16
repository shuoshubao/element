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
    name: "CalendarView",
    data() {
        return {
            sections: [
{ title: "基本", comp: {
template: `<div>
<el-calendar v-model="value" />
</div>`,
data() {
        return {
            value: new Date()
        };
    }
} },
{ title: "自定义内容", comp: { template: `<div>
<el-calendar>
        <!-- 这里使用的是 2.5 slot 语法, 对于新项目请使用 2.6 slot 语法-->
        <template slot="dateCell" slot-scope="{ date, data }">
            <div :class="data.isSelected ? 'is-selected' : ''">{{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : '' }}</div>
</div>` } },
{ title: "自定义范围", comp: { template: `<div>
<el-calendar :range="['2019-03-04', '2019-03-24']" />
</div>` } }
]
        };
    }
};
</script>

<style>

.is-selected {
    color: #1989fa;
}

</style>
