import Pagination from './src/pagination';

Pagination.install = function (Vue) {
    Vue.component(Pagination.name, Pagination);
};

export default Pagination;
