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
    name: "ProgressView",
    data() {
        return {
            sections: [
{ title: "线形进度条", comp: {
template: `<div>
<div class="block-vertical">
        <el-progress :percentage="50" />

        <el-progress :percentage="100" :format="format" />

        <el-progress :percentage="100" status="success" />

        <el-progress :percentage="100" status="warning" />

        <el-progress :percentage="50" status="exception" />
    </div>
</div>`,
methods: {
        format(percentage) {
            return percentage === 100 ? '满' : `${percentage}%`;
        }
    }
} },
{ title: "百分比内显", comp: { template: `<div>
<div class="block-vertical">
        <el-progress :percentage="70" text-inside :stroke-width="26" />

        <el-progress :percentage="100" status="success" text-inside :stroke-width="24" />

        <el-progress :percentage="80" status="warning" text-inside :stroke-width="22" />

        <el-progress :percentage="50" status="exception" text-inside :stroke-width="20" />
    </div>
</div>` } },
{ title: "自定义颜色", comp: {
template: `<div>
<el-progress :percentage="percentage" :color="customColor" />

    <el-progress :percentage="percentage" :color="customColorMethod" />

    <el-progress :percentage="percentage" :color="customColors" />

    <el-divider />

    <el-button-group>
        <el-button icon="el-icon-minus" @click="handleDecrease" />
        <el-button icon="el-icon-plus" @click="handleIncrease" />
    </el-button-group>
</div>`,
data() {
        return {
            percentage: 20,
            customColor: '#409eff',
            customColors: [
                { color: '#f56c6c', percentage: 20 },
                { color: '#f60', percentage: 40 },
                { color: '#5cb87a', percentage: 60 },
                { color: '#1989fa', percentage: 80 },
                { color: '#6f7ad3', percentage: 100 }
            ]
        };
    },
    methods: {
        customColorMethod(percentage) {
            if (percentage < 30) {
                return '#909399';
            } else if (percentage < 70) {
                return '#f60';
            } else {
                return '#67c23a';
            }
        },
        handleIncrease() {
            this.percentage += 10;
            if (this.percentage > 100) {
                this.percentage = 100;
            }
        },
        handleDecrease() {
            this.percentage -= 10;
            if (this.percentage < 0) {
                this.percentage = 0;
            }
        }
    }
} },
{ title: "环形进度条", comp: { template: `<div>
<div class="block-horizontal">
        <el-progress type="circle" :percentage="0" />
        <el-progress type="circle" :percentage="25" />
        <el-progress type="circle" :percentage="100" status="success" />
        <el-progress type="circle" :percentage="70" status="warning" />
        <el-progress type="circle" :percentage="50" status="exception" />
    </div>
</div>` } },
{ title: "仪表盘形进度条", comp: {
template: `<div>
<el-progress type="dashboard" :percentage="percentage" :color="colors" />
    <div>
        <el-button-group>
            <el-button icon="el-icon-minus" @click="handleDecrease" />
            <el-button icon="el-icon-plus" @click="handleIncrease" />
        </el-button-group>
    </div>
</div>`,
data() {
        return {
            percentage: 10,
            colors: [
                { color: '#f56c6c', percentage: 20 },
                { color: '#f60', percentage: 40 },
                { color: '#5cb87a', percentage: 60 },
                { color: '#1989fa', percentage: 80 },
                { color: '#6f7ad3', percentage: 100 }
            ]
        };
    },
    methods: {
        handleIncrease() {
            this.percentage += 10;
            if (this.percentage > 100) {
                this.percentage = 100;
            }
        },
        handleDecrease() {
            this.percentage -= 10;
            if (this.percentage < 0) {
                this.percentage = 0;
            }
        }
    }
} }
]
        };
    }
};
</script>

