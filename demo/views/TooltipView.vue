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
    name: 'TooltipView',
    data() {
        return {
            sections: [
                {
                    title: '基础用法',
                    comp: {
                        template: `<div>
<el-tooltip effect="dark" content="Top Left 提示文字" placement="top-start">
        <el-button>上左</el-button>
    </el-tooltip>

    <el-tooltip effect="dark" content="Top Center 提示文字" placement="top">
        <el-button>上边</el-button>
    </el-tooltip>

    <el-tooltip effect="dark" content="Top Right 提示文字" placement="top-end">
        <el-button>上右</el-button>
    </el-tooltip>

    <el-divider />

    <el-tooltip effect="dark" content="Left Top 提示文字" placement="left-start">
        <el-button>左上</el-button>
    </el-tooltip>

    <el-tooltip effect="dark" content="Left Center 提示文字" placement="left">
        <el-button>左边</el-button>
    </el-tooltip>

    <el-tooltip effect="dark" content="Left Bottom 提示文字" placement="left-end">
        <el-button>左下</el-button>
    </el-tooltip>

    <el-divider />

    <el-tooltip effect="dark" content="Right Top 提示文字" placement="right-start">
        <el-button>右上</el-button>
    </el-tooltip>

    <el-tooltip effect="dark" content="Right Center 提示文字" placement="right">
        <el-button>右边</el-button>
    </el-tooltip>

    <el-tooltip effect="dark" content="Right Bottom 提示文字" placement="right-end">
        <el-button>右下</el-button>
    </el-tooltip>

    <el-divider />

    <el-tooltip effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
        <el-button>下左</el-button>
    </el-tooltip>

    <el-tooltip effect="dark" content="Bottom Center 提示文字" placement="bottom">
        <el-button>下边</el-button>
    </el-tooltip>

    <el-tooltip effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
        <el-button>下右</el-button>
    </el-tooltip>
</div>`
                    }
                },
                {
                    title: '主题',
                    comp: {
                        template: `<div>
<el-tooltip content="Top center">
        <el-button>Dark</el-button>
    </el-tooltip>

    <el-tooltip content="Bottom center" effect="light">
        <el-button>Light</el-button>
    </el-tooltip>
</div>`
                    }
                },
                {
                    title: '更多 Content',
                    comp: {
                        template: `<div>
<el-tooltip>
        <div slot="content">
            多行信息
            <br />
            第二行信息
        </div>
        <el-button>Top center</el-button>
    </el-tooltip>
</div>`
                    }
                },
                {
                    title: '高级扩展',
                    comp: {
                        template: `<div>
<el-tooltip content="点击关闭 tooltip 功能" placement="bottom" effect="light" :disabled="disabled">
        <el-button @click="disabled = !disabled">点击{{ disabled ? '开启' : '关闭' }} tooltip 功能</el-button>
    </el-tooltip>
</div>`,
                        data() {
                            return {
                                disabled: false
                            };
                        }
                    }
                }
            ]
        };
    }
};
</script>
