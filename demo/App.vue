<template>
    <el-container class="demo-app">
        <el-aside width="220px" class="demo-aside">
            <div style="padding: 10px">
                <el-select v-model="componentSize" style="width: 100%" @change="onSizeChange">
                    <el-option label="mini" value="mini" />
                    <el-option label="small" value="small" />
                    <el-option label="medium" value="medium" />
                    <el-option label="large" value="large" />
                </el-select>
            </div>
            <el-menu :default-active="current" @select="onSelect" :unique-opened="false" :default-openeds="menu.map(g => g.title)">
                <el-submenu v-for="g in menu" :key="g.title" :index="g.title">
                    <template slot="title">{{ g.title }}</template>
                    <el-menu-item v-for="item in g.children" :key="item.key" :index="item.key">
                        {{ item.label }}
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-main>
                <component v-if="currentComp" :is="currentComp" :key="current" />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import menu from './menu.js';

const modules = import.meta.glob('./views/*.vue', { eager: true });
const keyToComp = {};
const keyToLabel = {};
menu.forEach(g => {
    g.children.forEach(item => {
        const mod = modules['./views/' + item.name + '.vue'];
        if (mod) keyToComp[item.key] = mod.default;
        keyToLabel[item.key] = item.label;
    });
});

const firstKey = menu[0].children[0].key;

export default {
    name: 'App',
    data() {
        return {
            menu,
            current: firstKey,
            componentSize: localStorage.getItem('componentSize') || 'mini'
        };
    },
    computed: {
        currentComp() {
            return keyToComp[this.current];
        },
        currentLabel() {
            return keyToLabel[this.current] || '';
        }
    },
    created() {
        this.syncFromHash();
        window.addEventListener('hashchange', this.syncFromHash);
    },
    beforeDestroy() {
        window.removeEventListener('hashchange', this.syncFromHash);
    },
    methods: {
        syncFromHash() {
            const key = (window.location.hash || '').replace(/^#\/?/, '');
            if (key && keyToComp[key]) this.current = key;
        },
        onSelect(key) {
            window.location.hash = '/' + key;
            this.current = key;
        },
        onSizeChange(val) {
            localStorage.setItem('componentSize', val);
            window.location.reload();
        }
    }
};
</script>

<style>
.demo-app {
    height: 100vh;
}

.demo-aside {
    border-right: 1px solid #ebeef5;
    overflow-y: auto;
}

.demo-aside .el-menu {
    border-right: none;
}
</style>
