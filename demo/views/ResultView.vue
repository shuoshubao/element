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
    name: 'ResultView',
    data() {
        return {
            sections: [
                {
                    title: '基础用法',
                    comp: {
                        template: `<div>
<div class="block-horizontal aequilate">
        <el-result icon="success" title="成功提示" subTitle="请根据提示进行操作">
            <template slot="extra">
                <el-button type="primary" size="medium">返回</el-button>
</div>`
                    }
                },
                {
                    title: '自定义内容',
                    comp: {
                        template: `<div>
<el-result title="404" subTitle="抱歉, 请求错误">
        <template slot="icon">
            <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
</div>`
                    }
                }
            ]
        };
    }
};
</script>
