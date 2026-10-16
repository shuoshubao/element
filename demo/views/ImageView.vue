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
    name: "ImageView",
    data() {
        return {
            sections: [
{ title: "基础用法", comp: {
template: `<div>
<div class="block-horizontal">
        <div v-for="item in fitList" :key="item">
            <div>{{ item }}</div>

            <el-image :src="url" :fit="item" style="width: 100px; height: 100px" />
        </div>
    </div>
</div>`,
data() {
        return {
            fitList: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        };
    }
} },
{ title: "占位内容", comp: {
template: `<div>
<div class="block-horizontal">
        <div>
            <div>默认</div>
            <el-image :src="src" />
        </div>

        <div>
            <div>自定义</div>
            <el-image :src="src">
                <div slot="placeholder">加载中...</div>
            </el-image>
        </div>
    </div>
</div>`,
data() {
        return {
            src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        };
    }
} },
{ title: "加载失败", comp: { template: `<div>
<div class="block-horizontal">
        <div>
            <div>默认</div>
            <el-image />
        </div>

        <div>
            <div>自定义</div>
            <el-image>
                <div slot="error">
                    <i class="el-icon-picture-outline" />
                </div>
            </el-image>
        </div>
    </div>
</div>` } },
{ title: "懒加载", comp: {
template: `<div>
<div style="height: 400px; overflow-y: auto;">
        <el-image v-for="url in urls" :key="url" :src="url" lazy style="display: block; min-height: 200px" />
    </div>
</div>`,
data() {
        return {
            urls: [
                'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
            ]
        };
    }
} },
{ title: "大图预览", comp: {
template: `<div>
<el-image :src="url" :preview-src-list="srcList" style="width: 100px; height: 100px" />
</div>`,
data() {
        return {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            srcList: [
                'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
                'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
            ]
        };
    }
} }
]
        };
    }
};
</script>

