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
    name: 'SkeletonView',
    data() {
        return {
            sections: [
                {
                    title: '基础用法',
                    comp: {
                        template: `<div>
<el-skeleton />
</div>`
                    }
                },
                {
                    title: '更多参数',
                    comp: {
                        template: `<div>
<el-skeleton :rows="6" />
</div>`
                    }
                },
                {
                    title: '动画效果',
                    comp: {
                        template: `<div>
<el-skeleton :rows="6" animated />
</div>`
                    }
                },
                {
                    title: '自定义样式',
                    comp: {
                        template: `<div>
<el-skeleton style="width: 240px">
        <template slot="template">
            <el-skeleton-item variant="image" style="width: 240px; height: 240px;" />
            <div style="padding: 10px">
                <el-skeleton-item variant="p" style="width: 50%" />
                <div style="display: flex; align-items: center; justify-items: space-between;">
                    <el-skeleton-item variant="text" style="margin-right: 16px;" />
                    <el-skeleton-item variant="text" style="width: 30%;" />
                </div>
            </div>
</div>`
                    }
                },
                {
                    title: 'Loading 状态',
                    comp: {
                        template: `<div>
<label>切换 Loading</label>
    <el-switch v-model="loading" />

    <el-divider />

    <el-skeleton style="width: 240px" :loading="loading" animated>
        <template slot="template">
            <el-skeleton-item variant="image" style="width: 240px; height: 240px;" />

            <div style="padding: 10px">
                <el-skeleton-item variant="h3" style="width: 50%;" />

                <div style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;">
                    <el-skeleton-item variant="text" style="margin-right: 16px;" />
                    <el-skeleton-item variant="text" style="width: 30%;" />
                </div>
            </div>
</div>`,
                        data() {
                            return {
                                loading: true
                            };
                        }
                    }
                },
                {
                    title: '渲染多条数据',
                    comp: {
                        template: `<div>
<el-button @click="setLoading">点我重新加载</el-button>

    <el-divider />

    <el-skeleton style="width:400px" :loading="loading" animated :count="3">
        <template slot="template">
            <el-skeleton-item variant="image" style="width: 400px; height: 300px;" />

            <div style="padding: 10px">
                <el-skeleton-item variant="h3" style="width: 50%;" />

                <div style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;">
                    <el-skeleton-item variant="text" style="margin-right: 16px;" />
                    <el-skeleton-item variant="text" style="width: 30%;" />
                </div>
            </div>
</div>`,
                        data() {
                            return {
                                loading: true,
                                lists: []
                            };
                        },
                        mounted() {
                            this.loading = false;
                            this.lists = [
                                {
                                    imgUrl: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                                    name: '鹿'
                                },
                                {
                                    imgUrl: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                                    name: '马'
                                },
                                {
                                    imgUrl: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                                    name: '山狮'
                                }
                            ];
                        },
                        methods: {
                            setLoading() {
                                this.loading = true;
                                setTimeout(() => {
                                    this.loading = false;
                                }, 2000);
                            }
                        }
                    }
                },
                {
                    title: '防止渲染抖动',
                    comp: {
                        template: `<div>
<span>切换 Loading</span>
    <el-switch v-model="loading" />

    <el-divider />

    <el-skeleton style="width: 240px" :loading="loading" animated :throttle="500">
        <template slot="template">
            <el-skeleton-item variant="image" style="width: 240px; height: 240px;" />

            <div style="padding: 10px">
                <el-skeleton-item variant="h3" style="width: 50%;" />

                <div style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;">
                    <el-skeleton-item variant="text" style="margin-right: 16px;" />
                    <el-skeleton-item variant="text" style="width: 30%;" />
                </div>
            </div>
</div>`,
                        data() {
                            return {
                                loading: false
                            };
                        }
                    }
                }
            ]
        };
    }
};
</script>
