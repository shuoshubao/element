/*
 * @Author: shuoshubao
 * @Date: 2025-03-12 10:35:42
 * @LastEditors: shuoshubao
 * @LastEditTime: 2025-03-12 11:36:41
 * @Description:
 */
import ElMenuItem from '../menu/src/menu-item.vue';

ElMenuItem.install = function (Vue) {
    Vue.component(ElMenuItem.name, ElMenuItem);
};

export default ElMenuItem;
