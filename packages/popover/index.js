import Vue from 'vue';
import directive from './src/directive';
import Popover from './src/main.vue';

Vue.directive('popover', directive);

Popover.install = function (Vue) {
    Vue.directive('popover', directive);
    Vue.component(Popover.name, Popover);
};
Popover.directive = directive;

export default Popover;
