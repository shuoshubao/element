import InfiniteScroll from './src/main.js';

InfiniteScroll.install = function (Vue) {
    Vue.directive(InfiniteScroll.name, InfiniteScroll);
};

export default InfiniteScroll;
