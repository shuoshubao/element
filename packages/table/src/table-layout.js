import Vue from 'vue';
import scrollbarWidth from 'element-ui/src/utils/scrollbar-width';
import { parseHeight } from './util';

class TableLayout {
    constructor(options) {
        this.observers = [];
        this.table = null;
        this.store = null;
        this.columns = null;
        this.fit = true;
        this.showHeader = true;

        this.height = null;
        this.scrollX = false;
        this.scrollY = false;
        this.bodyWidth = null;
        this.fixedWidth = null;
        this.rightFixedWidth = null;
        this.tableHeight = null;
        this.headerHeight = 44; // Table Header Height
        this.appendHeight = 0; // Append Slot Height
        this.footerHeight = 44; // Table Footer Height
        this.viewportHeight = null; // Table Height - Scroll Bar Height
        this.bodyHeight = null; // Table Height - Table Header Height
        this.fixedBodyHeight = null; // Table Height - Table Header Height - Scroll Bar Height
        this.gutterWidth = scrollbarWidth();

        for (const name in options) {
            if (options.hasOwnProperty(name)) {
                this[name] = options[name];
            }
        }

        if (!this.table) {
            throw new Error('table is required for Table Layout');
        }
        if (!this.store) {
            throw new Error('store is required for Table Layout');
        }
    }

    updateScrollY() {
        const { height } = this;
        if (height === null) return false;
        const { bodyWrapper } = this.table;
        if (this.table.$el && bodyWrapper) {
            const body = bodyWrapper.querySelector('.el-table__body');
            const prevScrollY = this.scrollY;
            const scrollY = body.offsetHeight > this.bodyHeight;
            this.scrollY = scrollY;
            return prevScrollY !== scrollY;
        }
        return false;
    }

    setHeight(value, prop = 'height') {
        if (Vue.prototype.$isServer) return;
        const el = this.table.$el;
        value = parseHeight(value);
        this.height = value;

        if (!el && (value || value === 0)) return Vue.nextTick(() => this.setHeight(value, prop));

        if (typeof value === 'number') {
            el.style[prop] = `${value}px`;
            this.updateElsHeight();
        } else if (typeof value === 'string') {
            el.style[prop] = value;
            this.updateElsHeight();
        }
    }

    setMaxHeight(value) {
        this.setHeight(value, 'max-height');
    }

    getFlattenColumns() {
        const flattenColumns = [];
        const { columns } = this.table;
        columns.forEach(column => {
            if (column.isColumnGroup) {
                flattenColumns.push.apply(flattenColumns, column.columns);
            } else {
                flattenColumns.push(column);
            }
        });

        return flattenColumns;
    }

    updateElsHeight() {
        if (!this.table.$ready) return Vue.nextTick(() => this.updateElsHeight());
        const { headerWrapper, appendWrapper, footerWrapper } = this.table.$refs;
        this.appendHeight = appendWrapper ? appendWrapper.offsetHeight : 0;

        if (this.showHeader && !headerWrapper) return;

        // fix issue (https://github.com/ElemeFE/element/pull/16956)
        const headerTrElm = headerWrapper ? headerWrapper.querySelector('.el-table__header tr') : null;
        const noneHeader = this.headerDisplayNone(headerTrElm);

        const headerHeight = (this.headerHeight = !this.showHeader ? 0 : headerWrapper.offsetHeight);
        if (this.showHeader && !noneHeader && headerWrapper.offsetWidth > 0 && (this.table.columns || []).length > 0 && headerHeight < 2) {
            return Vue.nextTick(() => this.updateElsHeight());
        }
        const tableHeight = (this.tableHeight = this.table.$el.clientHeight);
        const footerHeight = (this.footerHeight = footerWrapper ? footerWrapper.offsetHeight : 0);
        if (this.height !== null) {
            this.bodyHeight = tableHeight - headerHeight - footerHeight + (footerWrapper ? 1 : 0);
        }
        this.fixedBodyHeight = this.scrollX ? this.bodyHeight - this.gutterWidth : this.bodyHeight;

        const noData = !(this.store.states.data && this.store.states.data.length);
        this.viewportHeight = this.scrollX ? tableHeight - (noData ? 0 : this.gutterWidth) : tableHeight;
        this.updateScrollY();
        this.notifyObservers('scrollable');
    }

    headerDisplayNone(elm) {
        if (!elm) return true;
        let headerChild = elm;
        while (headerChild.tagName !== 'DIV') {
            if (getComputedStyle(headerChild).display === 'none') {
                return true;
            }
            headerChild = headerChild.parentElement;
        }
        return false;
    }

    updateColumnsWidth() {
        if (Vue.prototype.$isServer) return;
        const { fit } = this;
        const bodyWidth = this.table.$el.clientWidth;
        let bodyMinWidth = 0;

        const flattenColumns = this.getFlattenColumns();
        const flexColumns = flattenColumns.filter(column => typeof column.width !== 'number');

        flattenColumns.forEach(column => {
            // Clean those columns whose width changed from flex to unflex
            if (typeof column.width === 'number' && column.realWidth) column.realWidth = null;
        });

        if (flexColumns.length > 0 && fit) {
            flattenColumns.forEach(column => {
                bodyMinWidth += column.width || column.minWidth || 80;
            });

            const scrollYWidth = this.scrollY ? this.gutterWidth : 0;

            if (bodyMinWidth <= bodyWidth - scrollYWidth) {
                // DON'T HAVE SCROLL BAR
                this.scrollX = false;

                const totalFlexWidth = bodyWidth - scrollYWidth - bodyMinWidth;

                if (flexColumns.length === 1) {
                    flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth;
                } else {
                    const allColumnsWidth = flexColumns.reduce((prev, column) => prev + (column.minWidth || 80), 0);
                    const flexWidthPerPixel = totalFlexWidth / allColumnsWidth;
                    let noneFirstWidth = 0;

                    flexColumns.forEach((column, index) => {
                        if (index === 0) return;
                        const flexWidth = Math.floor((column.minWidth || 80) * flexWidthPerPixel);
                        noneFirstWidth += flexWidth;
                        column.realWidth = (column.minWidth || 80) + flexWidth;
                    });

                    flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth - noneFirstWidth;
                }
            } else {
                // HAVE HORIZONTAL SCROLL BAR
                this.scrollX = true;
                flexColumns.forEach(column => {
                    column.realWidth = column.minWidth;
                });
            }

            this.bodyWidth = Math.max(bodyMinWidth, bodyWidth);
            this.table.resizeState.width = this.bodyWidth;
        } else {
            flattenColumns.forEach(column => {
                if (!column.width && !column.minWidth) {
                    column.realWidth = 80;
                } else {
                    column.realWidth = column.width || column.minWidth;
                }

                bodyMinWidth += column.realWidth;
            });
            this.scrollX = bodyMinWidth > bodyWidth;

            this.bodyWidth = bodyMinWidth;
        }

        const { fixedColumns } = this.store.states;

        if (fixedColumns.length > 0) {
            let fixedWidth = 0;
            fixedColumns.forEach(column => {
                fixedWidth += column.realWidth || column.width;
            });

            this.fixedWidth = fixedWidth;
        }

        const { rightFixedColumns } = this.store.states;
        if (rightFixedColumns.length > 0) {
            let rightFixedWidth = 0;
            rightFixedColumns.forEach(column => {
                rightFixedWidth += column.realWidth || column.width;
            });

            this.rightFixedWidth = rightFixedWidth;
        }

        this.notifyObservers('columns');
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(event) {
        const { observers } = this;
        observers.forEach(observer => {
            switch (event) {
                case 'columns':
                    observer.onColumnsChange(this);
                    break;
                case 'scrollable':
                    observer.onScrollableChange(this);
                    break;
                default:
                    throw new Error(`Table Layout don't have event ${event}.`);
            }
        });
    }
}

export default TableLayout;
