import DateRangePanel from '../panel/date-range.vue';
import DatePanel from '../panel/date.vue';
import MonthRangePanel from '../panel/month-range.vue';
import Picker from '../picker.vue';

const getPanel = function (type) {
    if (type === 'daterange' || type === 'datetimerange') {
        return DateRangePanel;
    }
    if (type === 'monthrange') {
        return MonthRangePanel;
    }
    return DatePanel;
};

export default {
    mixins: [Picker],

    name: 'ElDatePicker',

    props: {
        type: {
            type: String,
            default: 'date'
        },
        timeArrowControl: Boolean
    },

    watch: {
        type(type) {
            if (this.picker) {
                this.unmountPicker();
                this.panel = getPanel(type);
                this.mountPicker();
            } else {
                this.panel = getPanel(type);
            }
        }
    },

    created() {
        this.panel = getPanel(this.type);
    }
};
