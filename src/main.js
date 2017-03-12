// polyfill
import 'babel-polyfill';

import Vue from 'vue';
import App from './App';
import store from './store';

Vue.config.devtools = true;

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    store
});
