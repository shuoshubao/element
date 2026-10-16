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
    name: 'BadgeView',
    data() {
        return {
            sections: [
                {
                    title: '基础用法',
                    comp: {
                        template: `<div>
<div class="block-horizontal">
        <el-badge :value="12">
            <el-button>评论</el-button>
        </el-badge>

        <el-badge :value="3">
            <el-button>回复</el-button>
        </el-badge>

        <el-badge :value="1" type="primary">
            <el-button>评论</el-button>
        </el-badge>

        <el-badge :value="2" type="warning">
            <el-button>回复</el-button>
        </el-badge>

        <el-dropdown trigger="click">
            <span>
                点我查看
                <i class="el-icon-caret-bottom" />
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                    评论
                    <el-badge :value="12" />
                </el-dropdown-item>
                <el-dropdown-item>
                    回复
                    <el-badge :value="3" />
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</div>`
                    }
                },
                {
                    title: '最大值',
                    comp: {
                        template: `<div>
<div class="block-horizontal">
        <el-badge :value="200" :max="99">
            <el-button>评论</el-button>
        </el-badge>
        <el-badge :value="100" :max="10">
            <el-button>回复</el-button>
        </el-badge>
    </div>
</div>`
                    }
                },
                {
                    title: '自定义内容',
                    comp: {
                        template: `<div>
<div class="block-horizontal">
        <el-badge value="new">
            <el-button>评论</el-button>
        </el-badge>
        <el-badge value="hot">
            <el-button>回复</el-button>
        </el-badge>
    </div>
</div>`
                    }
                },
                {
                    title: '小红点',
                    comp: {
                        template: `<div>
<div class="block-horizontal">
        <el-badge is-dot>数据查询</el-badge>
        <el-badge is-dot>
            <el-button type="primary" icon="el-icon-share" />
        </el-badge>
    </div>
</div>`
                    }
                }
            ]
        };
    }
};
</script>
