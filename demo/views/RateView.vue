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
    name: "RateView",
    data() {
        return {
            sections: [
{ title: "基础用法", comp: {
template: `<div>
<div class="block-horizontal">
        <div>
            <div>默认不区分颜色</div>
            <el-rate v-model="value1" />
        </div>

        <div>
            <div>区分颜色</div>
            <el-rate v-model="value2" :colors="colors" />
        </div>
    </div>
</div>`,
data() {
        return {
            value1: null,
            value2: null,
            colors: ['#99A9BF', '#F7BA2A', '#FF9900']
        };
    }
} },
{ title: "辅助文字", comp: {
template: `<div>
<el-rate v-model="value" show-text />
</div>`,
data() {
        return {
            value: null
        };
    }
} },
{ title: "其它 icon", comp: {
template: `<div>
<el-rate v-model="value" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :icon-classes="iconClasses" void-icon-class="icon-rate-face-off" />
</div>`,
data() {
        return {
            value: null,
            iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']
        };
    }
} },
{ title: "只读", comp: {
template: `<div>
<el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}" />
</div>`,
data() {
        return {
            value: 3.7
        };
    }
} }
]
        };
    }
};
</script>

