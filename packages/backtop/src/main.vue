<template>
    <transition name="el-fade-in">
        <div
            v-if="visible"
            :style="{
                right: styleRight,
                bottom: styleBottom
            }"
            class="el-backtop"
            @click.stop="handleClick"
        >
            <slot>
                <el-icon name="caret-top" />
            </slot>
        </div>
    </transition>
</template>

<script>
import { throttle } from 'lodash';

const cubic = value => value ** 3;
const easeInOutCubic = value => (value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2);

export default {
    name: 'ElBacktop',

    props: {
        visibilityHeight: {
            type: Number,
            default: 200
        },
        target: [String],
        right: {
            type: Number,
            default: 40
        },
        bottom: {
            type: Number,
            default: 40
        }
    },

    data() {
        return {
            el: null,
            container: null,
            visible: false
        };
    },

    computed: {
        styleBottom() {
            return `${this.bottom}px`;
        },
        styleRight() {
            return `${this.right}px`;
        }
    },

    mounted() {
        this.init();
        this.throttledScrollHandler = throttle(this.onScroll, 300);
        this.container.addEventListener('scroll', this.throttledScrollHandler);
    },

    beforeDestroy() {
        this.container.removeEventListener('scroll', this.throttledScrollHandler);
    },

    methods: {
        init() {
            this.container = document;
            this.el = document.documentElement;
            if (this.target) {
                this.el = document.querySelector(this.target);
                if (!this.el) {
                    throw new Error(`target is not existed: ${this.target}`);
                }
                this.container = this.el;
            }
        },
        onScroll() {
            const { scrollTop } = this.el;
            this.visible = scrollTop >= this.visibilityHeight;
        },
        handleClick(e) {
            this.scrollToTop();
            this.$emit('click', e);
        },
        scrollToTop() {
            const { el } = this;
            const beginTime = Date.now();
            const beginValue = el.scrollTop;
            const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16));
            const frameFunc = () => {
                const progress = (Date.now() - beginTime) / 500;
                if (progress < 1) {
                    el.scrollTop = beginValue * (1 - easeInOutCubic(progress));
                    rAF(frameFunc);
                } else {
                    el.scrollTop = 0;
                }
            };
            rAF(frameFunc);
        }
    }
};
</script>
