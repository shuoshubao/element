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
    name: "TimelineView",
    data() {
        return {
            sections: [
{ title: "基础用法", comp: {
template: `<div>
<el-radio-group v-model="reverse">
        <el-radio :label="true">倒序</el-radio>
        <el-radio :label="false">正序</el-radio>
    </el-radio-group>

    <el-divider />

    <el-timeline :reverse="reverse">
        <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">{{ activity.content }}</el-timeline-item>
    </el-timeline>
</div>`,
data() {
        return {
            reverse: true,
            activities: [
                {
                    content: '活动按期开始',
                    timestamp: '2018-04-15'
                },
                {
                    content: '通过审核',
                    timestamp: '2018-04-13'
                },
                {
                    content: '创建成功',
                    timestamp: '2018-04-11'
                }
            ]
        };
    }
} },
{ title: "⾃定义节点样式", comp: {
template: `<div>
<el-timeline>
        <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :timestamp="activity.timestamp"
        >
            {{ activity.content }}
        </el-timeline-item>
    </el-timeline>
</div>`,
data() {
        return {
            activities: [
                {
                    content: '支持使用图标',
                    timestamp: '2018-04-12 20:46',
                    size: 'large',
                    type: 'primary',
                    icon: 'el-icon-more'
                },
                {
                    content: '支持自定义颜色',
                    timestamp: '2018-04-03 20:46',
                    color: '#0bbd87'
                },
                {
                    content: '支持自定义尺寸',
                    timestamp: '2018-04-03 20:46',
                    size: 'large'
                },
                {
                    content: '默认样式的节点',
                    timestamp: '2018-04-03 20:46'
                }
            ]
        };
    }
} },
{ title: "⾃定义时间戳", comp: { template: `<div>
<el-timeline>
        <el-timeline-item timestamp="2018/4/12">
            <el-card>
                <h4>更新 Github 模板</h4>
                <div>王小虎 提交于 2018/4/12 20:46</div>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3">
            <el-card>
                <h4>更新 Github 模板</h4>
                <div>王小虎 提交于 2018/4/3 20:46</div>
            </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2">
            <el-card>
                <h4>更新 Github 模板</h4>
                <div>王小虎 提交于 2018/4/2 20:46</div>
            </el-card>
        </el-timeline-item>
    </el-timeline>
</div>` } }
]
        };
    }
};
</script>

