import Timeline from './src/main.vue';

Timeline.install = function (Vue) {
    Vue.component(Timeline.name, Timeline);
};

export default Timeline;
