<template>
    <div style="padding: 20px">
        <div>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </div>

        <el-divider />

        <div>
            <el-link href="https://baidu.com" target="_blank">默认链接</el-link>
            <el-link type="primary">主要链接</el-link>
            <el-link type="success">成功链接</el-link>
            <el-link type="warning">警告链接</el-link>
            <el-link type="danger">危险链接</el-link>
            <el-link type="info">信息链接</el-link>
        </div>

        <el-divider />

        <div>
            <el-link disabled>默认链接</el-link>
            <el-link type="primary" disabled>主要链接</el-link>
            <el-link type="success" disabled>成功链接</el-link>
            <el-link type="warning" disabled>警告链接</el-link>
            <el-link type="danger" disabled>危险链接</el-link>
            <el-link type="info" disabled>信息链接</el-link>
        </div>

        <el-divider />

        <div>
            <el-link :underline="false">无下划线</el-link>
            <el-link>有下划线</el-link>
        </div>

        <el-divider />

        <div>
            <el-link icon="el-icon-edit">编辑</el-link>
            <el-link>
                查看
                <i class="el-icon-view" />
            </el-link>
        </div>

        <el-divider />

        <div>
            <span>文字</span>
            <el-link href="https://baidu.com" target="_blank">默认链接</el-link>
            <span>文字</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style>
body {
    color: #333;
    font-size: 14px;
    font-family: PingFangSC-Regular, 'Helvetica Neue', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', SimSun, Arial, sans-serif !important;
    line-height: 1.5;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
}

.el-link + .el-link,
.el-button + .el-button {
    margin-left: 10px;
}

a {
    color: #065fe7;
    cursor: pointer;
    text-decoration: none;
}

a:hover {
    color: #065fe7;
}

img {
    user-select: none;
    -webkit-user-drag: none;
}
</style>
