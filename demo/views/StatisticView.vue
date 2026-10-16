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
    name: 'StatisticView',
    data() {
        return {
            sections: [
                {
                    title: '基础用法',
                    comp: {
                        template: `<div>
<div class="block-horizontal aequilate">
        <el-statistic group-separator="," :precision="2" :value="value2" :title="title" />

        <el-statistic title="男女比">
            <template slot="formatter">456/2
</div>`,
                        data() {
                            return {
                                like: true,
                                value1: 4154.564,
                                value2: 1314,
                                title: '增长人数'
                            };
                        }
                    }
                },
                {
                    title: '倒计时',
                    comp: {
                        template: `<div>
<el-card shadow="hover">
        <el-statistic :value="deadline2" time-indices title="🎉商品降价🎉">
            <template slot="suffix">抢购即将开始
</div>`,
                        data() {
                            return {
                                // deadline2: Date.now() + 1000 * 60 * 60 * 8,
                                deadline2: Date.now() + 1000 * 2,
                                // deadline3: Date.now() + 1000 * 60 * 30,
                                deadline3: Date.now() + 1000 * 1,
                                // deadline4: Date.now() + (new Date().setHours(23, 59, 59) - Date.now()),
                                deadline4: Date.now() + 1000 * 3,
                                deadline5: new Date('2023-05-06'),
                                stop: true
                            };
                        },
                        methods: {
                            hilarity() {
                                this.$notify({
                                    title: '提示',
                                    message: '时间已到',
                                    duration: 0
                                });
                            },
                            handlePause() {
                                this.$refs.statisticRef.suspend(this.stop);
                                this.stop = !this.stop;
                            },
                            add() {
                                this.deadline3 = this.deadline3 + 1000 * 10;
                            }
                        }
                    }
                }
            ]
        };
    }
};
</script>
