import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
// 全局样式
import './assets/common.scss'
import Modal from './plugins/modal'
Vue.use(Modal)

import WRequest from './plugins/WRequest'
Vue.use(WRequest)


//组件
import PixelSpinner from './views/Spinner/index'
Vue.use(PixelSpinner)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App />',
    components: { App }
})
