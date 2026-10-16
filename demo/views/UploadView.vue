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
    name: 'UploadView',
    data() {
        return {
            sections: [
                {
                    title: '点击上传',
                    comp: {
                        template: `<div>
<el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        :file-list="fileList"
        multiple
        :limit="3"
        :before-remove="beforeRemove"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-exceed="handleExceed"
    >
        <el-button type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件, 且不超过500kb</div>
    </el-upload>
</div>`,
                        data() {
                            return {
                                fileList: [
                                    {
                                        name: 'food.jpeg',
                                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                                    },
                                    {
                                        name: 'food2.jpeg',
                                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                                    }
                                ]
                            };
                        },
                        methods: {
                            handleRemove(file, fileList) {
                                console.log(file, fileList);
                            },
                            handlePreview(file) {
                                console.log(file);
                            },
                            handleExceed(files, fileList) {
                                this.$message.warning(
                                    `当前限制选择 3 个文件, 本次选择了 ${files.length} 个文件, 共选择了 ${files.length + fileList.length} 个文件`
                                );
                            },
                            beforeRemove(file, fileList) {
                                return this.$confirm(`确定移除 ${file.name}?`);
                            }
                        }
                    }
                },
                {
                    title: '用户头像上传',
                    comp: {
                        template: `<div>
<el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :before-upload="beforeAvatarUpload"
        :on-success="handleAvatarSuccess"
    >
        <el-button type="primary">点击上传</el-button>
    </el-upload>
</div>`,
                        data() {
                            return {
                                imageUrl: ''
                            };
                        },
                        methods: {
                            handleAvatarSuccess(res, file) {
                                this.imageUrl = URL.createObjectURL(file.raw);
                            },
                            beforeAvatarUpload(file) {
                                const isJPG = file.type === 'image/jpeg';

                                const isLt2M = file.size / 1024 / 1024 < 2;

                                if (!isJPG) {
                                    this.$message.error('上传头像图片只能是 JPG 格式!');
                                }

                                if (!isLt2M) {
                                    this.$message.error('上传头像图片大小不能超过 2MB!');
                                }

                                return isJPG && isLt2M;
                            }
                        }
                    }
                },
                {
                    title: '照片墙',
                    comp: {
                        template: `<div>
<el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
        <i class="el-icon-plus" />
    </el-upload>

    <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
</div>`,
                        data() {
                            return {
                                dialogImageUrl: '',
                                dialogVisible: false
                            };
                        },
                        methods: {
                            handleRemove(file, fileList) {
                                console.log(file, fileList);
                            },
                            handlePictureCardPreview(file) {
                                this.dialogImageUrl = file.url;
                                this.dialogVisible = true;
                            }
                        }
                    }
                },
                {
                    title: '文件缩略图',
                    comp: {
                        template: `<div>
<el-upload action="#" list-type="picture-card" :auto-upload="false">
        <i slot="default" class="el-icon-plus" />
        <div slot="file" slot-scope="{ file }">
            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
            <span class="el-upload-list__item-actions">
                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                    <i class="el-icon-zoom-in" />
                </span>
                <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                    <i class="el-icon-download" />
                </span>
                <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                    <i class="el-icon-delete" />
                </span>
            </span>
        </div>
    </el-upload>

    <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
</div>`,
                        data() {
                            return {
                                dialogImageUrl: '',
                                dialogVisible: false,
                                disabled: false
                            };
                        },
                        methods: {
                            handleRemove(file) {
                                console.log(file);
                            },
                            handlePictureCardPreview(file) {
                                this.dialogImageUrl = file.url;
                                this.dialogVisible = true;
                            },
                            handleDownload(file) {
                                console.log(file);
                            }
                        }
                    }
                },
                {
                    title: '图片列表缩略图',
                    comp: {
                        template: `<div>
<el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture"
        :file-list="fileList"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
    >
        <el-button type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件, 且不超过500kb</div>
    </el-upload>
</div>`,
                        data() {
                            return {
                                fileList: [
                                    {
                                        name: 'food.jpeg',
                                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                                    },
                                    {
                                        name: 'food2.jpeg',
                                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                                    }
                                ]
                            };
                        },
                        methods: {
                            handleRemove(file, fileList) {
                                console.log(file, fileList);
                            },
                            handlePreview(file) {
                                console.log(file);
                            }
                        }
                    }
                },
                {
                    title: '上传文件列表控制',
                    comp: {
                        template: `<div>
<el-upload action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList">
        <el-button type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件, 且不超过500kb</div>
    </el-upload>
</div>`,
                        data() {
                            return {
                                fileList: [
                                    {
                                        name: 'food.jpeg',
                                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                                    },
                                    {
                                        name: 'food2.jpeg',
                                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                                    }
                                ]
                            };
                        },
                        methods: {
                            handleChange(file, fileList) {
                                this.fileList = fileList.slice(-3);
                            }
                        }
                    }
                },
                {
                    title: '拖拽上传',
                    comp: {
                        template: `<div>
<el-upload drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
        <i class="el-icon-upload" />
        <div class="el-upload__text">
            将文件拖到此处, 或
            <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件, 且不超过500kb</div>
    </el-upload>
</div>`
                    }
                },
                {
                    title: '手动上传',
                    comp: {
                        template: `<div>
<el-upload
        ref="uploadRef"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false"
    >
        <el-button slot="trigger" type="primary">选取文件</el-button>

        <el-button type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件, 且不超过500kb</div>
    </el-upload>
</div>`,
                        data() {
                            return {
                                fileList: [
                                    {
                                        name: 'food.jpeg',
                                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                                    },
                                    {
                                        name: 'food2.jpeg',
                                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                                    }
                                ]
                            };
                        },
                        methods: {
                            submitUpload() {
                                this.$refs.uploadRef.submit();
                            },
                            handleRemove(file, fileList) {
                                console.log(file, fileList);
                            },
                            handlePreview(file) {
                                console.log(file);
                            }
                        }
                    }
                }
            ]
        };
    }
};
</script>
