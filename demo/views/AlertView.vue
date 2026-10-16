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
    name: 'AlertView',
    data() {
        return {
            sections: [
                {
                    title: '基本用法',
                    comp: {
                        template: `<div>
<div class="block-vertical">
        <el-alert type="success" title="成功提示的文案" />
        <el-alert type="info" title="消息提示的文案" />
        <el-alert type="warning" title="警告提示的文案" />
        <el-alert type="error" title="错误提示的文案" />
    </div>
</div>`
                    }
                },
                {
                    title: '主题',
                    comp: {
                        template: `<div>
<div class="block-vertical">
        <el-alert type="success" title="成功提示的文案" effect="dark" />
        <el-alert type="info" title="消息提示的文案" effect="dark" />
        <el-alert type="warning" title="警告提示的文案" effect="dark" />
        <el-alert type="error" title="错误提示的文案" effect="dark" />
    </div>
</div>`
                    }
                },
                {
                    title: '自定义关闭按钮',
                    comp: {
                        template: `<div>
<div class="block-vertical">
        <el-alert type="success" title="不可关闭的 alert" :closable="false" />
        <el-alert type="info" title="自定义 close-text" close-text="知道了" />
        <el-alert type="warning" title="设置了回调的 alert" @close="hello" />
    </div>
</div>`,
                        methods: {
                            hello() {
                                alert('Hello World!');
                            }
                        }
                    }
                },
                {
                    title: '带有 icon',
                    comp: {
                        template: `<div>
<div class="block-vertical">
        <el-alert type="success" title="成功提示的文案" show-icon />
        <el-alert type="info" title="消息提示的文案" show-icon />
        <el-alert type="warning" title="警告提示的文案" show-icon />
        <el-alert type="error" title="错误提示的文案" show-icon />
    </div>
</div>`
                    }
                },
                {
                    title: '文字居中',
                    comp: {
                        template: `<div>
<div class="block-vertical">
        <el-alert type="success" title="成功提示的文案" center show-icon />
        <el-alert type="info" title="消息提示的文案" center show-icon />
        <el-alert type="warning" title="警告提示的文案" center show-icon />
        <el-alert type="error" title="错误提示的文案" center show-icon />
    </div>
</div>`
                    }
                },
                {
                    title: '带有辅助性文字介绍',
                    comp: {
                        template: `<div>
<el-alert
        title="带辅助性文字介绍"
        type="success"
        description="这是一句绕口令: 黑灰化肥会挥发发灰黑化肥挥发; 灰黑化肥会挥发发黑灰化肥发挥.  黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
    />
</div>`
                    }
                },
                {
                    title: '带有 icon 和辅助性文字介绍',
                    comp: {
                        template: `<div>
<div class="block-vertical">
        <el-alert type="success" title="成功提示的文案" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon />
        <el-alert type="info" title="消息提示的文案" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon />
        <el-alert type="warning" title="警告提示的文案" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon />
        <el-alert type="error" title="错误提示的文案" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon />
    </div>
</div>`
                    }
                }
            ]
        };
    }
};
</script>
