import SkeletonItem from '../skeleton/src/item.vue';

SkeletonItem.install = function (Vue) {
    Vue.component(SkeletonItem.name, SkeletonItem);
};

export default SkeletonItem;
