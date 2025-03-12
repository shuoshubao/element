import Descriptions from './src/index';

Descriptions.install = function install(Vue) {
    Vue.component(Descriptions.name, Descriptions);
};

export default Descriptions;
