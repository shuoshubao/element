import ElTableColumn from '../table/src/table-column';

ElTableColumn.install = function (Vue) {
    Vue.component(ElTableColumn.name, ElTableColumn);
};

export default ElTableColumn;
