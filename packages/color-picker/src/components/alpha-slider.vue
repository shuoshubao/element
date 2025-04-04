<template>
    <div class="el-color-alpha-slider" :class="{ 'is-vertical': vertical }">
        <div
            ref="bar"
            class="el-color-alpha-slider__bar"
            :style="{
                background: background
            }"
            @click="handleClick"
        />
        <div
            ref="thumb"
            class="el-color-alpha-slider__thumb"
            :style="{
                left: thumbLeft + 'px',
                top: thumbTop + 'px'
            }"
        />
    </div>
</template>

<script>
import draggable from '../draggable';

export default {
    name: 'ElColorAlphaSlider',

    props: {
        color: {
            required: true
        },
        vertical: Boolean
    },

    data() {
        return {
            thumbLeft: 0,
            thumbTop: 0,
            background: null
        };
    },

    watch: {
        'color._alpha': function () {
            this.update();
        },

        'color.value': function () {
            this.update();
        }
    },

    mounted() {
        const { bar, thumb } = this.$refs;

        const dragConfig = {
            drag: event => {
                this.handleDrag(event);
            },
            end: event => {
                this.handleDrag(event);
            }
        };

        draggable(bar, dragConfig);
        draggable(thumb, dragConfig);
        this.update();
    },

    methods: {
        handleClick(event) {
            const { thumb } = this.$refs;
            const { target } = event;

            if (target !== thumb) {
                this.handleDrag(event);
            }
        },

        handleDrag(event) {
            const rect = this.$el.getBoundingClientRect();
            const { thumb } = this.$refs;

            if (!this.vertical) {
                let left = event.clientX - rect.left;
                left = Math.max(thumb.offsetWidth / 2, left);
                left = Math.min(left, rect.width - thumb.offsetWidth / 2);

                this.color.set('alpha', Math.round(((left - thumb.offsetWidth / 2) / (rect.width - thumb.offsetWidth)) * 100));
            } else {
                let top = event.clientY - rect.top;
                top = Math.max(thumb.offsetHeight / 2, top);
                top = Math.min(top, rect.height - thumb.offsetHeight / 2);

                this.color.set('alpha', Math.round(((top - thumb.offsetHeight / 2) / (rect.height - thumb.offsetHeight)) * 100));
            }
        },

        getThumbLeft() {
            if (this.vertical) return 0;
            const el = this.$el;
            const alpha = this.color._alpha;

            if (!el) return 0;
            const { thumb } = this.$refs;
            return Math.round((alpha * (el.offsetWidth - thumb.offsetWidth / 2)) / 100);
        },

        getThumbTop() {
            if (!this.vertical) return 0;
            const el = this.$el;
            const alpha = this.color._alpha;

            if (!el) return 0;
            const { thumb } = this.$refs;
            return Math.round((alpha * (el.offsetHeight - thumb.offsetHeight / 2)) / 100);
        },

        getBackground() {
            if (this.color && this.color.value) {
                const { r, g, b } = this.color.toRgb();
                return `linear-gradient(to right, rgba(${r}, ${g}, ${b}, 0) 0%, rgba(${r}, ${g}, ${b}, 1) 100%)`;
            }
            return null;
        },

        update() {
            this.thumbLeft = this.getThumbLeft();
            this.thumbTop = this.getThumbTop();
            this.background = this.getBackground();
        }
    }
};
</script>
