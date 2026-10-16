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
    name: 'TagView',
    data() {
        return {
            sections: [
                {
                    title: '基础用法',
                    comp: {
                        template: `<div>
<el-tag>标签一</el-tag>

    <el-tag type="success">标签二</el-tag>

    <el-tag type="info">标签三</el-tag>

    <el-tag type="warning">标签四</el-tag>

    <el-tag type="danger">标签五</el-tag>
</div>`
                    }
                },
                {
                    title: '可移除标签',
                    comp: {
                        template: `<div>
<el-tag v-for="item in tagList" :key="item.name" :type="item.type" closable>{{ item.name }}</el-tag>
</div>`,
                        data() {
                            return {
                                tagList: [
                                    { name: '标签一', type: '' },
                                    { name: '标签二', type: 'success' },
                                    { name: '标签三', type: 'info' },
                                    { name: '标签四', type: 'warning' },
                                    { name: '标签五', type: 'danger' }
                                ]
                            };
                        }
                    }
                },
                {
                    title: '动态编辑标签',
                    comp: {
                        template: `<div>
<el-tag v-for="item in tagsData" :key="item" closable :disable-transitions="false" @close="handleClose(item)">{{ item }}</el-tag>

    <el-input
        v-if="inputVisible"
        v-model="inputValue"
        ref="inputRef"
        style="width: 100px"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
    />
    <el-button v-else @click="showInput">+ New Tag</el-button>
</div>`,
                        data() {
                            return {
                                tagsData: ['标签一', '标签二', '标签三'],
                                inputVisible: false,
                                inputValue: ''
                            };
                        },
                        methods: {
                            handleClose(item) {
                                this.tagsData.splice(this.tagsData.indexOf(item), 1);
                            },
                            showInput() {
                                this.inputVisible = true;
                                this.$nextTick(_ => {
                                    this.$refs.inputRef.$refs.input.focus();
                                });
                            },
                            handleInputConfirm() {
                                const inputValue = this.inputValue;

                                if (inputValue) {
                                    this.tagsData.push(inputValue);
                                }

                                this.inputVisible = false;

                                this.inputValue = '';
                            }
                        }
                    }
                },
                {
                    title: '不同尺寸',
                    comp: {
                        template: `<div>
<el-tag closable>默认标签</el-tag>

    <el-tag size="medium" closable>中等标签</el-tag>

    <el-tag size="small" closable>小型标签</el-tag>

    <el-tag size="mini" closable>超小标签</el-tag>
</div>`
                    }
                },
                {
                    title: '不同主题',
                    comp: {
                        template: `<div>
<div>light</div>
    <div class="block-horizontal">
        <el-tag v-for="item in items" :key="item.label" :type="item.type">{{ item.label }}</el-tag>
    </div>

    <el-divider />

    <div>dark</div>
    <div class="block-horizontal">
        <el-tag v-for="item in items" :key="item.label" :type="item.type" effect="dark">{{ item.label }}</el-tag>
    </div>

    <el-divider />

    <div>plain</div>
    <div class="block-horizontal">
        <el-tag v-for="item in items" :key="item.label" :type="item.type" effect="plain">{{ item.label }}</el-tag>
    </div>
</div>`,
                        data() {
                            return {
                                items: [
                                    { label: '标签一', type: '' },
                                    { label: '标签二', type: 'success' },
                                    { label: '标签三', type: 'info' },
                                    { label: '标签四', type: 'danger' },
                                    { label: '标签五', type: 'warning' }
                                ]
                            };
                        }
                    }
                }
            ]
        };
    }
};
</script>
