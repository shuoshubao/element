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
    name: "ColorPickerView",
    data() {
        return {
            sections: [
{ title: "基础用法", comp: {
template: `<div>
<div>有默认值</div>
    <el-color-picker v-model="color1" />

    <el-divider />

    <div>无默认值</div>
    <el-color-picker v-model="color2" />
</div>`,
data() {
        return {
            color1: '#409EFF',
            color2: null
        };
    }
} },
{ title: "选择透明度", comp: {
template: `<div>
<el-color-picker v-model="color" show-alpha />
</div>`,
data() {
        return {
            color: 'rgba(19, 206, 102, 0.8)'
        };
    }
} },
{ title: "预定义颜色", comp: {
template: `<div>
<el-color-picker v-model="color" show-alpha :predefine="predefineColors" />
</div>`,
data() {
        return {
            color: 'rgba(255, 69, 0, 0.68)',
            predefineColors: [
                '#ff4500',
                '#ff8c00',
                '#ffd700',
                '#90ee90',
                '#00ced1',
                '#1e90ff',
                '#c71585',
                'rgba(255, 69, 0, 0.68)',
                'rgb(255, 120, 0)',
                'hsv(51, 100, 98)',
                'hsva(120, 40, 94, 0.5)',
                'hsl(181, 100%, 37%)',
                'hsla(209, 100%, 56%, 0.73)',
                '#c7158577'
            ]
        };
    }
} },
{ title: "不同尺寸", comp: {
template: `<div>
<el-color-picker v-model="color" />

    <el-color-picker v-model="color" size="medium" />

    <el-color-picker v-model="color" size="small" />

    <el-color-picker v-model="color" size="mini" />
</div>`,
data() {
        return {
            color: '#409EFF'
        };
    }
} }
]
        };
    }
};
</script>

