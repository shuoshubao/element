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
    name: 'InfiniteScrollView',
    data() {
        return {
            sections: [
                {
                    title: '基础用法',
                    comp: {
                        template: `<div>
<ul v-infinite-scroll="handleLoad" style="overflow:auto" class="infinite-list">
        <li v-for="item in count" class="infinite-list-item">{{ item }}</li>
    </ul>
</div>`,
                        data() {
                            return {
                                count: 0
                            };
                        },
                        methods: {
                            handleLoad() {
                                this.count += 2;
                            }
                        }
                    }
                },
                {
                    title: '禁用加载',
                    comp: {
                        template: `<div>
<div class="infinite-list-wrapper" style="overflow:auto">
        <ul class="list" v-infinite-scroll="handleLoad" :infinite-scroll-disabled="disabled">
            <li v-for="i in count" class="list-item">{{ i }}</li>
        </ul>
        <div v-if="loading">加载中...</div>
        <div v-if="noMore">没有更多了</div>
    </div>
</div>`,
                        data() {
                            return {
                                count: 10,
                                loading: false
                            };
                        },
                        computed: {
                            noMore() {
                                return this.count >= 20;
                            },
                            disabled() {
                                return this.loading || this.noMore;
                            }
                        },
                        methods: {
                            handleLoad() {
                                this.loading = true;
                                setTimeout(() => {
                                    this.count += 2;
                                    this.loading = false;
                                }, 2000);
                            }
                        }
                    }
                }
            ]
        };
    }
};
</script>

<style>
.infinite-list {
    height: 300px;
    padding: 0;
    margin: 0;
    list-style: none;

    .infinite-list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        background: #e8f3fe;
        margin: 10px;
        color: lighten(#1989fa, 20%);
        & + .list-item {
            margin-top: 10px;
        }
    }
}

.infinite-list-wrapper {
    height: 300px;
    text-align: center;

    .list {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        background: #fff6f6;
        color: #ff8484;
        & + .list-item {
            margin-top: 10px;
        }
    }
}
</style>
