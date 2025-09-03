import Vue from 'vue';
import App from './App.vue';

Vue.use(window.ELEMENT, { size: 'small' });

new Vue({
    el: '#app',
    render: h => h(App)
});
