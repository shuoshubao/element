# 改动点

## 基建

-   rollup 打包
-   移除依赖: `throttle-debounce`, `deepmerge`
-   引入 lodash, 去掉源码
-   `popper.js`, `fecha` 改造为 esm

## 组件

-   alert
    -   关闭按钮: `v-show` => `v-if`
-   message-box
    -   关闭按钮: `v-show` => `v-if`
    -   input: `v-show` => `v-if`
-   descriptions
    -   labelStyle, contentStyle: `type: Object` => `type: [String, Object]`
-   date-picker
    -   确认按钮: `plain` => `type="primary"`
-   vue-popper
    -   placement: `default: bottom` => `default: top`
-   image-viewer
    -   注册组件 `el-image-viewer`
