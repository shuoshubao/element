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
    name: 'EmptyView',
    data() {
        return {
            sections: [
                {
                    title: '基础用法',
                    comp: {
                        template: `<div>
<el-empty description="描述文字" />
</div>`
                    }
                },
                {
                    title: '自定义图片',
                    comp: {
                        template: `<div>
<el-empty image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
</div>`
                    }
                },
                {
                    title: '图片尺寸',
                    comp: {
                        template: `<div>
<el-empty :image-size="200" />
</div>`
                    }
                },
                {
                    title: '底部内容',
                    comp: {
                        template: `<div>
<el-empty>
        <el-button type="primary">按钮</el-button>
    </el-empty>
</div>`
                    }
                }
            ]
        };
    }
};
</script>
