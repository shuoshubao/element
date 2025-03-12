/*
 * @Author: shuoshubao
 * @Date: 2025-03-12 10:35:42
 * @LastEditors: shuoshubao
 * @LastEditTime: 2025-03-12 11:36:32
 * @Description:
 */
import ElMenu from './src/menu.vue';

ElMenu.install = function (Vue) {
    Vue.component(ElMenu.name, ElMenu);
};

export default ElMenu;
