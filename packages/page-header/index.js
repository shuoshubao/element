import PageHeader from './src/main.vue';

PageHeader.install = function (Vue) {
    Vue.component(PageHeader.name, PageHeader);
};

export default PageHeader;
