import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import List from '@/components/list/List.vue'
import Detail from '@/components/detail/Detail.vue'
import Share from '@/components/share/share.vue'
import Home1 from '@/components/home1/home1.vue'

Vue.use(Router)

export default new Router({
    mode: 'history', // 使用history模式
    routes: [{
        path: '/',
        name: 'Home',
        // component: Home
        component: Home1
    }, {
        path: '/home',
        name: 'home',
        component: Home
    }, {
        path: '/list',
        name: 'list',
        component: List
    }, {
        path: '/detail',
        name: 'detail',
        component: Detail
    }, {
        path: '/share',
        name: 'share',
        component: Share
    }, {
        path: '/home1',
        name: 'home1',
        component: Home1
    }]
})