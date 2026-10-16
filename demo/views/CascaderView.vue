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
    name: "CascaderView",
    data() {
        return {
            sections: [
{ title: "基础用法", comp: {
template: `<div>
<div>默认 click 触发子菜单</div>

    <el-cascader v-model="value" :options="options" @change="handleChange" />

    <div>hover 触发子菜单</div>

    <el-cascader v-model="value" :options="options" :props="{ expandTrigger: 'hover' }" @change="handleChange" />
</div>`,
data() {
        return {
            value: [],
            options: [
                {
                    label: '指南',
                    value: 'zhinan',
                    children: [
                        {
                            label: '设计原则',
                            value: 'shejiyuanze',
                            children: [
                                {
                                    label: '一致',
                                    value: 'yizhi'
                                },
                                {
                                    label: '反馈',
                                    value: 'fankui'
                                },
                                {
                                    label: '效率',
                                    value: 'xiaolv'
                                },
                                {
                                    label: '可控',
                                    value: 'kekong'
                                }
                            ]
                        },
                        {
                            label: '导航',
                            value: 'daohang',
                            children: [
                                {
                                    label: '侧向导航',
                                    value: 'cexiangdaohang'
                                },
                                {
                                    label: '顶部导航',
                                    value: 'dingbudaohang'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '组件',
                    value: 'zujian',
                    children: [
                        {
                            label: 'Basic',
                            value: 'basic',
                            children: [
                                {
                                    label: 'Layout 布局',
                                    value: 'layout'
                                },
                                {
                                    label: 'Color 色彩',
                                    value: 'color'
                                },
                                {
                                    label: 'Typography 字体',
                                    value: 'typography'
                                },
                                {
                                    label: 'Icon 图标',
                                    value: 'icon'
                                },
                                {
                                    label: 'Button 按钮',
                                    value: 'button'
                                }
                            ]
                        },
                        {
                            label: 'Form',
                            value: 'form',
                            children: [
                                {
                                    label: 'Radio 单选框',
                                    value: 'radio'
                                },
                                {
                                    label: 'Checkbox 多选框',
                                    value: 'checkbox'
                                },
                                {
                                    label: 'Input 输入框',
                                    value: 'input'
                                },
                                {
                                    label: 'InputNumber 计数器',
                                    value: 'input-number'
                                },
                                {
                                    label: 'Select 选择器',
                                    value: 'select'
                                },
                                {
                                    label: 'Cascader 级联选择器',
                                    value: 'cascader'
                                },
                                {
                                    label: 'Switch 开关',
                                    value: 'switch'
                                },
                                {
                                    label: 'Slider 滑块',
                                    value: 'slider'
                                },
                                {
                                    label: 'TimePicker 时间选择器',
                                    value: 'time-picker'
                                },
                                {
                                    label: 'DatePicker 日期选择器',
                                    value: 'date-picker'
                                },
                                {
                                    label: 'DateTimePicker 日期时间选择器',
                                    value: 'datetime-picker'
                                },
                                {
                                    label: 'Upload 上传',
                                    value: 'upload'
                                },
                                {
                                    label: 'Rate 评分',
                                    value: 'rate'
                                },
                                {
                                    label: 'Form 表单',
                                    value: 'form'
                                }
                            ]
                        },
                        {
                            label: 'Data',
                            value: 'data',
                            children: [
                                {
                                    label: 'Table 表格',
                                    value: 'table'
                                },
                                {
                                    label: 'Tag 标签',
                                    value: 'tag'
                                },
                                {
                                    label: 'Progress 进度条',
                                    value: 'progress'
                                },
                                {
                                    label: 'Tree 树形控件',
                                    value: 'tree'
                                },
                                {
                                    label: 'Pagination 分页',
                                    value: 'pagination'
                                },
                                {
                                    label: 'Badge 标记',
                                    value: 'badge'
                                }
                            ]
                        },
                        {
                            label: 'Notice',
                            value: 'notice',
                            children: [
                                {
                                    label: 'Alert 警告',
                                    value: 'alert'
                                },
                                {
                                    label: 'Loading 加载',
                                    value: 'loading'
                                },
                                {
                                    label: 'Message 消息提示',
                                    value: 'message'
                                },
                                {
                                    label: 'MessageBox 弹框',
                                    value: 'message-box'
                                },
                                {
                                    label: 'Notification 通知',
                                    value: 'notification'
                                }
                            ]
                        },
                        {
                            label: 'Navigation',
                            value: 'navigation',
                            children: [
                                {
                                    label: 'NavMenu 导航菜单',
                                    value: 'menu'
                                },
                                {
                                    label: 'Tabs 标签页',
                                    value: 'tabs'
                                },
                                {
                                    label: 'Breadcrumb 面包屑',
                                    value: 'breadcrumb'
                                },
                                {
                                    label: 'Dropdown 下拉菜单',
                                    value: 'dropdown'
                                },
                                {
                                    label: 'Steps 步骤条',
                                    value: 'steps'
                                }
                            ]
                        },
                        {
                            label: 'Others',
                            value: 'others',
                            children: [
                                {
                                    label: 'Dialog 对话框',
                                    value: 'dialog'
                                },
                                {
                                    label: 'Tooltip 文字提示',
                                    value: 'tooltip'
                                },
                                {
                                    label: 'Popover 弹出框',
                                    value: 'popover'
                                },
                                {
                                    label: 'Card 卡片',
                                    value: 'card'
                                },
                                {
                                    label: 'Carousel 走马灯',
                                    value: 'carousel'
                                },
                                {
                                    label: 'Collapse 折叠面板',
                                    value: 'collapse'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '资源',
                    value: 'ziyuan',
                    children: [
                        {
                            label: 'Axure Components',
                            value: 'axure'
                        },
                        {
                            label: 'Sketch Templates',
                            value: 'sketch'
                        },
                        {
                            label: '组件交互文档',
                            value: 'jiaohu'
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        handleChange(value) {
            console.log(value);
        }
    }
} },
{ title: "禁用选项", comp: {
template: `<div>
<el-cascader :options="options" />
</div>`,
data() {
        return {
            options: [
                {
                    label: '指南',
                    value: 'zhinan',
                    disabled: true,
                    children: [
                        {
                            label: '设计原则',
                            value: 'shejiyuanze',
                            children: [
                                {
                                    label: '一致',
                                    value: 'yizhi'
                                },
                                {
                                    label: '反馈',
                                    value: 'fankui'
                                },
                                {
                                    label: '效率',
                                    value: 'xiaolv'
                                },
                                {
                                    label: '可控',
                                    value: 'kekong'
                                }
                            ]
                        },
                        {
                            label: '导航',
                            value: 'daohang',
                            children: [
                                {
                                    label: '侧向导航',
                                    value: 'cexiangdaohang'
                                },
                                {
                                    label: '顶部导航',
                                    value: 'dingbudaohang'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '组件',
                    value: 'zujian',
                    children: [
                        {
                            label: 'Basic',
                            value: 'basic',
                            children: [
                                {
                                    label: 'Layout 布局',
                                    value: 'layout'
                                },
                                {
                                    label: 'Color 色彩',
                                    value: 'color'
                                },
                                {
                                    label: 'Typography 字体',
                                    value: 'typography'
                                },
                                {
                                    label: 'Icon 图标',
                                    value: 'icon'
                                },
                                {
                                    label: 'Button 按钮',
                                    value: 'button'
                                }
                            ]
                        },
                        {
                            label: 'Form',
                            value: 'form',
                            children: [
                                {
                                    label: 'Radio 单选框',
                                    value: 'radio'
                                },
                                {
                                    label: 'Checkbox 多选框',
                                    value: 'checkbox'
                                },
                                {
                                    label: 'Input 输入框',
                                    value: 'input'
                                },
                                {
                                    label: 'InputNumber 计数器',
                                    value: 'input-number'
                                },
                                {
                                    label: 'Select 选择器',
                                    value: 'select'
                                },
                                {
                                    label: 'Cascader 级联选择器',
                                    value: 'cascader'
                                },
                                {
                                    label: 'Switch 开关',
                                    value: 'switch'
                                },
                                {
                                    label: 'Slider 滑块',
                                    value: 'slider'
                                },
                                {
                                    label: 'TimePicker 时间选择器',
                                    value: 'time-picker'
                                },
                                {
                                    label: 'DatePicker 日期选择器',
                                    value: 'date-picker'
                                },
                                {
                                    label: 'DateTimePicker 日期时间选择器',
                                    value: 'datetime-picker'
                                },
                                {
                                    label: 'Upload 上传',
                                    value: 'upload'
                                },
                                {
                                    label: 'Rate 评分',
                                    value: 'rate'
                                },
                                {
                                    label: 'Form 表单',
                                    value: 'form'
                                }
                            ]
                        },
                        {
                            label: 'Data',
                            value: 'data',
                            children: [
                                {
                                    label: 'Table 表格',
                                    value: 'table'
                                },
                                {
                                    label: 'Tag 标签',
                                    value: 'tag'
                                },
                                {
                                    label: 'Progress 进度条',
                                    value: 'progress'
                                },
                                {
                                    label: 'Tree 树形控件',
                                    value: 'tree'
                                },
                                {
                                    label: 'Pagination 分页',
                                    value: 'pagination'
                                },
                                {
                                    label: 'Badge 标记',
                                    value: 'badge'
                                }
                            ]
                        },
                        {
                            label: 'Notice',
                            value: 'notice',
                            children: [
                                {
                                    label: 'Alert 警告',
                                    value: 'alert'
                                },
                                {
                                    label: 'Loading 加载',
                                    value: 'loading'
                                },
                                {
                                    label: 'Message 消息提示',
                                    value: 'message'
                                },
                                {
                                    label: 'MessageBox 弹框',
                                    value: 'message-box'
                                },
                                {
                                    label: 'Notification 通知',
                                    value: 'notification'
                                }
                            ]
                        },
                        {
                            label: 'Navigation',
                            value: 'navigation',
                            children: [
                                {
                                    label: 'NavMenu 导航菜单',
                                    value: 'menu'
                                },
                                {
                                    label: 'Tabs 标签页',
                                    value: 'tabs'
                                },
                                {
                                    label: 'Breadcrumb 面包屑',
                                    value: 'breadcrumb'
                                },
                                {
                                    label: 'Dropdown 下拉菜单',
                                    value: 'dropdown'
                                },
                                {
                                    label: 'Steps 步骤条',
                                    value: 'steps'
                                }
                            ]
                        },
                        {
                            label: 'Others',
                            value: 'others',
                            children: [
                                {
                                    label: 'Dialog 对话框',
                                    value: 'dialog'
                                },
                                {
                                    label: 'Tooltip 文字提示',
                                    value: 'tooltip'
                                },
                                {
                                    label: 'Popover 弹出框',
                                    value: 'popover'
                                },
                                {
                                    label: 'Card 卡片',
                                    value: 'card'
                                },
                                {
                                    label: 'Carousel 走马灯',
                                    value: 'carousel'
                                },
                                {
                                    label: 'Collapse 折叠面板',
                                    value: 'collapse'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '资源',
                    value: 'ziyuan',
                    children: [
                        {
                            label: 'Axure Components',
                            value: 'axure'
                        },
                        {
                            label: 'Sketch Templates',
                            value: 'sketch'
                        },
                        {
                            label: '组件交互文档',
                            value: 'jiaohu'
                        }
                    ]
                }
            ]
        };
    }
} },
{ title: "可清空", comp: {
template: `<div>
<el-cascader :options="options" clearable />
</div>`,
data() {
        return {
            options: [
                {
                    label: '指南',
                    value: 'zhinan',
                    children: [
                        {
                            label: '设计原则',
                            value: 'shejiyuanze',
                            children: [
                                {
                                    label: '一致',
                                    value: 'yizhi'
                                },
                                {
                                    label: '反馈',
                                    value: 'fankui'
                                },
                                {
                                    label: '效率',
                                    value: 'xiaolv'
                                },
                                {
                                    label: '可控',
                                    value: 'kekong'
                                }
                            ]
                        },
                        {
                            label: '导航',
                            value: 'daohang',
                            children: [
                                {
                                    label: '侧向导航',
                                    value: 'cexiangdaohang'
                                },
                                {
                                    label: '顶部导航',
                                    value: 'dingbudaohang'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '组件',
                    value: 'zujian',
                    children: [
                        {
                            label: 'Basic',
                            value: 'basic',
                            children: [
                                {
                                    label: 'Layout 布局',
                                    value: 'layout'
                                },
                                {
                                    label: 'Color 色彩',
                                    value: 'color'
                                },
                                {
                                    label: 'Typography 字体',
                                    value: 'typography'
                                },
                                {
                                    label: 'Icon 图标',
                                    value: 'icon'
                                },
                                {
                                    label: 'Button 按钮',
                                    value: 'button'
                                }
                            ]
                        },
                        {
                            label: 'Form',
                            value: 'form',
                            children: [
                                {
                                    label: 'Radio 单选框',
                                    value: 'radio'
                                },
                                {
                                    label: 'Checkbox 多选框',
                                    value: 'checkbox'
                                },
                                {
                                    label: 'Input 输入框',
                                    value: 'input'
                                },
                                {
                                    label: 'InputNumber 计数器',
                                    value: 'input-number'
                                },
                                {
                                    label: 'Select 选择器',
                                    value: 'select'
                                },
                                {
                                    label: 'Cascader 级联选择器',
                                    value: 'cascader'
                                },
                                {
                                    label: 'Switch 开关',
                                    value: 'switch'
                                },
                                {
                                    label: 'Slider 滑块',
                                    value: 'slider'
                                },
                                {
                                    label: 'TimePicker 时间选择器',
                                    value: 'time-picker'
                                },
                                {
                                    label: 'DatePicker 日期选择器',
                                    value: 'date-picker'
                                },
                                {
                                    label: 'DateTimePicker 日期时间选择器',
                                    value: 'datetime-picker'
                                },
                                {
                                    label: 'Upload 上传',
                                    value: 'upload'
                                },
                                {
                                    label: 'Rate 评分',
                                    value: 'rate'
                                },
                                {
                                    label: 'Form 表单',
                                    value: 'form'
                                }
                            ]
                        },
                        {
                            label: 'Data',
                            value: 'data',
                            children: [
                                {
                                    label: 'Table 表格',
                                    value: 'table'
                                },
                                {
                                    label: 'Tag 标签',
                                    value: 'tag'
                                },
                                {
                                    label: 'Progress 进度条',
                                    value: 'progress'
                                },
                                {
                                    label: 'Tree 树形控件',
                                    value: 'tree'
                                },
                                {
                                    label: 'Pagination 分页',
                                    value: 'pagination'
                                },
                                {
                                    label: 'Badge 标记',
                                    value: 'badge'
                                }
                            ]
                        },
                        {
                            label: 'Notice',
                            value: 'notice',
                            children: [
                                {
                                    label: 'Alert 警告',
                                    value: 'alert'
                                },
                                {
                                    label: 'Loading 加载',
                                    value: 'loading'
                                },
                                {
                                    label: 'Message 消息提示',
                                    value: 'message'
                                },
                                {
                                    label: 'MessageBox 弹框',
                                    value: 'message-box'
                                },
                                {
                                    label: 'Notification 通知',
                                    value: 'notification'
                                }
                            ]
                        },
                        {
                            label: 'Navigation',
                            value: 'navigation',
                            children: [
                                {
                                    label: 'NavMenu 导航菜单',
                                    value: 'menu'
                                },
                                {
                                    label: 'Tabs 标签页',
                                    value: 'tabs'
                                },
                                {
                                    label: 'Breadcrumb 面包屑',
                                    value: 'breadcrumb'
                                },
                                {
                                    label: 'Dropdown 下拉菜单',
                                    value: 'dropdown'
                                },
                                {
                                    label: 'Steps 步骤条',
                                    value: 'steps'
                                }
                            ]
                        },
                        {
                            label: 'Others',
                            value: 'others',
                            children: [
                                {
                                    label: 'Dialog 对话框',
                                    value: 'dialog'
                                },
                                {
                                    label: 'Tooltip 文字提示',
                                    value: 'tooltip'
                                },
                                {
                                    label: 'Popover 弹出框',
                                    value: 'popover'
                                },
                                {
                                    label: 'Card 卡片',
                                    value: 'card'
                                },
                                {
                                    label: 'Carousel 走马灯',
                                    value: 'carousel'
                                },
                                {
                                    label: 'Collapse 折叠面板',
                                    value: 'collapse'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '资源',
                    value: 'ziyuan',
                    children: [
                        {
                            label: 'Axure Components',
                            value: 'axure'
                        },
                        {
                            label: 'Sketch Templates',
                            value: 'sketch'
                        },
                        {
                            label: '组件交互文档',
                            value: 'jiaohu'
                        }
                    ]
                }
            ]
        };
    }
} },
{ title: "仅显示最后一级", comp: {
template: `<div>
<el-cascader :options="options" :show-all-levels="false" />
</div>`,
data() {
        return {
            options: [
                {
                    label: '指南',
                    value: 'zhinan',
                    children: [
                        {
                            label: '设计原则',
                            value: 'shejiyuanze',
                            children: [
                                {
                                    label: '一致',
                                    value: 'yizhi'
                                },
                                {
                                    label: '反馈',
                                    value: 'fankui'
                                },
                                {
                                    label: '效率',
                                    value: 'xiaolv'
                                },
                                {
                                    label: '可控',
                                    value: 'kekong'
                                }
                            ]
                        },
                        {
                            label: '导航',
                            value: 'daohang',
                            children: [
                                {
                                    label: '侧向导航',
                                    value: 'cexiangdaohang'
                                },
                                {
                                    label: '顶部导航',
                                    value: 'dingbudaohang'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '组件',
                    value: 'zujian',
                    children: [
                        {
                            label: 'Basic',
                            value: 'basic',
                            children: [
                                {
                                    label: 'Layout 布局',
                                    value: 'layout'
                                },
                                {
                                    label: 'Color 色彩',
                                    value: 'color'
                                },
                                {
                                    label: 'Typography 字体',
                                    value: 'typography'
                                },
                                {
                                    label: 'Icon 图标',
                                    value: 'icon'
                                },
                                {
                                    label: 'Button 按钮',
                                    value: 'button'
                                }
                            ]
                        },
                        {
                            label: 'Form',
                            value: 'form',
                            children: [
                                {
                                    label: 'Radio 单选框',
                                    value: 'radio'
                                },
                                {
                                    label: 'Checkbox 多选框',
                                    value: 'checkbox'
                                },
                                {
                                    label: 'Input 输入框',
                                    value: 'input'
                                },
                                {
                                    label: 'InputNumber 计数器',
                                    value: 'input-number'
                                },
                                {
                                    label: 'Select 选择器',
                                    value: 'select'
                                },
                                {
                                    label: 'Cascader 级联选择器',
                                    value: 'cascader'
                                },
                                {
                                    label: 'Switch 开关',
                                    value: 'switch'
                                },
                                {
                                    label: 'Slider 滑块',
                                    value: 'slider'
                                },
                                {
                                    label: 'TimePicker 时间选择器',
                                    value: 'time-picker'
                                },
                                {
                                    label: 'DatePicker 日期选择器',
                                    value: 'date-picker'
                                },
                                {
                                    label: 'DateTimePicker 日期时间选择器',
                                    value: 'datetime-picker'
                                },
                                {
                                    label: 'Upload 上传',
                                    value: 'upload'
                                },
                                {
                                    label: 'Rate 评分',
                                    value: 'rate'
                                },
                                {
                                    label: 'Form 表单',
                                    value: 'form'
                                }
                            ]
                        },
                        {
                            label: 'Data',
                            value: 'data',
                            children: [
                                {
                                    label: 'Table 表格',
                                    value: 'table'
                                },
                                {
                                    label: 'Tag 标签',
                                    value: 'tag'
                                },
                                {
                                    label: 'Progress 进度条',
                                    value: 'progress'
                                },
                                {
                                    label: 'Tree 树形控件',
                                    value: 'tree'
                                },
                                {
                                    label: 'Pagination 分页',
                                    value: 'pagination'
                                },
                                {
                                    label: 'Badge 标记',
                                    value: 'badge'
                                }
                            ]
                        },
                        {
                            label: 'Notice',
                            value: 'notice',
                            children: [
                                {
                                    label: 'Alert 警告',
                                    value: 'alert'
                                },
                                {
                                    label: 'Loading 加载',
                                    value: 'loading'
                                },
                                {
                                    label: 'Message 消息提示',
                                    value: 'message'
                                },
                                {
                                    label: 'MessageBox 弹框',
                                    value: 'message-box'
                                },
                                {
                                    label: 'Notification 通知',
                                    value: 'notification'
                                }
                            ]
                        },
                        {
                            label: 'Navigation',
                            value: 'navigation',
                            children: [
                                {
                                    label: 'NavMenu 导航菜单',
                                    value: 'menu'
                                },
                                {
                                    label: 'Tabs 标签页',
                                    value: 'tabs'
                                },
                                {
                                    label: 'Breadcrumb 面包屑',
                                    value: 'breadcrumb'
                                },
                                {
                                    label: 'Dropdown 下拉菜单',
                                    value: 'dropdown'
                                },
                                {
                                    label: 'Steps 步骤条',
                                    value: 'steps'
                                }
                            ]
                        },
                        {
                            label: 'Others',
                            value: 'others',
                            children: [
                                {
                                    label: 'Dialog 对话框',
                                    value: 'dialog'
                                },
                                {
                                    label: 'Tooltip 文字提示',
                                    value: 'tooltip'
                                },
                                {
                                    label: 'Popover 弹出框',
                                    value: 'popover'
                                },
                                {
                                    label: 'Card 卡片',
                                    value: 'card'
                                },
                                {
                                    label: 'Carousel 走马灯',
                                    value: 'carousel'
                                },
                                {
                                    label: 'Collapse 折叠面板',
                                    value: 'collapse'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '资源',
                    value: 'ziyuan',
                    children: [
                        {
                            label: 'Axure Components',
                            value: 'axure'
                        },
                        {
                            label: 'Sketch Templates',
                            value: 'sketch'
                        },
                        {
                            label: '组件交互文档',
                            value: 'jiaohu'
                        }
                    ]
                }
            ]
        };
    }
} },
{ title: "多选", comp: {
template: `<div>
<div class="block-horizontal">
        <div>
            <div>默认显示所有Tag</div>
            <el-cascader :options="options" :props="props" clearable />
        </div>

        <div>
            <div>折叠展示Tag</div>
            <el-cascader :options="options" :props="props" collapse-tags clearable />
        </div>
    </div>
</div>`,
data() {
        return {
            props: { multiple: true },
            options: [
                {
                    label: '东南',
                    value: 1,
                    children: [
                        {
                            label: '上海',
                            value: 2,
                            children: [
                                { label: '普陀', value: 3 },
                                { label: '黄埔', value: 4 },
                                { label: '徐汇', value: 5 }
                            ]
                        },
                        {
                            label: '江苏',
                            value: 7,
                            children: [
                                { label: '南京', value: 8 },
                                { label: '苏州', value: 9 },
                                { label: '无锡', value: 10 }
                            ]
                        },
                        {
                            label: '浙江',
                            value: 12,
                            children: [
                                { label: '杭州', value: 13 },
                                { label: '宁波', value: 14 },
                                { label: '嘉兴', value: 15 }
                            ]
                        }
                    ]
                },
                {
                    label: '西北',
                    value: 17,
                    children: [
                        {
                            label: '陕西',
                            value: 18,
                            children: [
                                { value: 19, label: '西安' },
                                { value: 20, label: '延安' }
                            ]
                        },
                        {
                            label: '新疆维吾尔族自治区',
                            value: 21,
                            children: [
                                { label: '乌鲁木齐', value: 22 },
                                { label: '克拉玛依', value: 23 }
                            ]
                        }
                    ]
                }
            ]
        };
    }
} },
{ title: "选择任意一级选项", comp: {
template: `<div>
<div class="block-horizontal">
        <div>
            <div>单选选择任意一级选项</div>
            <el-cascader :options="options" :props="{ checkStrictly: true }" clearable />
        </div>

        <div>
            <div>多选选择任意一级选项</div>
            <el-cascader :options="options" :props="{ multiple: true, checkStrictly: true }" clearable />
        </div>
    </div>
</div>`,
data() {
        return {
            options: [
                {
                    label: '指南',
                    value: 'zhinan',
                    children: [
                        {
                            label: '设计原则',
                            value: 'shejiyuanze',
                            children: [
                                {
                                    label: '一致',
                                    value: 'yizhi'
                                },
                                {
                                    label: '反馈',
                                    value: 'fankui'
                                },
                                {
                                    label: '效率',
                                    value: 'xiaolv'
                                },
                                {
                                    label: '可控',
                                    value: 'kekong'
                                }
                            ]
                        },
                        {
                            label: '导航',
                            value: 'daohang',
                            children: [
                                {
                                    label: '侧向导航',
                                    value: 'cexiangdaohang'
                                },
                                {
                                    label: '顶部导航',
                                    value: 'dingbudaohang'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '组件',
                    value: 'zujian',
                    children: [
                        {
                            label: 'Basic',
                            value: 'basic',
                            children: [
                                {
                                    label: 'Layout 布局',
                                    value: 'layout'
                                },
                                {
                                    label: 'Color 色彩',
                                    value: 'color'
                                },
                                {
                                    label: 'Typography 字体',
                                    value: 'typography'
                                },
                                {
                                    label: 'Icon 图标',
                                    value: 'icon'
                                },
                                {
                                    label: 'Button 按钮',
                                    value: 'button'
                                }
                            ]
                        },
                        {
                            label: 'Form',
                            value: 'form',
                            children: [
                                {
                                    label: 'Radio 单选框',
                                    value: 'radio'
                                },
                                {
                                    label: 'Checkbox 多选框',
                                    value: 'checkbox'
                                },
                                {
                                    label: 'Input 输入框',
                                    value: 'input'
                                },
                                {
                                    label: 'InputNumber 计数器',
                                    value: 'input-number'
                                },
                                {
                                    label: 'Select 选择器',
                                    value: 'select'
                                },
                                {
                                    label: 'Cascader 级联选择器',
                                    value: 'cascader'
                                },
                                {
                                    label: 'Switch 开关',
                                    value: 'switch'
                                },
                                {
                                    label: 'Slider 滑块',
                                    value: 'slider'
                                },
                                {
                                    label: 'TimePicker 时间选择器',
                                    value: 'time-picker'
                                },
                                {
                                    label: 'DatePicker 日期选择器',
                                    value: 'date-picker'
                                },
                                {
                                    label: 'DateTimePicker 日期时间选择器',
                                    value: 'datetime-picker'
                                },
                                {
                                    label: 'Upload 上传',
                                    value: 'upload'
                                },
                                {
                                    label: 'Rate 评分',
                                    value: 'rate'
                                },
                                {
                                    label: 'Form 表单',
                                    value: 'form'
                                }
                            ]
                        },
                        {
                            label: 'Data',
                            value: 'data',
                            children: [
                                {
                                    label: 'Table 表格',
                                    value: 'table'
                                },
                                {
                                    label: 'Tag 标签',
                                    value: 'tag'
                                },
                                {
                                    label: 'Progress 进度条',
                                    value: 'progress'
                                },
                                {
                                    label: 'Tree 树形控件',
                                    value: 'tree'
                                },
                                {
                                    label: 'Pagination 分页',
                                    value: 'pagination'
                                },
                                {
                                    label: 'Badge 标记',
                                    value: 'badge'
                                }
                            ]
                        },
                        {
                            label: 'Notice',
                            value: 'notice',
                            children: [
                                {
                                    label: 'Alert 警告',
                                    value: 'alert'
                                },
                                {
                                    label: 'Loading 加载',
                                    value: 'loading'
                                },
                                {
                                    label: 'Message 消息提示',
                                    value: 'message'
                                },
                                {
                                    label: 'MessageBox 弹框',
                                    value: 'message-box'
                                },
                                {
                                    label: 'Notification 通知',
                                    value: 'notification'
                                }
                            ]
                        },
                        {
                            label: 'Navigation',
                            value: 'navigation',
                            children: [
                                {
                                    label: 'NavMenu 导航菜单',
                                    value: 'menu'
                                },
                                {
                                    label: 'Tabs 标签页',
                                    value: 'tabs'
                                },
                                {
                                    label: 'Breadcrumb 面包屑',
                                    value: 'breadcrumb'
                                },
                                {
                                    label: 'Dropdown 下拉菜单',
                                    value: 'dropdown'
                                },
                                {
                                    label: 'Steps 步骤条',
                                    value: 'steps'
                                }
                            ]
                        },
                        {
                            label: 'Others',
                            value: 'others',
                            children: [
                                {
                                    label: 'Dialog 对话框',
                                    value: 'dialog'
                                },
                                {
                                    label: 'Tooltip 文字提示',
                                    value: 'tooltip'
                                },
                                {
                                    label: 'Popover 弹出框',
                                    value: 'popover'
                                },
                                {
                                    label: 'Card 卡片',
                                    value: 'card'
                                },
                                {
                                    label: 'Carousel 走马灯',
                                    value: 'carousel'
                                },
                                {
                                    label: 'Collapse 折叠面板',
                                    value: 'collapse'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '资源',
                    value: 'ziyuan',
                    children: [
                        {
                            label: 'Axure Components',
                            value: 'axure'
                        },
                        {
                            label: 'Sketch Templates',
                            value: 'sketch'
                        },
                        {
                            label: '组件交互文档',
                            value: 'jiaohu'
                        }
                    ]
                }
            ]
        };
    }
} },
{ title: "动态加载", comp: (function () {
let id = 0;
return {
template: `<div>
<el-cascader :props="props" />
</div>`,
data() {
        return {
            props: {
                lazy: true,
                lazyLoad(node, resolve) {
                    const { level } = node;
                    setTimeout(() => {
                        const nodes = Array.from({ length: level + 1 }).map(item => ({
                            value: ++id,
                            label: `选项${id}`,
                            leaf: level >= 2
                        }));
                        // 通过调用resolve将子节点数据返回, 通知组件数据加载完成
                        resolve(nodes);
                    }, 1000);
                }
            }
        };
    }
};
})() },
{ title: "可搜索", comp: {
template: `<div>
<div class="block-horizontal">
        <div>
            <div>单选可搜索</div>
            <el-cascader placeholder="试试搜索: 指南" :options="options" filterable />
        </div>

        <div>
            <div>多选可搜索</div>
            <el-cascader placeholder="试试搜索: 指南" :options="options" :props="{ multiple: true }" filterable />
        </div>
    </div>
</div>`,
data() {
        return {
            options: [
                {
                    label: '指南',
                    value: 'zhinan',
                    children: [
                        {
                            label: '设计原则',
                            value: 'shejiyuanze',
                            children: [
                                {
                                    label: '一致',
                                    value: 'yizhi'
                                },
                                {
                                    label: '反馈',
                                    value: 'fankui'
                                },
                                {
                                    label: '效率',
                                    value: 'xiaolv'
                                },
                                {
                                    label: '可控',
                                    value: 'kekong'
                                }
                            ]
                        },
                        {
                            label: '导航',
                            value: 'daohang',
                            children: [
                                {
                                    label: '侧向导航',
                                    value: 'cexiangdaohang'
                                },
                                {
                                    label: '顶部导航',
                                    value: 'dingbudaohang'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '组件',
                    value: 'zujian',
                    children: [
                        {
                            label: 'Basic',
                            value: 'basic',
                            children: [
                                {
                                    label: 'Layout 布局',
                                    value: 'layout'
                                },
                                {
                                    label: 'Color 色彩',
                                    value: 'color'
                                },
                                {
                                    label: 'Typography 字体',
                                    value: 'typography'
                                },
                                {
                                    label: 'Icon 图标',
                                    value: 'icon'
                                },
                                {
                                    label: 'Button 按钮',
                                    value: 'button'
                                }
                            ]
                        },
                        {
                            label: 'Form',
                            value: 'form',
                            children: [
                                {
                                    label: 'Radio 单选框',
                                    value: 'radio'
                                },
                                {
                                    label: 'Checkbox 多选框',
                                    value: 'checkbox'
                                },
                                {
                                    label: 'Input 输入框',
                                    value: 'input'
                                },
                                {
                                    label: 'InputNumber 计数器',
                                    value: 'input-number'
                                },
                                {
                                    label: 'Select 选择器',
                                    value: 'select'
                                },
                                {
                                    label: 'Cascader 级联选择器',
                                    value: 'cascader'
                                },
                                {
                                    label: 'Switch 开关',
                                    value: 'switch'
                                },
                                {
                                    label: 'Slider 滑块',
                                    value: 'slider'
                                },
                                {
                                    label: 'TimePicker 时间选择器',
                                    value: 'time-picker'
                                },
                                {
                                    label: 'DatePicker 日期选择器',
                                    value: 'date-picker'
                                },
                                {
                                    label: 'DateTimePicker 日期时间选择器',
                                    value: 'datetime-picker'
                                },
                                {
                                    label: 'Upload 上传',
                                    value: 'upload'
                                },
                                {
                                    label: 'Rate 评分',
                                    value: 'rate'
                                },
                                {
                                    label: 'Form 表单',
                                    value: 'form'
                                }
                            ]
                        },
                        {
                            label: 'Data',
                            value: 'data',
                            children: [
                                {
                                    label: 'Table 表格',
                                    value: 'table'
                                },
                                {
                                    label: 'Tag 标签',
                                    value: 'tag'
                                },
                                {
                                    label: 'Progress 进度条',
                                    value: 'progress'
                                },
                                {
                                    label: 'Tree 树形控件',
                                    value: 'tree'
                                },
                                {
                                    label: 'Pagination 分页',
                                    value: 'pagination'
                                },
                                {
                                    label: 'Badge 标记',
                                    value: 'badge'
                                }
                            ]
                        },
                        {
                            label: 'Notice',
                            value: 'notice',
                            children: [
                                {
                                    label: 'Alert 警告',
                                    value: 'alert'
                                },
                                {
                                    label: 'Loading 加载',
                                    value: 'loading'
                                },
                                {
                                    label: 'Message 消息提示',
                                    value: 'message'
                                },
                                {
                                    label: 'MessageBox 弹框',
                                    value: 'message-box'
                                },
                                {
                                    label: 'Notification 通知',
                                    value: 'notification'
                                }
                            ]
                        },
                        {
                            label: 'Navigation',
                            value: 'navigation',
                            children: [
                                {
                                    label: 'NavMenu 导航菜单',
                                    value: 'menu'
                                },
                                {
                                    label: 'Tabs 标签页',
                                    value: 'tabs'
                                },
                                {
                                    label: 'Breadcrumb 面包屑',
                                    value: 'breadcrumb'
                                },
                                {
                                    label: 'Dropdown 下拉菜单',
                                    value: 'dropdown'
                                },
                                {
                                    label: 'Steps 步骤条',
                                    value: 'steps'
                                }
                            ]
                        },
                        {
                            label: 'Others',
                            value: 'others',
                            children: [
                                {
                                    label: 'Dialog 对话框',
                                    value: 'dialog'
                                },
                                {
                                    label: 'Tooltip 文字提示',
                                    value: 'tooltip'
                                },
                                {
                                    label: 'Popover 弹出框',
                                    value: 'popover'
                                },
                                {
                                    label: 'Card 卡片',
                                    value: 'card'
                                },
                                {
                                    label: 'Carousel 走马灯',
                                    value: 'carousel'
                                },
                                {
                                    label: 'Collapse 折叠面板',
                                    value: 'collapse'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '资源',
                    value: 'ziyuan',
                    children: [
                        {
                            label: 'Axure Components',
                            value: 'axure'
                        },
                        {
                            label: 'Sketch Templates',
                            value: 'sketch'
                        },
                        {
                            label: '组件交互文档',
                            value: 'jiaohu'
                        }
                    ]
                }
            ]
        };
    }
} },
{ title: "自定义节点内容", comp: {
template: `<div>
<el-cascader :options="options">
        <template slot-scope="{ node, data }">
            <span>{{ data.label }}</span>
            <span v-if="!node.isLeaf">({{ data.children.length }})</span>
</div>`,
data() {
        return {
            options: [
                {
                    label: '指南',
                    value: 'zhinan',
                    children: [
                        {
                            label: '设计原则',
                            value: 'shejiyuanze',
                            children: [
                                {
                                    label: '一致',
                                    value: 'yizhi'
                                },
                                {
                                    label: '反馈',
                                    value: 'fankui'
                                },
                                {
                                    label: '效率',
                                    value: 'xiaolv'
                                },
                                {
                                    label: '可控',
                                    value: 'kekong'
                                }
                            ]
                        },
                        {
                            label: '导航',
                            value: 'daohang',
                            children: [
                                {
                                    label: '侧向导航',
                                    value: 'cexiangdaohang'
                                },
                                {
                                    label: '顶部导航',
                                    value: 'dingbudaohang'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '组件',
                    value: 'zujian',
                    children: [
                        {
                            label: 'Basic',
                            value: 'basic',
                            children: [
                                {
                                    label: 'Layout 布局',
                                    value: 'layout'
                                },
                                {
                                    label: 'Color 色彩',
                                    value: 'color'
                                },
                                {
                                    label: 'Typography 字体',
                                    value: 'typography'
                                },
                                {
                                    label: 'Icon 图标',
                                    value: 'icon'
                                },
                                {
                                    label: 'Button 按钮',
                                    value: 'button'
                                }
                            ]
                        },
                        {
                            label: 'Form',
                            value: 'form',
                            children: [
                                {
                                    label: 'Radio 单选框',
                                    value: 'radio'
                                },
                                {
                                    label: 'Checkbox 多选框',
                                    value: 'checkbox'
                                },
                                {
                                    label: 'Input 输入框',
                                    value: 'input'
                                },
                                {
                                    label: 'InputNumber 计数器',
                                    value: 'input-number'
                                },
                                {
                                    label: 'Select 选择器',
                                    value: 'select'
                                },
                                {
                                    label: 'Cascader 级联选择器',
                                    value: 'cascader'
                                },
                                {
                                    label: 'Switch 开关',
                                    value: 'switch'
                                },
                                {
                                    label: 'Slider 滑块',
                                    value: 'slider'
                                },
                                {
                                    label: 'TimePicker 时间选择器',
                                    value: 'time-picker'
                                },
                                {
                                    label: 'DatePicker 日期选择器',
                                    value: 'date-picker'
                                },
                                {
                                    label: 'DateTimePicker 日期时间选择器',
                                    value: 'datetime-picker'
                                },
                                {
                                    label: 'Upload 上传',
                                    value: 'upload'
                                },
                                {
                                    label: 'Rate 评分',
                                    value: 'rate'
                                },
                                {
                                    label: 'Form 表单',
                                    value: 'form'
                                }
                            ]
                        },
                        {
                            label: 'Data',
                            value: 'data',
                            children: [
                                {
                                    label: 'Table 表格',
                                    value: 'table'
                                },
                                {
                                    label: 'Tag 标签',
                                    value: 'tag'
                                },
                                {
                                    label: 'Progress 进度条',
                                    value: 'progress'
                                },
                                {
                                    label: 'Tree 树形控件',
                                    value: 'tree'
                                },
                                {
                                    label: 'Pagination 分页',
                                    value: 'pagination'
                                },
                                {
                                    label: 'Badge 标记',
                                    value: 'badge'
                                }
                            ]
                        },
                        {
                            label: 'Notice',
                            value: 'notice',
                            children: [
                                {
                                    label: 'Alert 警告',
                                    value: 'alert'
                                },
                                {
                                    label: 'Loading 加载',
                                    value: 'loading'
                                },
                                {
                                    label: 'Message 消息提示',
                                    value: 'message'
                                },
                                {
                                    label: 'MessageBox 弹框',
                                    value: 'message-box'
                                },
                                {
                                    label: 'Notification 通知',
                                    value: 'notification'
                                }
                            ]
                        },
                        {
                            label: 'Navigation',
                            value: 'navigation',
                            children: [
                                {
                                    label: 'NavMenu 导航菜单',
                                    value: 'menu'
                                },
                                {
                                    label: 'Tabs 标签页',
                                    value: 'tabs'
                                },
                                {
                                    label: 'Breadcrumb 面包屑',
                                    value: 'breadcrumb'
                                },
                                {
                                    label: 'Dropdown 下拉菜单',
                                    value: 'dropdown'
                                },
                                {
                                    label: 'Steps 步骤条',
                                    value: 'steps'
                                }
                            ]
                        },
                        {
                            label: 'Others',
                            value: 'others',
                            children: [
                                {
                                    label: 'Dialog 对话框',
                                    value: 'dialog'
                                },
                                {
                                    label: 'Tooltip 文字提示',
                                    value: 'tooltip'
                                },
                                {
                                    label: 'Popover 弹出框',
                                    value: 'popover'
                                },
                                {
                                    label: 'Card 卡片',
                                    value: 'card'
                                },
                                {
                                    label: 'Carousel 走马灯',
                                    value: 'carousel'
                                },
                                {
                                    label: 'Collapse 折叠面板',
                                    value: 'collapse'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '资源',
                    value: 'ziyuan',
                    children: [
                        {
                            label: 'Axure Components',
                            value: 'axure'
                        },
                        {
                            label: 'Sketch Templates',
                            value: 'sketch'
                        },
                        {
                            label: '组件交互文档',
                            value: 'jiaohu'
                        }
                    ]
                }
            ]
        };
    }
} },
{ title: "级联面板", comp: {
template: `<div>
<el-cascader-panel :options="options" />
</div>`,
data() {
        return {
            options: [
                {
                    label: '指南',
                    value: 'zhinan',
                    children: [
                        {
                            label: '设计原则',
                            value: 'shejiyuanze',
                            children: [
                                {
                                    label: '一致',
                                    value: 'yizhi'
                                },
                                {
                                    label: '反馈',
                                    value: 'fankui'
                                },
                                {
                                    label: '效率',
                                    value: 'xiaolv'
                                },
                                {
                                    label: '可控',
                                    value: 'kekong'
                                }
                            ]
                        },
                        {
                            label: '导航',
                            value: 'daohang',
                            children: [
                                {
                                    label: '侧向导航',
                                    value: 'cexiangdaohang'
                                },
                                {
                                    label: '顶部导航',
                                    value: 'dingbudaohang'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '组件',
                    value: 'zujian',
                    children: [
                        {
                            label: 'Basic',
                            value: 'basic',
                            children: [
                                {
                                    label: 'Layout 布局',
                                    value: 'layout'
                                },
                                {
                                    label: 'Color 色彩',
                                    value: 'color'
                                },
                                {
                                    label: 'Typography 字体',
                                    value: 'typography'
                                },
                                {
                                    label: 'Icon 图标',
                                    value: 'icon'
                                },
                                {
                                    label: 'Button 按钮',
                                    value: 'button'
                                }
                            ]
                        },
                        {
                            label: 'Form',
                            value: 'form',
                            children: [
                                {
                                    label: 'Radio 单选框',
                                    value: 'radio'
                                },
                                {
                                    label: 'Checkbox 多选框',
                                    value: 'checkbox'
                                },
                                {
                                    label: 'Input 输入框',
                                    value: 'input'
                                },
                                {
                                    label: 'InputNumber 计数器',
                                    value: 'input-number'
                                },
                                {
                                    label: 'Select 选择器',
                                    value: 'select'
                                },
                                {
                                    label: 'Cascader 级联选择器',
                                    value: 'cascader'
                                },
                                {
                                    label: 'Switch 开关',
                                    value: 'switch'
                                },
                                {
                                    label: 'Slider 滑块',
                                    value: 'slider'
                                },
                                {
                                    label: 'TimePicker 时间选择器',
                                    value: 'time-picker'
                                },
                                {
                                    label: 'DatePicker 日期选择器',
                                    value: 'date-picker'
                                },
                                {
                                    label: 'DateTimePicker 日期时间选择器',
                                    value: 'datetime-picker'
                                },
                                {
                                    label: 'Upload 上传',
                                    value: 'upload'
                                },
                                {
                                    label: 'Rate 评分',
                                    value: 'rate'
                                },
                                {
                                    label: 'Form 表单',
                                    value: 'form'
                                }
                            ]
                        },
                        {
                            label: 'Data',
                            value: 'data',
                            children: [
                                {
                                    label: 'Table 表格',
                                    value: 'table'
                                },
                                {
                                    label: 'Tag 标签',
                                    value: 'tag'
                                },
                                {
                                    label: 'Progress 进度条',
                                    value: 'progress'
                                },
                                {
                                    label: 'Tree 树形控件',
                                    value: 'tree'
                                },
                                {
                                    label: 'Pagination 分页',
                                    value: 'pagination'
                                },
                                {
                                    label: 'Badge 标记',
                                    value: 'badge'
                                }
                            ]
                        },
                        {
                            label: 'Notice',
                            value: 'notice',
                            children: [
                                {
                                    label: 'Alert 警告',
                                    value: 'alert'
                                },
                                {
                                    label: 'Loading 加载',
                                    value: 'loading'
                                },
                                {
                                    label: 'Message 消息提示',
                                    value: 'message'
                                },
                                {
                                    label: 'MessageBox 弹框',
                                    value: 'message-box'
                                },
                                {
                                    label: 'Notification 通知',
                                    value: 'notification'
                                }
                            ]
                        },
                        {
                            label: 'Navigation',
                            value: 'navigation',
                            children: [
                                {
                                    label: 'NavMenu 导航菜单',
                                    value: 'menu'
                                },
                                {
                                    label: 'Tabs 标签页',
                                    value: 'tabs'
                                },
                                {
                                    label: 'Breadcrumb 面包屑',
                                    value: 'breadcrumb'
                                },
                                {
                                    label: 'Dropdown 下拉菜单',
                                    value: 'dropdown'
                                },
                                {
                                    label: 'Steps 步骤条',
                                    value: 'steps'
                                }
                            ]
                        },
                        {
                            label: 'Others',
                            value: 'others',
                            children: [
                                {
                                    label: 'Dialog 对话框',
                                    value: 'dialog'
                                },
                                {
                                    label: 'Tooltip 文字提示',
                                    value: 'tooltip'
                                },
                                {
                                    label: 'Popover 弹出框',
                                    value: 'popover'
                                },
                                {
                                    label: 'Card 卡片',
                                    value: 'card'
                                },
                                {
                                    label: 'Carousel 走马灯',
                                    value: 'carousel'
                                },
                                {
                                    label: 'Collapse 折叠面板',
                                    value: 'collapse'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '资源',
                    value: 'ziyuan',
                    children: [
                        {
                            label: 'Axure Components',
                            value: 'axure'
                        },
                        {
                            label: 'Sketch Templates',
                            value: 'sketch'
                        },
                        {
                            label: '组件交互文档',
                            value: 'jiaohu'
                        }
                    ]
                }
            ]
        };
    }
} }
]
        };
    }
};
</script>

