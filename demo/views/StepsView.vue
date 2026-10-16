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
    name: "StepsView",
    data() {
        return {
            sections: [
{ title: "基础用法", comp: {
template: `<div>
<el-steps :active="active" finish-status="success">
        <el-step title="步骤 1" />
        <el-step title="步骤 2" />
        <el-step title="步骤 3" />
    </el-steps>

    <el-divider />

    <el-button @click="next">下一步</el-button>
</div>`,
data() {
        return {
            active: 0
        };
    },

    methods: {
        next() {
            if (this.active++ > 2) {
                this.active = 0;
            }
        }
    }
} },
{ title: "含状态步骤条", comp: { template: `<div>
<el-steps :active="1" :space="200" finish-status="success">
        <el-step title="已完成" />
        <el-step title="进行中" />
        <el-step title="步骤 3" />
    </el-steps>
</div>` } },
{ title: "有描述的步骤条", comp: { template: `<div>
<el-steps :active="1">
        <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字" />
        <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字" />
        <el-step title="步骤 3" description="这段就没那么长了" />
    </el-steps>
</div>` } },
{ title: "居中的步骤条", comp: { template: `<div>
<el-steps :active="2" align-center>
        <el-step title="步骤1" description="这是一段很长很长很长的描述性文字" />
        <el-step title="步骤2" description="这是一段很长很长很长的描述性文字" />
        <el-step title="步骤3" description="这是一段很长很长很长的描述性文字" />
        <el-step title="步骤4" description="这是一段很长很长很长的描述性文字" />
    </el-steps>
</div>` } },
{ title: "带图标的步骤条", comp: { template: `<div>
<el-steps :active="1">
        <el-step title="步骤 1" icon="el-icon-edit" />
        <el-step title="步骤 2" icon="el-icon-upload" />
        <el-step title="步骤 3" icon="el-icon-picture" />
    </el-steps>
</div>` } },
{ title: "竖式步骤条", comp: { template: `<div>
<el-steps direction="vertical" :active="1" style="height: 300px;">
        <el-step title="步骤 1" />
        <el-step title="步骤 2" />
        <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字" />
    </el-steps>
</div>` } },
{ title: "简洁风格的步骤条", comp: { template: `<div>
<el-steps :active="1" simple>
        <el-step title="步骤 1" icon="el-icon-edit" />
        <el-step title="步骤 2" icon="el-icon-upload" />
        <el-step title="步骤 3" icon="el-icon-picture" />
    </el-steps>

    <el-divider />

    <el-steps :active="1" finish-status="success" simple>
        <el-step title="步骤 1" />
        <el-step title="步骤 2" />
        <el-step title="步骤 3" />
    </el-steps>
</div>` } }
]
        };
    }
};
</script>

