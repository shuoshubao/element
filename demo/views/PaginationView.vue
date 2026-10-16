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
    name: 'PaginationView',
    data() {
        return {
            sections: [
                {
                    title: '基础用法',
                    comp: {
                        template: `<div>
<div>
        <div>页数较少时的效果</div>
        <el-pagination :total="50" layout="prev, pager, next" />
    </div>

    <div>
        <div>大于 7 页时的效果</div>
        <el-pagination :total="1000" layout="prev, pager, next" />
    </div>
</div>`
                    }
                },
                {
                    title: '设置最大页码按钮数',
                    comp: {
                        template: `<div>
<el-pagination :total="1000" :page-size="20" :pager-count="11" layout="prev, pager, next" />
</div>`
                    }
                },
                {
                    title: '带有背景色的分页',
                    comp: {
                        template: `<div>
<el-pagination :total="1000" background layout="prev, pager, next" />
</div>`
                    }
                },
                {
                    title: '小型分页',
                    comp: {
                        template: `<div>
<el-pagination :total="50" small layout="prev, pager, next" />
</div>`
                    }
                },
                {
                    title: '附加功能',
                    comp: {
                        template: `<div>
<div class="block-vertical">
        <div>
            <div>显示总数</div>
            <el-pagination
                :total="1000"
                :page-size="100"
                :current-page.sync="currentPage1"
                layout="total, prev, pager, next"
                @current-change="handleCurrentChange"
                @size-change="handleSizeChange"
            />
        </div>

        <div>
            <div>调整每页显示条数</div>
            <el-pagination
                :total="1000"
                :current-page.sync="currentPage2"
                :page-size="100"
                :page-sizes="[100, 200, 300, 400]"
                layout="sizes, prev, pager, next"
                @current-change="handleCurrentChange"
                @size-change="handleSizeChange"
            />
        </div>

        <div>
            <div>直接前往</div>
            <el-pagination
                :total="1000"
                :current-page.sync="currentPage3"
                :page-size="100"
                layout="prev, pager, next, jumper"
                @current-change="handleCurrentChange"
                @size-change="handleSizeChange"
            />
        </div>

        <div>
            <div>完整功能</div>
            <el-pagination
                :total="400"
                :current-page="currentPage4"
                :page-size="100"
                :page-sizes="[100, 200, 300, 400]"
                layout="total, sizes, prev, pager, next, jumper"
                @current-change="handleCurrentChange"
                @size-change="handleSizeChange"
            />
        </div>
    </div>
</div>`,
                        methods: {
                            handleSizeChange(val) {
                                console.log(`每页 ${val} 条`);
                            },
                            handleCurrentChange(val) {
                                console.log(`当前页: ${val}`);
                            }
                        },
                        data() {
                            return {
                                currentPage1: 5,
                                currentPage2: 5,
                                currentPage3: 5,
                                currentPage4: 4
                            };
                        }
                    }
                },
                {
                    title: '当只有一页时隐藏分页',
                    comp: {
                        template: `<div>
<div>
        <el-switch v-model="value" />
        <el-pagination :total="5" :hide-on-single-page="value" layout="prev, pager, next" />
    </div>
</div>`,
                        data() {
                            return {
                                value: false
                            };
                        }
                    }
                }
            ]
        };
    }
};
</script>
