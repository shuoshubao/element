import Vue from 'vue';
import App from './App.vue';
import './logs.css';

Vue.use(window.ELEMENT, { size: 'mini' });

new Vue({
    el: '#app',
    render: h => h(App)
});
