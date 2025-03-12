/*
 * @Author: shuoshubao
 * @Date: 2025-03-12 10:35:42
 * @LastEditors: shuoshubao
 * @LastEditTime: 2025-03-12 11:36:49
 * @Description:
 */
import ElMenuItemGroup from '../menu/src/menu-item-group.vue';

ElMenuItemGroup.install = function (Vue) {
    Vue.component(ElMenuItemGroup.name, ElMenuItemGroup);
};

export default ElMenuItemGroup;
