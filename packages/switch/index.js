import Switch from './src/component.vue';

Switch.install = function (Vue) {
    Vue.component(Switch.name, Switch);
};

export default Switch;
