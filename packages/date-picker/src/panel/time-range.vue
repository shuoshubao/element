<template>
    <transition name="el-zoom-in-top" @after-leave="$emit('dodestroy')">
        <div v-show="visible" class="el-time-range-picker el-picker-panel el-popper" :class="popperClass">
            <div class="el-time-range-picker__content">
                <div class="el-time-range-picker__cell">
                    <div class="el-time-range-picker__header">{{ t('el.datepicker.startTime') }}</div>
                    <div :class="{ 'has-seconds': showSeconds, 'is-arrow': arrowControl }" class="el-time-range-picker__body el-time-panel__content">
                        <TimeSpinner
                            ref="minSpinner"
                            :show-seconds="showSeconds"
                            :am-pm-mode="amPmMode"
                            :arrow-control="arrowControl"
                            :date="minDate"
                            @change="handleMinChange"
                            @select-range="setMinSelectionRange"
                        />
                    </div>
                </div>
                <div class="el-time-range-picker__cell">
                    <div class="el-time-range-picker__header">{{ t('el.datepicker.endTime') }}</div>
                    <div :class="{ 'has-seconds': showSeconds, 'is-arrow': arrowControl }" class="el-time-range-picker__body el-time-panel__content">
                        <TimeSpinner
                            ref="maxSpinner"
                            :show-seconds="showSeconds"
                            :am-pm-mode="amPmMode"
                            :arrow-control="arrowControl"
                            :date="maxDate"
                            @change="handleMaxChange"
                            @select-range="setMaxSelectionRange"
                        />
                    </div>
                </div>
            </div>
            <div class="el-time-panel__footer">
                <button type="button" class="el-time-panel__btn cancel" @click="handleCancel()">{{ t('el.datepicker.cancel') }}</button>
                <button type="button" class="el-time-panel__btn confirm" :disabled="btnDisabled" @click="handleConfirm()">
                    {{ t('el.datepicker.confirm') }}
                </button>
            </div>
        </div>
    </transition>
</template>

<script>
import Locale from 'element-ui/src/mixins/locale';
import { clearMilliseconds, limitTimeRange, modifyDate, parseDate, timeWithinRange } from 'element-ui/src/utils/date-util';
import TimeSpinner from '../basic/time-spinner.vue';

const MIN_TIME = parseDate('00:00:00', 'HH:mm:ss');
const MAX_TIME = parseDate('23:59:59', 'HH:mm:ss');

const minTimeOfDay = function (date) {
    return modifyDate(MIN_TIME, date.getFullYear(), date.getMonth(), date.getDate());
};

const maxTimeOfDay = function (date) {
    return modifyDate(MAX_TIME, date.getFullYear(), date.getMonth(), date.getDate());
};

// increase time by amount of milliseconds, but within the range of day
const advanceTime = function (date, amount) {
    return new Date(Math.min(date.getTime() + amount, maxTimeOfDay(date).getTime()));
};

export default {
    components: { TimeSpinner },
    mixins: [Locale],

    data() {
        return {
            popperClass: '',
            minDate: new Date(),
            maxDate: new Date(),
            value: [],
            oldValue: [new Date(), new Date()],
            defaultValue: null,
            format: 'HH:mm:ss',
            visible: false,
            selectionRange: [0, 2],
            arrowControl: false
        };
    },

    computed: {
        showSeconds() {
            return (this.format || '').indexOf('ss') !== -1;
        },

        offset() {
            return this.showSeconds ? 11 : 8;
        },

        spinner() {
            return this.selectionRange[0] < this.offset ? this.$refs.minSpinner : this.$refs.maxSpinner;
        },

        btnDisabled() {
            return this.minDate.getTime() > this.maxDate.getTime();
        },
        amPmMode() {
            if ((this.format || '').indexOf('A') !== -1) return 'A';
            if ((this.format || '').indexOf('a') !== -1) return 'a';
            return '';
        }
    },

    watch: {
        value(value) {
            if (Array.isArray(value)) {
                this.minDate = new Date(value[0]);
                this.maxDate = new Date(value[1]);
            } else {
                if (Array.isArray(this.defaultValue)) {
                    this.minDate = new Date(this.defaultValue[0]);
                    this.maxDate = new Date(this.defaultValue[1]);
                } else if (this.defaultValue) {
                    this.minDate = new Date(this.defaultValue);
                    this.maxDate = advanceTime(new Date(this.defaultValue), 60 * 60 * 1000);
                } else {
                    this.minDate = new Date();
                    this.maxDate = advanceTime(new Date(), 60 * 60 * 1000);
                }
            }
        },

        visible(val) {
            if (val) {
                this.oldValue = this.value;
                this.$nextTick(() => this.$refs.minSpinner.emitSelectRange('hours'));
            }
        }
    },

    methods: {
        handleClear() {
            this.$emit('pick', null);
        },

        handleCancel() {
            this.$emit('pick', this.oldValue);
        },

        handleMinChange(date) {
            this.minDate = clearMilliseconds(date);
            this.handleChange();
        },

        handleMaxChange(date) {
            this.maxDate = clearMilliseconds(date);
            this.handleChange();
        },

        handleChange() {
            if (this.isValidValue([this.minDate, this.maxDate])) {
                this.$refs.minSpinner.selectableRange = [[minTimeOfDay(this.minDate), this.maxDate]];
                this.$refs.maxSpinner.selectableRange = [[this.minDate, maxTimeOfDay(this.maxDate)]];
                this.$emit('pick', [this.minDate, this.maxDate], true);
            }
        },

        setMinSelectionRange(start, end) {
            this.$emit('select-range', start, end, 'min');
            this.selectionRange = [start, end];
        },

        setMaxSelectionRange(start, end) {
            this.$emit('select-range', start, end, 'max');
            this.selectionRange = [start + this.offset, end + this.offset];
        },

        handleConfirm(visible = false) {
            const minSelectableRange = this.$refs.minSpinner.selectableRange;
            const maxSelectableRange = this.$refs.maxSpinner.selectableRange;

            this.minDate = limitTimeRange(this.minDate, minSelectableRange, this.format);
            this.maxDate = limitTimeRange(this.maxDate, maxSelectableRange, this.format);

            this.$emit('pick', [this.minDate, this.maxDate], visible);
        },

        adjustSpinners() {
            this.$refs.minSpinner.adjustSpinners();
            this.$refs.maxSpinner.adjustSpinners();
        },

        changeSelectionRange(step) {
            const list = this.showSeconds ? [0, 3, 6, 11, 14, 17] : [0, 3, 8, 11];
            const mapping = ['hours', 'minutes'].concat(this.showSeconds ? ['seconds'] : []);
            const index = list.indexOf(this.selectionRange[0]);
            const next = (index + step + list.length) % list.length;
            const half = list.length / 2;
            if (next < half) {
                this.$refs.minSpinner.emitSelectRange(mapping[next]);
            } else {
                this.$refs.maxSpinner.emitSelectRange(mapping[next - half]);
            }
        },

        isValidValue(date) {
            return (
                Array.isArray(date) &&
                timeWithinRange(this.minDate, this.$refs.minSpinner.selectableRange) &&
                timeWithinRange(this.maxDate, this.$refs.maxSpinner.selectableRange)
            );
        },

        handleKeydown(event) {
            const { keyCode } = event;
            const mapping = { 38: -1, 40: 1, 37: -1, 39: 1 };

            // Left or Right
            if (keyCode === 37 || keyCode === 39) {
                const step = mapping[keyCode];
                this.changeSelectionRange(step);
                event.preventDefault();
                return;
            }

            // Up or Down
            if (keyCode === 38 || keyCode === 40) {
                const step = mapping[keyCode];
                this.spinner.scrollDown(step);
                event.preventDefault();
            }
        }
    }
};
</script>
