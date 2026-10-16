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
    name: "DescriptionsView",
    data() {
        return {
            sections: [
{ title: "基础用法", comp: { template: `<div>
<el-descriptions title="用户信息">
        <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
            <el-tag>学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
    </el-descriptions>
</div>` } },
{ title: "不同尺寸", comp: {
template: `<div>
<el-radio-group v-model="size">
        <el-radio label="">默认</el-radio>
        <el-radio label="medium">中等</el-radio>
        <el-radio label="small">小型</el-radio>
        <el-radio label="mini">超小</el-radio>
    </el-radio-group>

    <el-descriptions title="带边框列表" :column="3" :size="size" border>
        <template #extra>
            <el-button type="primary">操作</el-button>
</div>`,
data() {
        return {
            size: ''
        };
    }
} },
{ title: "垂直列表", comp: { template: `<div>
<el-descriptions title="垂直带边框列表" direction="vertical" :column="4" border>
        <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地" :span="2">苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
            <el-tag>学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
    </el-descriptions>

    <el-descriptions title="垂直无边框列表" :column="4" direction="vertical">
        <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地" :span="2">苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
            <el-tag>学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
    </el-descriptions>
</div>` } },
{ title: "自定义样式", comp: { template: `<div>
<el-descriptions title="自定义样式列表" :column="3" border>
        <el-descriptions-item label="用户名" label-class-name="my-label" content-class-name="my-content">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
            <el-tag>学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址" contentStyle="text-align: right">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
    </el-descriptions>
</div>` } }
]
        };
    }
};
</script>

<style>

.my-label {
    background: #e1f3d8;
}

.my-content {
    background: #fde2e2;
}

</style>
