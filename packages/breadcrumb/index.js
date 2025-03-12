import ElBreadcrumb from './src/breadcrumb.vue';

ElBreadcrumb.install = function (Vue) {
    Vue.component(ElBreadcrumb.name, ElBreadcrumb);
};

export default ElBreadcrumb;
