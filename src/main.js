// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource';
import VueLazyload from 'vue-lazyload';
import QRCode from 'qrcode'

import com from './assets/js/common' // 全局公共方法
Vue.prototype.com = com;


Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(QRCode)

/* 图片懒加载 */
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'http://www.xinzhimin.xyz/error.png',
    loading: 'http://www.xinzhimin.xyz/loading.png',
    attempt: 1
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})