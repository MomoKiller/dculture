import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import List from '@/components/list/List.vue'
import Detail from '@/components/detail/Detail.vue'
import Share from '@/components/share/share.vue'

Vue.use(Router)

export default new Router({
    mode: 'history', // 使用history模式
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
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
    }]
})