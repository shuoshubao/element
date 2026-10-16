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
    name: 'AvatarView',
    data() {
        return {
            sections: [
                {
                    title: '基本用法',
                    comp: {
                        template: `<div>
<div>circle</div>
    <div class="block-horizontal">
        <el-avatar :size="50" :src="circleUrl" />

        <el-avatar v-for="size in sizeList" :key="size" :size="size" :src="circleUrl" />
    </div>

    <el-divider />

    <div>square</div>
    <div class="block-horizontal">
        <el-avatar shape="square" :size="50" :src="squareUrl" />

        <el-avatar v-for="size in sizeList" :key="size" shape="square" :size="size" :src="squareUrl" />
    </div>
</div>`,
                        data() {
                            return {
                                circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                                squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
                                sizeList: ['large', 'medium', 'small']
                            };
                        }
                    }
                },
                {
                    title: '展示类型',
                    comp: {
                        template: `<div>
<div class="block-horizontal">
        <el-avatar icon="el-icon-user-solid" />
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <el-avatar>user</el-avatar>
    </div>
</div>`
                    }
                },
                {
                    title: '图片加载失败的 fallback 行为',
                    comp: {
                        template: `<div>
<el-avatar src="https://empty" :size="60" @error="errorHandler">
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
    </el-avatar>
</div>`,
                        methods: {
                            errorHandler() {
                                return true;
                            }
                        }
                    }
                },
                {
                    title: '图片如何适应容器框',
                    comp: {
                        template: `<div>
<div class="block-horizontal">
        <div v-for="item in fitList" :key="item">
            <div>{{ item }}</div>
            <el-avatar :src="url" shape="square" :fit="item" :size="100" />
        </div>
    </div>
</div>`,
                        data() {
                            return {
                                fitList: ['fill', 'contain', 'cover', 'none', 'scale-down'],
                                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
                            };
                        }
                    }
                }
            ]
        };
    }
};
</script>
