/*
 * @Author: shuoshubao
 * @Date: 2025-03-12 10:35:42
 * @LastEditors: shuoshubao
 * @LastEditTime: 2025-03-12 11:36:55
 * @Description:
 */
import ElSubmenu from '../menu/src/submenu.vue';

ElSubmenu.install = function (Vue) {
    Vue.component(ElSubmenu.name, ElSubmenu);
};

export default ElSubmenu;
