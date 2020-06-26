import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import Booklist from '@/components/booklist/List.vue'
import DanceList from '@/components/danceList/List.vue'
import QuyiList from '@/components/quyiList/List.vue'
import BookDetail from '@/components/bookDetail/Detail.vue'
import DanceDetail from '@/components/danceDetail/Detail.vue'
import QuyiDetail from '@/components/quyiDetail/Detail.vue'
import Share from '../components/share/share.vue'
import Home1 from '@/components/home1/home1.vue'

Vue.use(Router)

export default new Router({
    mode: 'history', // 使用history模式
    routes: [{
        path: '/',
        name: 'Home',
        component: Home1
    }, {
        path: '/home1',
        name: 'home1',
        component: Home1
    }, {
        path: '/home',
        name: 'home',
        component: Home
    }, {
        path: '/bookList',
        name: 'bookList',
        component: Booklist
    }, {
        path: '/danceList',
        name: 'danceList',
        component: DanceList
    }, {
        path: '/quyiList',
        name: 'quyiList',
        component: QuyiList
    }, {
        path: '/bookDetail',
        name: 'bookDetail',
        component: BookDetail
    }, {
        path: '/danceDetail',
        name: 'danceDetail',
        component: DanceDetail
    }, {
        path: '/quyiDetail',
        name: 'quyiDetail',
        component: QuyiDetail
    }, {
        path: '/share',
        name: 'share',
        component: Share
    }]
})