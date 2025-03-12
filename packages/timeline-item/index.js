import ElTimelineItem from '../timeline/src/item.vue';

ElTimelineItem.install = function (Vue) {
    Vue.component(ElTimelineItem.name, ElTimelineItem);
};

export default ElTimelineItem;
