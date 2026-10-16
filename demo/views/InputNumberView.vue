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
    name: "InputNumberView",
    data() {
        return {
            sections: [
{ title: "基础用法", comp: {
template: `<div>
<el-input-number v-model="num" :min="1" :max="10" label="描述文字" @change="handleChange" />
</div>`,
data() {
        return {
            num: 1
        };
    },
    methods: {
        handleChange(value) {
            console.log(value);
        }
    }
} },
{ title: "禁用状态", comp: {
template: `<div>
<el-input-number v-model="num" disabled />
</div>`,
data() {
        return {
            num: 1
        };
    }
} },
{ title: "步数", comp: {
template: `<div>
<el-input-number v-model="num" :step="2" />
</div>`,
data() {
        return {
            num: 5
        };
    }
} },
{ title: "严格步数", comp: {
template: `<div>
<el-input-number v-model="num" :step="2" step-strictly />
</div>`,
data() {
        return {
            num: 2
        };
    }
} },
{ title: "精度", comp: {
template: `<div>
<el-input-number v-model="num" :precision="2" :step="0.1" :max="10" />
</div>`,
data() {
        return {
            num: 1
        };
    }
} },
{ title: "尺寸", comp: {
template: `<div>
<el-input-number v-model="num1" />

    <el-input-number v-model="num2" size="medium" />

    <el-input-number v-model="num3" size="small" />

    <el-input-number v-model="num4" size="mini" />
</div>`,
data() {
        return {
            num1: 1,
            num2: 1,
            num3: 1,
            num4: 1
        };
    }
} },
{ title: "按钮位置", comp: {
template: `<div>
<el-input-number v-model="num" controls-position="right" :min="1" :max="10" @change="handleChange" />
</div>`,
data() {
        return {
            num: 1
        };
    },
    methods: {
        handleChange(value) {
            console.log(value);
        }
    }
} }
]
        };
    }
};
</script>

