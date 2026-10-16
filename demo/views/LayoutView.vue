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
    name: 'LayoutView',
    data() {
        return {
            sections: [
                {
                    title: '基础布局',
                    comp: {
                        template: `<div>
<el-row>
        <el-col :span="24">
            <div class="grid-content bg-purple-dark" />
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="12">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple-light" />
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="8">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :span="8">
            <div class="grid-content bg-purple-light" />
        </el-col>
        <el-col :span="8">
            <div class="grid-content bg-purple" />
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="6">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple-light" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple-light" />
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="4">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :span="4">
            <div class="grid-content bg-purple-light" />
        </el-col>
        <el-col :span="4">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :span="4">
            <div class="grid-content bg-purple-light" />
        </el-col>
        <el-col :span="4">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :span="4">
            <div class="grid-content bg-purple-light" />
        </el-col>
    </el-row>
</div>`
                    }
                },
                {
                    title: '分栏间隔',
                    comp: {
                        template: `<div>
<el-row :gutter="20">
        <el-col :span="6">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple" />
        </el-col>
    </el-row>
</div>`
                    }
                },
                {
                    title: '混合布局',
                    comp: {
                        template: `<div>
<el-row :gutter="20">
        <el-col :span="16">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :span="8">
            <div class="grid-content bg-purple" />
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="8">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :span="8">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :span="4">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :span="4">
            <div class="grid-content bg-purple" />
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="4">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :span="16">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :span="4">
            <div class="grid-content bg-purple" />
        </el-col>
    </el-row>
</div>`
                    }
                },
                {
                    title: '分栏偏移',
                    comp: {
                        template: `<div>
<el-row :gutter="20">
        <el-col :span="6">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :span="6" :offset="6">
            <div class="grid-content bg-purple" />
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="6" :offset="6">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :span="6" :offset="6">
            <div class="grid-content bg-purple" />
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="12" :offset="6">
            <div class="grid-content bg-purple" />
        </el-col>
    </el-row>
</div>`
                    }
                },
                {
                    title: '对齐方式',
                    comp: {
                        template: `<div>
<el-row type="flex" class="row-bg">
        <el-col :span="6">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple-light" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple" />
        </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple-light" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple" />
        </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="end">
        <el-col :span="6">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple-light" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple" />
        </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple-light" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple" />
        </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="6">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple-light" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple" />
        </el-col>
    </el-row>
</div>`
                    }
                },
                {
                    title: '响应式布局',
                    comp: {
                        template: `<div>
<el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <div class="grid-content bg-purple-light" />
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <div class="grid-content bg-purple" />
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
            <div class="grid-content bg-purple-light" />
        </el-col>
    </el-row>
</div>`
                    }
                }
            ]
        };
    }
};
</script>

<style>
.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}
.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}

.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>
