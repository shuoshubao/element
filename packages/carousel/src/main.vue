<template>
    <div :class="carouselClasses" @mouseenter.stop="handleMouseEnter" @mouseleave.stop="handleMouseLeave">
        <div class="el-carousel__container" :style="{ height: height }">
            <transition v-if="arrowDisplay" name="carousel-arrow-left">
                <button
                    v-show="(arrow === 'always' || hover) && (loop || activeIndex > 0)"
                    type="button"
                    class="el-carousel__arrow el-carousel__arrow--left"
                    @mouseenter="handleButtonEnter('left')"
                    @mouseleave="handleButtonLeave"
                    @click.stop="throttledArrowClick(activeIndex - 1)"
                >
                    <i class="el-icon-arrow-left" />
                </button>
            </transition>
            <transition v-if="arrowDisplay" name="carousel-arrow-right">
                <button
                    v-show="(arrow === 'always' || hover) && (loop || activeIndex < items.length - 1)"
                    type="button"
                    class="el-carousel__arrow el-carousel__arrow--right"
                    @mouseenter="handleButtonEnter('right')"
                    @mouseleave="handleButtonLeave"
                    @click.stop="throttledArrowClick(activeIndex + 1)"
                >
                    <i class="el-icon-arrow-right" />
                </button>
            </transition>
            <slot />
        </div>
        <ul v-if="indicatorPosition !== 'none'" :class="indicatorsClasses">
            <li
                v-for="(item, index) in items"
                :key="index"
                :class="['el-carousel__indicator', 'el-carousel__indicator--' + direction, { 'is-active': index === activeIndex }]"
                @mouseenter="throttledIndicatorHover(index)"
                @click.stop="handleIndicatorClick(index)"
            >
                <button class="el-carousel__button">
                    <span v-if="hasLabel">{{ item.label }}</span>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event';
import { throttle } from 'lodash';

export default {
    name: 'ElCarousel',

    props: {
        initialIndex: {
            type: Number,
            default: 0
        },
        height: String,
        trigger: {
            type: String,
            default: 'hover'
        },
        autoplay: {
            type: Boolean,
            default: true
        },
        interval: {
            type: Number,
            default: 3000
        },
        indicatorPosition: String,
        indicator: {
            type: Boolean,
            default: true
        },
        arrow: {
            type: String,
            default: 'hover'
        },
        type: String,
        loop: {
            type: Boolean,
            default: true
        },
        direction: {
            type: String,
            default: 'horizontal',
            validator(val) {
                return ['horizontal', 'vertical'].indexOf(val) !== -1;
            }
        }
    },

    data() {
        return {
            items: [],
            activeIndex: -1,
            containerWidth: 0,
            timer: null,
            hover: false
        };
    },

    computed: {
        arrowDisplay() {
            return this.arrow !== 'never' && this.direction !== 'vertical';
        },

        hasLabel() {
            return this.items.some(item => item.label.toString().length > 0);
        },

        carouselClasses() {
            const classes = ['el-carousel', `el-carousel--${this.direction}`];
            if (this.type === 'card') {
                classes.push('el-carousel--card');
            }
            return classes;
        },

        indicatorsClasses() {
            const classes = ['el-carousel__indicators', `el-carousel__indicators--${this.direction}`];
            if (this.hasLabel) {
                classes.push('el-carousel__indicators--labels');
            }
            if (this.indicatorPosition === 'outside' || this.type === 'card') {
                classes.push('el-carousel__indicators--outside');
            }
            return classes;
        }
    },

    watch: {
        items(val) {
            if (val.length > 0) this.setActiveItem(this.initialIndex);
        },

        activeIndex(val, oldVal) {
            this.resetItemPosition(oldVal);
            if (oldVal > -1) {
                this.$emit('change', val, oldVal);
            }
        },

        autoplay(val) {
            val ? this.startTimer() : this.pauseTimer();
        },

        loop() {
            this.setActiveItem(this.activeIndex);
        },

        interval() {
            this.pauseTimer();
            this.startTimer();
        }
    },

    created() {
        this.throttledArrowClick = throttle(
            index => {
                this.setActiveItem(index);
            },
            300,
            { trailing: false }
        );
        this.throttledIndicatorHover = throttle(index => {
            this.handleIndicatorHover(index);
        }, 300);
    },

    mounted() {
        this.updateItems();
        this.$nextTick(() => {
            addResizeListener(this.$el, this.resetItemPosition);
            if (this.initialIndex < this.items.length && this.initialIndex >= 0) {
                this.activeIndex = this.initialIndex;
            }
            this.startTimer();
        });
    },

    beforeDestroy() {
        if (this.$el) removeResizeListener(this.$el, this.resetItemPosition);
        this.pauseTimer();
    },

    methods: {
        handleMouseEnter() {
            this.hover = true;
            this.pauseTimer();
        },

        handleMouseLeave() {
            this.hover = false;
            this.startTimer();
        },

        itemInStage(item, index) {
            const { length } = this.items;
            if ((index === length - 1 && item.inStage && this.items[0].active) || (item.inStage && this.items[index + 1] && this.items[index + 1].active)) {
                return 'left';
            }
            if ((index === 0 && item.inStage && this.items[length - 1].active) || (item.inStage && this.items[index - 1] && this.items[index - 1].active)) {
                return 'right';
            }
            return false;
        },

        handleButtonEnter(arrow) {
            if (this.direction === 'vertical') return;
            this.items.forEach((item, index) => {
                if (arrow === this.itemInStage(item, index)) {
                    item.hover = true;
                }
            });
        },

        handleButtonLeave() {
            if (this.direction === 'vertical') return;
            this.items.forEach(item => {
                item.hover = false;
            });
        },

        updateItems() {
            this.items = this.$children.filter(child => child.$options.name === 'ElCarouselItem');
        },

        resetItemPosition(oldIndex) {
            this.items.forEach((item, index) => {
                item.translateItem(index, this.activeIndex, oldIndex);
            });
        },

        playSlides() {
            if (this.activeIndex < this.items.length - 1) {
                this.activeIndex++;
            } else if (this.loop) {
                this.activeIndex = 0;
            }
        },

        pauseTimer() {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
        },

        startTimer() {
            if (this.interval <= 0 || !this.autoplay || this.timer) return;
            this.timer = setInterval(this.playSlides, this.interval);
        },

        resetTimer() {
            this.pauseTimer();
            this.startTimer();
        },

        setActiveItem(index) {
            if (typeof index === 'string') {
                const filteredItems = this.items.filter(item => item.name === index);
                if (filteredItems.length > 0) {
                    index = this.items.indexOf(filteredItems[0]);
                }
            }
            index = Number(index);
            if (isNaN(index) || index !== Math.floor(index)) {
                console.warn('[Element Warn][Carousel]index must be an integer.');
                return;
            }
            const { length } = this.items;
            const oldIndex = this.activeIndex;
            if (index < 0) {
                this.activeIndex = this.loop ? length - 1 : 0;
            } else if (index >= length) {
                this.activeIndex = this.loop ? 0 : length - 1;
            } else {
                this.activeIndex = index;
            }
            if (oldIndex === this.activeIndex) {
                this.resetItemPosition(oldIndex);
            }
            this.resetTimer();
        },

        prev() {
            this.setActiveItem(this.activeIndex - 1);
        },

        next() {
            this.setActiveItem(this.activeIndex + 1);
        },

        handleIndicatorClick(index) {
            this.activeIndex = index;
        },

        handleIndicatorHover(index) {
            if (this.trigger === 'hover' && index !== this.activeIndex) {
                this.activeIndex = index;
            }
        }
    }
};
</script>
