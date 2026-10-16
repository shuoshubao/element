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
    name: 'CardView',
    data() {
        return {
            sections: [
                {
                    title: '基础用法',
                    comp: {
                        template: `<div>
<el-card header="卡片名称">
        <el-link slot="extra" type="primary" style="float: right">操作按钮</el-link>
        <div>卡片内容</div>
</el-card>
</div>`
                    }
                },
                {
                    title: '简单卡片',
                    comp: {
                        template: `<div>
    <el-card>
        <div v-for="item in 4" :key="item">{{ '列表内容 ' + item }}</div>
    </el-card>
</div>`
                    }
                },
                {
                    title: '带图片',
                    comp: {
                        template: `<div>
<div class="block-horizontal">
        <el-card v-for="(item, index) in 2" :key="item" :body-style="{ padding: '0px' }" style="width: 250px">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" style="width: 100%" />
            <div style="padding: 10px;">好吃的汉堡</div>
        </el-card>
    </div>
</div>`
                    }
                },
                {
                    title: '卡片阴影',
                    comp: {
                        template: `<div>
<div class="block-horizontal aequilate">
        <el-card shadow="always">总是显示</el-card>
        <el-card shadow="hover">鼠标悬浮时显示</el-card>
        <el-card shadow="never">从不显示</el-card>
    </div>
</div>`
                    }
                }
            ]
        };
    }
};
</script>
