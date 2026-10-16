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
    name: "SwitchView",
    data() {
        return {
            sections: [
{ title: "基本用法", comp: {
template: `<div>
<el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949" />
</div>`,
data() {
        return {
            value: true
        };
    }
} },
{ title: "文字描述", comp: {
template: `<div>
<el-switch v-model="value1" active-text="按月付费" inactive-text="按年付费" />

    <el-divider />

    <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949" active-text="按月付费" inactive-text="按年付费" />
</div>`,
data() {
        return {
            value1: true,
            value2: true
        };
    }
} },
{ title: "扩展的 value 类型", comp: {
template: `<div>
<el-tooltip :content="'Switch value: ' + value">
        <el-switch v-model="value" active-value="100" inactive-value="0" active-color="#13ce66" inactive-color="#ff4949" />
    </el-tooltip>
</div>`,
data() {
        return {
            value: '100'
        };
    }
} },
{ title: "禁用状态", comp: {
template: `<div>
<el-switch v-model="value1" disabled />
    <el-switch v-model="value2" disabled />
</div>`,
data() {
        return {
            value1: true,
            value2: false
        };
    }
} }
]
        };
    }
};
</script>

