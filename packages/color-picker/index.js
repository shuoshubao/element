import ColorPicker from './src/main.vue';

ColorPicker.install = function (Vue) {
    Vue.component(ColorPicker.name, ColorPicker);
};

export default ColorPicker;
