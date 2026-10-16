<template>
    <div>
        <template v-for="(s, i) in sections">
            <el-divider :key="'d' + i" content-position="left">{{ s.title }}</el-divider>
            <component :key="'c' + i" :is="s.comp" />
        </template>
    </div>
</template>

<script lang="jsx">
export default {
    name: "TransferView",
    data() {
        return {
            sections: [
{ title: "基础用法", comp: {
template: `<div>
<el-transfer v-model="value" :data="data" />
</div>`,
data() {
        const generateData = _ => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
                data.push({
                    key: i,
                    label: `备选项 ${i}`,
                    disabled: i % 4 === 0
                });
            }
            return data;
        };
        return {
            data: generateData(),
            value: [1, 4]
        };
    }
} },
{ title: "可搜索", comp: {
template: `<div>
<el-transfer v-model="value" :data="data" filterable :filter-method="filterMethod" filter-placeholder="请输入城市拼音" />
</div>`,
data() {
        const generateData = _ => {
            const data = [];
            const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
            const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
            cities.forEach((city, index) => {
                data.push({
                    label: city,
                    key: index,
                    pinyin: pinyin[index]
                });
            });
            return data;
        };
        return {
            data: generateData(),
            value: [],
            filterMethod(query, item) {
                return item.pinyin.indexOf(query) > -1;
            }
        };
    }
} },
{ title: "可自定义", comp: {
template: `<div>
<el-divider content-position="left">使用 render-content 自定义数据项</el-divider>

    <el-transfer
        v-model="value"
        :data="data"
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :render-content="renderFunc"
        :titles="['Source', 'Target']"
        :button-texts="['到左边', '到右边']"
        :format="{
            noChecked: '\${total}',
            hasChecked: '\${checked}/\${total}'
        }"
        @change="handleChange"
    >
        <el-button slot="left-footer">操作1</el-button>
        <el-button slot="right-footer">操作2</el-button>
    </el-transfer>

    <el-divider content-position="left">使用 scoped-slot 自定义数据项</el-divider>

    <el-transfer
        v-model="value4"
        :data="data"
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :titles="['Source', 'Target']"
        :button-texts="['到左边', '到右边']"
        :format="{
            noChecked: '\${total}',
            hasChecked: '\${checked}/\${total}'
        }"
        @change="handleChange"
    >
        <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
        <el-button slot="left-footer">操作1</el-button>
        <el-button slot="right-footer">操作2</el-button>
    </el-transfer>
</div>`,
data() {
        const generateData = _ => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
                data.push({
                    key: i,
                    label: `备选项 ${i}`,
                    disabled: i % 4 === 0
                });
            }
            return data;
        };
        return {
            data: generateData(),
            value: [1],
            value4: [1],
            renderFunc(h, option) {
                return (
                    <span>
                        {option.key} - {option.label}
                    </span>
                );
            }
        };
    },

    methods: {
        handleChange(value, direction, movedKeys) {
            console.log(value, direction, movedKeys);
        }
    }
} },
{ title: "数据项属性别名", comp: {
template: `<div>
<el-transfer
        v-model="value"
        :data="data"
        :props="{
            key: 'value',
            label: 'desc'
        }"
    />
</div>`,
data() {
        const generateData = _ => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
                data.push({
                    value: i,
                    desc: `备选项 ${i}`,
                    disabled: i % 4 === 0
                });
            }
            return data;
        };
        return {
            data: generateData(),
            value: []
        };
    }
} }
]
        };
    }
};
</script>

