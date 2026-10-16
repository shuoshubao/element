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
    name: "CarouselView",
    data() {
        return {
            sections: [
{ title: "基础用法", comp: { template: `<div>
<div>
        <div>默认 Hover 指示器触发</div>
        <el-carousel height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
                <div>{{ item }}</div>
            </el-carousel-item>
        </el-carousel>
    </div>

    <div>
        <div>Click 指示器触发</div>
        <el-carousel trigger="click" height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
                <div>{{ item }}</div>
            </el-carousel-item>
        </el-carousel>
    </div>
</div>` } },
{ title: "指示器", comp: { template: `<div>
<el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
            <div>{{ item }}</div>
        </el-carousel-item>
    </el-carousel>
</div>` } },
{ title: "切换箭头", comp: { template: `<div>
<el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
            <div>{{ item }}</div>
        </el-carousel-item>
    </el-carousel>
</div>` } },
{ title: "卡片化", comp: { template: `<div>
<el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
            <div>{{ item }}</div>
        </el-carousel-item>
    </el-carousel>
</div>` } },
{ title: "方向", comp: { template: `<div>
<el-carousel height="200px" direction="vertical" :autoplay="false">
        <el-carousel-item v-for="item in 3" :key="item">
            <div>{{ item }}</div>
        </el-carousel-item>
    </el-carousel>
</div>` } }
]
        };
    }
};
</script>

