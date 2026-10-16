/* eslint-disable */
// 批量把 Element UI 文档 md 迁移成本地 demo 视图 SFC
// 用法: node demo/gen-demos.js
const fs = require('fs');
const path = require('path');

const SRC = '/Users/shuoshubao/Documents/workspace/fe-log-components/element';
const OUT = path.resolve(__dirname, 'views');

const cnMap = {
    layout: '布局', container: '布局容器', icon: '图标', button: '按钮', link: '文字链接',
    radio: '单选框', checkbox: '多选框', input: '输入框', 'input-number': '计数器',
    select: '选择器', cascader: '级联选择器', switch: '开关', slider: '滑块',
    'time-picker': '时间选择器', 'date-picker': '日期选择器', 'datetime-picker': '日期时间选择器',
    upload: '上传', rate: '评分', 'color-picker': '颜色选择器', transfer: '穿梭框',
    form: '表单', table: '表格', tag: '标签', progress: '进度条', tree: '树形控件',
    pagination: '分页', badge: '标记', avatar: '头像', skeleton: '骨架屏', empty: '空状态',
    descriptions: '描述列表', result: '结果', statistic: '统计数值', alert: '警告',
    loading: '加载', message: '消息提示', 'message-box': '弹框', notification: '通知',
    menu: '导航菜单', tabs: '标签页', breadcrumb: '面包屑', dropdown: '下拉菜单',
    steps: '步骤条', dialog: '对话框', tooltip: '文字提示', popover: '弹出框',
    popconfirm: '气泡确认框', card: '卡片', carousel: '走马灯', collapse: '折叠面板',
    timeline: '时间线', divider: '分割线', calendar: '日历', image: '图片',
    backtop: '回到顶部', infiniteScroll: '无限滚动', drawer: '抽屉'
};

const groups = [
    { title: '通用', children: ['icon', 'link', 'button'] },
    { title: '布局', children: ['layout', 'divider'] },
    { title: '数据录入', children: ['form', 'input', 'input-number', 'select', 'radio', 'checkbox', 'switch', 'cascader', 'slider', 'time-picker', 'date-picker', 'datetime-picker', 'upload', 'transfer', 'rate', 'color-picker'] },
    { title: '数据展示', children: ['table', 'card', 'tag', 'tabs', 'tree', 'empty', 'descriptions', 'timeline', 'statistic', 'badge', 'tooltip', 'popover', 'popconfirm', 'image', 'avatar', 'collapse'] },
    { title: '反馈', children: ['dialog', 'drawer', 'alert', 'message', 'message-box', 'notification', 'loading', 'skeleton', 'result', 'progress'] },
    { title: '导航', children: ['dropdown', 'steps', 'pagination', 'breadcrumb', 'menu'] },
    { title: '不常用', children: ['container', 'infiniteScroll', 'carousel', 'calendar', 'backtop'] }
];

function pascal(key) {
    return key
        .replace(/[-_]/g, ' ')
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .split(' ')
        .filter(Boolean)
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join('');
}

// 转义进 backtick 模板字符串
function esc(html) {
    return html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

// 提取 md 里所有 demo: 返回 [{ title, template, script, styles[] }]
function parseDemos(md) {
    const demos = [];
    const lines = md.split('\n');
    let lastHeading = '示例';
    // 定位所有 ```vue / ```html 代码块
    const fenceRe = /^```(vue|html)\s*$/;
    for (let i = 0; i < lines.length; i++) {
        const h = lines[i].match(/^#{2,4}\s+(.+?)\s*$/);
        if (h) {
            lastHeading = h[1].trim();
            continue;
        }
        if (fenceRe.test(lines[i].trim())) {
            const buf = [];
            let j = i + 1;
            for (; j < lines.length; j++) {
                if (lines[j].trim() === '```') break;
                buf.push(lines[j]);
            }
            const code = buf.join('\n');
            i = j;
            const tpl = (code.match(/<template>([\s\S]*?)<\/template>/) || [, ''])[1];
            const script = (code.match(/<script[^>]*>([\s\S]*?)<\/script>/) || [, ''])[1];
            const styles = (code.match(/<style[^>]*>[\s\S]*?<\/style>/g) || [])
                .map(s => s.replace(/<\/?style[^>]*>/g, ''));
            if (!tpl.trim() && !script.trim()) continue;
            demos.push({ title: lastHeading, template: tpl.trim(), script: script.trim(), styles });
        }
    }
    return demos;
}

// 把单个 demo 的 script 拆成 (hoist 模块代码, export default 对象体)
function splitScript(script) {
    const idx = script.indexOf('export default');
    if (idx === -1) return { pre: script, body: '' };
    let pre = script.slice(0, idx);
    pre = pre.split('\n').filter(l => !/^\s*import\s/.test(l)).join('\n').trim();
    const after = script.slice(idx + 'export default'.length);
    const open = after.indexOf('{');
    const close = after.lastIndexOf('}');
    const body = open === -1 ? '' : after.slice(open + 1, close).trim();
    return { pre, body };
}

function buildComp(demo) {
    const tpl = '`<div>\n' + esc(demo.template) + '\n</div>`';
    if (!demo.script) return '{ template: ' + tpl + ' }';
    const { pre, body } = splitScript(demo.script);
    const inner = body ? 'template: ' + tpl + ',\n' + body : 'template: ' + tpl;
    if (pre) {
        return '(function () {\n' + pre + '\nreturn {\n' + inner + '\n};\n})()';
    }
    return '{\n' + inner + '\n}';
}

function genView(key) {
    const file = path.join(SRC, key + '.md');
    if (!fs.existsSync(file)) return null;
    const md = fs.readFileSync(file, 'utf8');
    const demos = parseDemos(md);
    if (!demos.length) return null;
    const name = pascal(key) + 'View';
    const sections = demos
        .map(d => '{ title: ' + JSON.stringify(d.title) + ', comp: ' + buildComp(d) + ' }')
        .join(',\n');
    const styles = demos.flatMap(d => d.styles);
    const uniqStyles = [...new Set(styles)];
    const styleBlock = uniqStyles.length ? '\n<style>\n' + uniqStyles.join('\n') + '\n</style>\n' : '\n';
    // demo 脚本里出现 HTML 标签 => 含 JSX(或 VNode/HTML 字符串), 用 lang="jsx" 让 babel 处理
    const hasJsx = demos.some(d => /<\/?[A-Za-z][\w-]*/.test(d.script));
    const scriptOpen = hasJsx ? '<script lang="jsx">\n' : '<script>\n';
    const sfc =
        '<template>\n' +
        '    <div>\n' +
        '        <template v-for="(s, i) in sections">\n' +
        '            <el-divider :key="\'d\' + i" content-position="left">{{ s.title }}</el-divider>\n' +
        '            <component :key="\'c\' + i" :is="s.comp" />\n' +
        '        </template>\n' +
        '    </div>\n' +
        '</template>\n\n' +
        scriptOpen +
        'export default {\n' +
        '    name: ' + JSON.stringify(name) + ',\n' +
        '    data() {\n' +
        '        return {\n' +
        '            sections: [\n' + sections + '\n]\n' +
        '        };\n' +
        '    }\n' +
        '};\n' +
        '</script>\n' +
        styleBlock;
    fs.writeFileSync(path.join(OUT, name + '.vue'), sfc);
    return { key, name };
}

// 清空旧视图
fs.readdirSync(OUT).filter(f => f.endsWith('.vue')).forEach(f => fs.unlinkSync(path.join(OUT, f)));

const menu = [];
for (const g of groups) {
    const children = [];
    for (const key of g.children) {
        const r = genView(key);
        if (r) children.push({ key, name: r.name, label: pascal(key) + ' ' + (cnMap[key] || key) });
        else console.warn('skip (no md/demo):', key);
    }
    if (children.length) menu.push({ title: g.title, children });
}

fs.writeFileSync(path.join(__dirname, 'menu.js'), 'export default ' + JSON.stringify(menu, null, 4) + ';\n');
console.log('generated', menu.reduce((n, g) => n + g.children.length, 0), 'views');

