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
    name: "TableView",
    data() {
        return {
            sections: [
{ title: "基础表格", comp: {
template: `<div>
<el-table :data="tableData">
        <el-table-column label="日期" prop="date" width="180" />
        <el-table-column label="姓名" prop="name" width="180" />
        <el-table-column label="地址" prop="address" />
    </el-table>
</div>`,
data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ]
        };
    }
} },
{ title: "带斑马纹表格", comp: {
template: `<div>
<el-table :data="tableData" stripe>
        <el-table-column label="日期" prop="date" width="180" />
        <el-table-column label="姓名" prop="name" width="180" />
        <el-table-column label="地址" prop="address" />
    </el-table>
</div>`,
data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ]
        };
    }
} },
{ title: "带边框表格", comp: {
template: `<div>
<el-table :data="tableData" border>
        <el-table-column label="日期" prop="date" width="180" />
        <el-table-column label="姓名" prop="name" width="180" />
        <el-table-column label="地址" prop="address" />
    </el-table>
</div>`,
data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ]
        };
    }
} },
{ title: "带状态表格", comp: {
template: `<div>
<el-table :data="tableData" :row-class-name="tableRowClassName">
        <el-table-column label="日期" prop="date" width="180" />
        <el-table-column label="姓名" prop="name" width="180" />
        <el-table-column label="地址" prop="address" />
    </el-table>
</div>`,
methods: {
        tableRowClassName({ row, rowIndex }) {
            if (rowIndex === 1) {
                return 'warning-row';
            } else if (rowIndex === 3) {
                return 'success-row';
            }
            return '';
        }
    },
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }
            ]
        };
    }
} },
{ title: "固定表头", comp: {
template: `<div>
<el-table :data="tableData" height="250" border>
        <el-table-column label="日期" prop="date" width="180" />
        <el-table-column label="姓名" prop="name" width="180" />
        <el-table-column label="地址" prop="address" />
    </el-table>
</div>`,
data() {
        return {
            tableData: [
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }
            ]
        };
    }
} },
{ title: "固定列", comp: {
template: `<div>
<el-table :data="tableData" border>
        <el-table-column label="日期" prop="date" width="150" fixed />
        <el-table-column label="姓名" prop="name" width="120" />
        <el-table-column label="省份" prop="province" width="120" />
        <el-table-column label="市区" prop="city" width="120" />
        <el-table-column label="地址" prop="address" width="300" />
        <el-table-column label="邮编" prop="zip" width="120" />
        <el-table-column label="操作" fixed="right" width="100">
            <template slot-scope="scope">
                <el-link @click="handleClick(scope.row)" type="primary">查看</el-link>
                <el-link type="primary">编辑</el-link>
</div>`,
methods: {
        handleClick(row) {
            console.log(row);
        }
    },

    data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333
                }
            ]
        };
    }
} },
{ title: "固定列和表头", comp: {
template: `<div>
<el-table :data="tableData" height="250">
        <el-table-column label="日期" prop="date" width="150" fixed />
        <el-table-column label="姓名" prop="name" width="120" />
        <el-table-column label="省份" prop="province" width="120" />
        <el-table-column label="市区" prop="city" width="120" />
        <el-table-column label="地址" prop="address" width="300" />
        <el-table-column label="邮编" prop="zip" width="120" />
    </el-table>
</div>`,
data() {
        return {
            tableData: [
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-08',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-06',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-07',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }
            ]
        };
    }
} },
{ title: "流体高度", comp: {
template: `<div>
<el-table :data="tableData" max-height="250">
        <el-table-column label="日期" prop="date" width="150" fixed />
        <el-table-column label="姓名" prop="name" width="120" />
        <el-table-column label="省份" prop="province" width="120" />
        <el-table-column label="市区" prop="city" width="120" />
        <el-table-column label="地址" prop="address" width="300" />
        <el-table-column label="邮编" prop="zip" width="120" />
        <el-table-column label="操作" fixed="right" width="120">
            <template slot-scope="scope">
                <el-link @click.native.prevent="deleteRow(scope.$index, tableData)" type="danger">移除</el-link>
</div>`,
methods: {
        deleteRow(index, rows) {
            rows.splice(index, 1);
        }
    },
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-08',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-06',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-07',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }
            ]
        };
    }
} },
{ title: "多级表头", comp: {
template: `<div>
<el-table :data="tableData">
        <el-table-column label="日期" prop="date" width="150" />
        <el-table-column label="配送信息">
            <el-table-column label="姓名" prop="name" width="120" />
            <el-table-column label="地址">
                <el-table-column label="省份" prop="province" width="120" />
                <el-table-column label="市区" prop="city" width="120" />
                <el-table-column label="地址" prop="address" width="300" />
                <el-table-column label="邮编" prop="zip" width="120" />
            </el-table-column>
        </el-table-column>
    </el-table>
</div>`,
data() {
        return {
            tableData: [
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-08',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-06',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                },
                {
                    date: '2016-05-07',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }
            ]
        };
    }
} },
{ title: "单选", comp: {
template: `<div>
<el-table ref="tableRef" :data="tableData" highlight-current-row @current-change="handleCurrentChange">
        <el-table-column type="index" width="50" />
        <el-table-column label="日期" prop="date" width="180" />
        <el-table-column label="姓名" prop="name" width="180" />
        <el-table-column label="地址" prop="address" />
    </el-table>

    <el-divider />

    <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
    <el-button @click="setCurrent()">取消选择</el-button>
</div>`,
data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ],
            currentRow: null
        };
    },

    methods: {
        setCurrent(row) {
            this.$refs.tableRef.setCurrentRow(row);
        },
        handleCurrentChange(val) {
            this.currentRow = val;
        }
    }
} },
{ title: "多选", comp: {
template: `<div>
<el-table ref="tableRef" :data="tableData" tooltip-effect="dark" @selection-change="handleChangeSelection">
        <el-table-column type="selection" width="55" />
        <el-table-column label="日期" width="120">
            <template slot-scope="scope">{{ scope.row.date }}
</div>`,
data() {
        return {
            tableData: [
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }
            ],
            selections: []
        };
    },

    methods: {
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.tableRef.toggleRowSelection(row);
                });
            } else {
                this.$refs.tableRef.clearSelection();
            }
        },
        handleChangeSelection(val) {
            this.selections = val;
        }
    }
} },
{ title: "排序", comp: {
template: `<div>
<el-table :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }">
        <el-table-column label="日期" prop="date" width="180" sortable />
        <el-table-column label="姓名" prop="name" width="180" sortable />
        <el-table-column label="地址" prop="address" :formatter="formatter" />
    </el-table>
</div>`,
data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ]
        };
    },
    methods: {
        formatter(row, column) {
            return row.address;
        }
    }
} },
{ title: "筛选", comp: {
template: `<div>
<el-button @click="resetDateFilter">清除日期过滤器</el-button>
    <el-button @click="clearFilter">清除所有过滤器</el-button>

    <el-table ref="tableRef" :data="tableData">
        <el-table-column
            label="日期"
            prop="date"
            width="180"
            sortable
            column-key="date"
            :filter-method="filterHandler"
            :filters="[
                { text: '2016-05-01', value: '2016-05-01' },
                { text: '2016-05-02', value: '2016-05-02' },
                { text: '2016-05-03', value: '2016-05-03' },
                { text: '2016-05-04', value: '2016-05-04' }
            ]"
        />
        <el-table-column label="姓名" prop="name" width="180" />
        <el-table-column label="地址" prop="address" :formatter="formatter" />
        <el-table-column
            label="标签"
            prop="tag"
            width="100"
            :filter-method="filterTag"
            filter-placement="bottom-end"
            :filters="[
                { text: '家', value: '家' },
                { text: '公司', value: '公司' }
            ]"
        >
            <template slot-scope="scope">
                <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" disable-transitions>{{ scope.row.tag }}</el-tag>
</div>`,
data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    tag: '家'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    tag: '公司'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    tag: '家'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                    tag: '公司'
                }
            ]
        };
    },
    methods: {
        resetDateFilter() {
            this.$refs.tableRef.clearFilter('date');
        },
        clearFilter() {
            this.$refs.tableRef.clearFilter();
        },
        formatter(row, column) {
            return row.address;
        },
        filterTag(value, row) {
            return row.tag === value;
        },
        filterHandler(value, row, column) {
            const property = column['property'];
            return row[property] === value;
        }
    }
} },
{ title: "自定义列模板", comp: {
template: `<div>
<el-table :data="tableData">
        <el-table-column label="日期" width="180">
            <template slot-scope="scope">
                <i class="el-icon-time" />
                <span style="margin-left: 5px">{{ scope.row.date }}</span>
</div>`,
data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ]
        };
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        }
    }
} },
{ title: "展开行", comp: {
template: `<div>
<el-table :data="tableData">
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-form>
                    <el-form-item label="商品名称">
                        {{ props.row.name }}
                    </el-form-item>
                    <el-form-item label="所属店铺">
                        {{ props.row.shop }}
                    </el-form-item>
                    <el-form-item label="商品 ID">
                        {{ props.row.id }}
                    </el-form-item>
                    <el-form-item label="店铺 ID">
                        {{ props.row.shopId }}
                    </el-form-item>
                    <el-form-item label="商品分类">
                        {{ props.row.category }}
                    </el-form-item>
                    <el-form-item label="店铺地址">
                        {{ props.row.address }}
                    </el-form-item>
                    <el-form-item label="商品描述">
                        {{ props.row.desc }}
                    </el-form-item>
                </el-form>
</div>`,
data() {
        return {
            tableData: [
                {
                    id: '12987122',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃, 小吃零食',
                    desc: '荷兰优质淡奶, 奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                },
                {
                    id: '12987123',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃, 小吃零食',
                    desc: '荷兰优质淡奶, 奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                },
                {
                    id: '12987125',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃, 小吃零食',
                    desc: '荷兰优质淡奶, 奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                },
                {
                    id: '12987126',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃, 小吃零食',
                    desc: '荷兰优质淡奶, 奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }
            ]
        };
    }
} },
{ title: "树形数据与懒加载", comp: {
template: `<div>
<el-table row-key="id" :data="tableData" default-expand-all :tree-props="{ children: 'children', hasChildren: 'hasChildren' }" border>
        <el-table-column label="日期" prop="date" width="180" sortable />
        <el-table-column label="姓名" prop="name" width="180" sortable />
        <el-table-column label="地址" prop="address" />
    </el-table>

    <el-divider />

    <el-table row-key="id" :data="tableData1" lazy :load="load" :tree-props="{ children: 'children', hasChildren: 'hasChildren' }" border>
        <el-table-column label="日期" prop="date" width="180" />
        <el-table-column label="姓名" prop="name" width="180" />
        <el-table-column label="地址" prop="address" />
    </el-table>
</div>`,
data() {
        return {
            tableData: [
                {
                    id: 1,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    id: 2,
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    id: 3,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    children: [
                        {
                            id: 31,
                            date: '2016-05-01',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1519 弄'
                        },
                        {
                            id: 32,
                            date: '2016-05-01',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1519 弄'
                        }
                    ]
                },
                {
                    id: 4,
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ],
            tableData1: [
                {
                    id: 1,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    id: 2,
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    id: 3,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    hasChildren: true
                },
                {
                    id: 4,
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ]
        };
    },
    methods: {
        load(tree, treeNode, resolve) {
            setTimeout(() => {
                resolve([
                    {
                        id: 31,
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    },
                    {
                        id: 32,
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }
                ]);
            }, 1000);
        }
    }
} },
{ title: "自定义表头", comp: {
template: `<div>
<el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))">
        <el-table-column label="Date" prop="date" />
        <el-table-column label="Name" prop="name" />
        <el-table-column align="right">
            <template slot="header" slot-scope="scope">
                <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
</div>`,
data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ],
            search: ''
        };
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        }
    }
} },
{ title: "表尾合计行", comp: {
template: `<div>
<el-table :data="tableData" show-summary border>
        <el-table-column label="ID" prop="id" width="180" />
        <el-table-column label="姓名" prop="name" />
        <el-table-column label="数值 1" prop="amount1" sortable />
        <el-table-column label="数值 2" prop="amount2" sortable />
        <el-table-column label="数值 3" prop="amount3" sortable />
    </el-table>

    <el-divider />

    <el-table :data="tableData" show-summary :summary-method="getSummaries" height="200" border>
        <el-table-column label="ID" prop="id" width="180" />
        <el-table-column label="姓名" prop="name" />
        <el-table-column label="数值 1（元）" prop="amount1" />
        <el-table-column label="数值 2（元）" prop="amount2" />
        <el-table-column label="数值 3（元）" prop="amount3" />
    </el-table>
</div>`,
data() {
        return {
            tableData: [
                {
                    id: '12987122',
                    name: '王小虎',
                    amount1: '234',
                    amount2: '3.2',
                    amount3: 10
                },
                {
                    id: '12987123',
                    name: '王小虎',
                    amount1: '165',
                    amount2: '4.43',
                    amount3: 12
                },
                {
                    id: '12987124',
                    name: '王小虎',
                    amount1: '324',
                    amount2: '1.9',
                    amount3: 9
                },
                {
                    id: '12987125',
                    name: '王小虎',
                    amount1: '621',
                    amount2: '2.2',
                    amount3: 17
                },
                {
                    id: '12987126',
                    name: '王小虎',
                    amount1: '539',
                    amount2: '4.1',
                    amount3: 15
                }
            ]
        };
    },
    methods: {
        getSummaries(param) {
            const { columns, data } = param;
            const sums = [];
            columns.forEach((column, index) => {
                if (index === 0) {
                    sums[index] = '总价';
                    return;
                }
                const values = data.map(item => Number(item[column.property]));
                if (!values.every(value => isNaN(value))) {
                    sums[index] = values.reduce((prev, curr) => {
                        const value = Number(curr);
                        if (!isNaN(value)) {
                            return prev + curr;
                        } else {
                            return prev;
                        }
                    }, 0);
                    sums[index] += ' 元';
                } else {
                    sums[index] = 'N/A';
                }
            });

            return sums;
        }
    }
} },
{ title: "合并行或列", comp: {
template: `<div>
<el-table :data="tableData" :span-method="arraySpanMethod" border>
        <el-table-column label="ID" prop="id" width="180" />
        <el-table-column label="姓名" prop="name" />
        <el-table-column label="数值 1" prop="amount1" sortable />
        <el-table-column label="数值 2" prop="amount2" sortable />
        <el-table-column label="数值 3" prop="amount3" sortable />
    </el-table>

    <el-divider />

    <el-table :data="tableData" :span-method="objectSpanMethod" border>
        <el-table-column label="ID" prop="id" width="180" />
        <el-table-column label="姓名" prop="name" />
        <el-table-column label="数值 1（元）" prop="amount1" />
        <el-table-column label="数值 2（元）" prop="amount2" />
        <el-table-column label="数值 3（元）" prop="amount3" />
    </el-table>
</div>`,
data() {
        return {
            tableData: [
                {
                    id: '12987122',
                    name: '王小虎',
                    amount1: '234',
                    amount2: '3.2',
                    amount3: 10
                },
                {
                    id: '12987123',
                    name: '王小虎',
                    amount1: '165',
                    amount2: '4.43',
                    amount3: 12
                },
                {
                    id: '12987124',
                    name: '王小虎',
                    amount1: '324',
                    amount2: '1.9',
                    amount3: 9
                },
                {
                    id: '12987125',
                    name: '王小虎',
                    amount1: '621',
                    amount2: '2.2',
                    amount3: 17
                },
                {
                    id: '12987126',
                    name: '王小虎',
                    amount1: '539',
                    amount2: '4.1',
                    amount3: 15
                }
            ]
        };
    },
    methods: {
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            if (rowIndex % 2 === 0) {
                if (columnIndex === 0) {
                    return [1, 2];
                } else if (columnIndex === 1) {
                    return [0, 0];
                }
            }
        },
        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                if (rowIndex % 2 === 0) {
                    return {
                        rowspan: 2,
                        colspan: 1
                    };
                } else {
                    return {
                        rowspan: 0,
                        colspan: 0
                    };
                }
            }
        }
    }
} },
{ title: "自定义索引", comp: {
template: `<div>
<el-table :data="tableData">
        <el-table-column type="index" :index="indexMethod" />
        <el-table-column label="日期" prop="date" width="180" />
        <el-table-column label="姓名" prop="name" width="180" />
        <el-table-column label="地址" prop="address" />
    </el-table>
</div>`,
data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    tag: '家'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: 200333,
                    tag: '公司'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: 200333,
                    tag: '家'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
                    tag: '公司'
                }
            ]
        };
    },
    methods: {
        indexMethod(index) {
            return index * 2;
        }
    }
} }
]
        };
    }
};
</script>

<style>

.el-table .warning-row {
    background: oldlace;
}

.el-table .success-row {
    background: #f0f9eb;
}

</style>
