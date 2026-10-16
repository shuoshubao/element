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
    name: "FormView",
    data() {
        return {
            sections: [
{ title: "典型表单", comp: {
template: `<div>
<el-form :model="formModel" label-width="80px">
        <el-form-item label="活动名称">
            <el-input v-model="formModel.name" />
        </el-form-item>
        <el-form-item label="活动区域">
            <el-select v-model="formModel.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai" />
                <el-option label="区域二" value="beijing" />
            </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
            <el-date-picker v-model="formModel.date1" type="date" placeholder="选择日期" style="width: 200px" />
            <span>-</span>
            <el-time-picker v-model="formModel.date2" placeholder="选择时间" style="width: 200px" />
        </el-form-item>
        <el-form-item label="即时配送">
            <el-switch v-model="formModel.delivery" />
        </el-form-item>
        <el-form-item label="活动性质">
            <el-checkbox-group v-model="formModel.type">
                <el-checkbox label="美食/餐厅线上活动" name="type" />
                <el-checkbox label="地推活动" name="type" />
                <el-checkbox label="线下主题活动" name="type" />
                <el-checkbox label="单纯品牌曝光" name="type" />
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
            <el-radio-group v-model="formModel.resource">
                <el-radio label="线上品牌商赞助" />
                <el-radio label="线下场地免费" />
            </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
            <el-input v-model="formModel.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="handleSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</div>`,
data() {
        return {
            formModel: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        };
    },
    methods: {
        handleSubmit() {
            console.log(this.formModel);
        }
    }
} },
{ title: "行内表单", comp: {
template: `<div>
<el-form :model="formModel" inline>
        <el-form-item label="审批人">
            <el-input v-model="formModel.user" placeholder="审批人" />
        </el-form-item>
        <el-form-item label="活动区域">
            <el-select v-model="formModel.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai" />
                <el-option label="区域二" value="beijing" />
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="handleSubmit">查询</el-button>
        </el-form-item>
    </el-form>
</div>`,
data() {
        return {
            formModel: {
                user: '',
                region: ''
            }
        };
    },
    methods: {
        handleSubmit() {
            console.log(this.formModel);
        }
    }
} },
{ title: "对齐方式", comp: {
template: `<div>
<el-radio-group v-model="labelPosition">
        <el-radio-button label="left">左对齐</el-radio-button>
        <el-radio-button label="right">右对齐</el-radio-button>
        <el-radio-button label="top">顶部对齐</el-radio-button>
    </el-radio-group>

    <el-divider />

    <el-form :model="formModel" label-width="80px" :label-position="labelPosition">
        <el-form-item label="名称">
            <el-input v-model="formModel.name" />
        </el-form-item>
        <el-form-item label="活动区域">
            <el-input v-model="formModel.region" />
        </el-form-item>
        <el-form-item label="活动形式">
            <el-input v-model="formModel.type" />
        </el-form-item>
    </el-form>
</div>`,
data() {
        return {
            labelPosition: 'right',
            formModel: {
                name: '',
                region: '',
                type: ''
            }
        };
    }
} },
{ title: "表单验证", comp: {
template: `<div>
<el-form ref="formRef" :model="formModel" :rules="rules" label-width="100px">
        <el-form-item label="活动名称" prop="name">
            <el-input v-model="formModel.name" />
        </el-form-item>
        <el-form-item label="活动区域" prop="region">
            <el-select v-model="formModel.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai" />
                <el-option label="区域二" value="beijing" />
            </el-select>
        </el-form-item>
        <el-form-item label="活动时间" required>
            <el-form-item prop="date1">
                <el-date-picker v-model="formModel.date1" type="date" placeholder="选择日期" style="width: 200px" />
            </el-form-item>
            <span>-</span>
            <el-form-item prop="date2">
                <el-time-picker v-model="formModel.date2" placeholder="选择时间" style="width: 200px" />
            </el-form-item>
        </el-form-item>
        <el-form-item label="即时配送" prop="delivery">
            <el-switch v-model="formModel.delivery" />
        </el-form-item>
        <el-form-item label="活动性质" prop="type">
            <el-checkbox-group v-model="formModel.type">
                <el-checkbox label="美食/餐厅线上活动" name="type" />
                <el-checkbox label="地推活动" name="type" />
                <el-checkbox label="线下主题活动" name="type" />
                <el-checkbox label="单纯品牌曝光" name="type" />
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源" prop="resource">
            <el-radio-group v-model="formModel.resource">
                <el-radio label="线上品牌商赞助" />
                <el-radio label="线下场地免费" />
            </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式" prop="desc">
            <el-input v-model="formModel.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="handleSubmit">立即创建</el-button>
            <el-button @click="handleReset">重置</el-button>
        </el-form-item>
    </el-form>
</div>`,
data() {
        return {
            formModel: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
                date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
                date2: [{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }],
                type: [{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }],
                resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
                desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
            }
        };
    },
    methods: {
        handleSubmit() {
            this.$refs.formRef.validate(valid => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!');
                }
            });
        },
        handleReset() {
            this.$refs.formRef.resetFields();
        }
    }
} },
{ title: "自定义校验规则", comp: {
template: `<div>
<el-form ref="formRef" :model="formModel" :rules="rules" label-width="100px" status-icon>
        <el-form-item label="密码" prop="pass">
            <el-input v-model="formModel.pass" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
            <el-input v-model="formModel.checkPass" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="年龄" prop="age">
            <el-input v-model.number="formModel.age" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="handleSubmit">提交</el-button>
            <el-button @click="handleReset">重置</el-button>
        </el-form-item>
    </el-form>
</div>`,
data() {
        const checkAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('年龄不能为空'));
            }
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error('请输入数字值'));
                } else if (value < 18) {
                    callback(new Error('必须年满18岁'));
                } else {
                    callback();
                }
            }, 1000);
        };
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.formModel.checkPass !== '') {
                    this.$refs.formRef.validateField('checkPass');
                }
                callback();
            }
        };
        const validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.formModel.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            formModel: {
                pass: '',
                checkPass: '',
                age: ''
            },
            rules: {
                pass: [{ validator: validatePass, trigger: 'blur' }],
                checkPass: [{ validator: validatePass2, trigger: 'blur' }],
                age: [{ validator: checkAge, trigger: 'blur' }]
            }
        };
    },
    methods: {
        handleSubmit() {
            this.$refs.formRef.validate(valid => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                }
            });
        },
        handleReset() {
            this.$refs.formRef.resetFields();
        }
    }
} },
{ title: "动态增减表单项", comp: {
template: `<div>
<el-form ref="formRef" :model="formModel" label-width="100px">
        <el-form-item
            label="邮箱"
            prop="email"
            :rules="[
                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ]"
        >
            <el-input v-model="formModel.email" style="width: 300px" />
        </el-form-item>
        <el-form-item
            v-for="(item, index) in formModel.domains"
            :key="item.key"
            :label="['域名', index + 1].join(' ')"
            :prop="['domains', index, 'value'].join('.')"
            :rules="{
                required: true,
                message: '域名不能为空',
                trigger: 'blur'
            }"
        >
            <el-input v-model="item.value" style="width: 300px" />
            <el-link type="danger" icon="el-icon-delete" :underline="false" @click.prevent="handleRemoveDomain(item)" />
        </el-form-item>
        <el-form-item>
            <el-button @click="handleAddDomain">新增域名</el-button>
            <el-button type="primary" @click="handleSubmit">提交</el-button>
            <el-button @click="handleReset">重置</el-button>
        </el-form-item>
    </el-form>
</div>`,
data() {
        return {
            formModel: {
                domains: [
                    {
                        value: ''
                    }
                ],
                email: ''
            }
        };
    },
    methods: {
        handleSubmit() {
            this.$refs.formRef.validate(valid => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                }
            });
        },
        handleReset() {
            this.$refs.formRef.resetFields();
        },
        handleRemoveDomain(item) {
            const index = this.formModel.domains.indexOf(item);

            if (index !== -1) {
                this.formModel.domains.splice(index, 1);
            }
        },
        handleAddDomain() {
            this.formModel.domains.push({
                value: '',
                key: Date.now()
            });
        }
    }
} },
{ title: "数字类型验证", comp: {
template: `<div>
<el-form ref="formRef" :model="formModel" label-width="100px">
        <el-form-item
            label="年龄"
            prop="age"
            :rules="[
                { required: true, message: '年龄不能为空' },
                { type: 'number', message: '年龄必须为数字值' }
            ]"
        >
            <el-input v-model.number="formModel.age" autocomplete="off" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="handleSubmit">提交</el-button>
            <el-button @click="handleReset">重置</el-button>
        </el-form-item>
    </el-form>
</div>`,
data() {
        return {
            formModel: {
                age: ''
            }
        };
    },
    methods: {
        handleSubmit() {
            this.$refs.formRef.validate(valid => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        handleReset() {
            this.$refs.formRef.resetFields();
        }
    }
} },
{ title: "表单内组件尺寸控制", comp: {
template: `<div>
<el-form :model="formModel" label-width="80px" size="mini">
        <el-form-item label="活动名称">
            <el-input v-model="formModel.name" />
        </el-form-item>
        <el-form-item label="活动区域">
            <el-select v-model="formModel.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai" />
                <el-option label="区域二" value="beijing" />
            </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
            <el-date-picker v-model="formModel.date1" type="date" placeholder="选择日期" style="width: 200px" />
            <span>-</span>
            <el-time-picker v-model="formModel.date2" placeholder="选择时间" style="width: 200px" />
        </el-form-item>
        <el-form-item label="活动性质">
            <el-checkbox-group v-model="formModel.type">
                <el-checkbox-button label="美食/餐厅线上活动" name="type" />
                <el-checkbox-button label="地推活动" name="type" />
                <el-checkbox-button label="线下主题活动" name="type" />
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
            <el-radio-group v-model="formModel.resource" size="medium">
                <el-radio border label="线上品牌商赞助" />
                <el-radio border label="线下场地免费" />
            </el-radio-group>
        </el-form-item>
        <el-form-item size="large">
            <el-button type="primary" @click="handleSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</div>`,
data() {
        return {
            formModel: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        };
    },
    methods: {
        handleSubmit() {
            console.log('submit!');
        }
    }
} }
]
        };
    }
};
</script>

