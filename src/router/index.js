import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import Booklist from '@/components/booklist/List.vue'
import Paintinglist from '@/components/paintinglist/List.vue'
import PaintingDetail from '@/components/paintingDetail/Detail.vue'
import DanceList from '@/components/danceList/List.vue'
import QuyiList from '@/components/quyiList/List.vue'
import BookDetail from '@/components/bookDetail/Detail.vue'
import DanceDetail from '@/components/danceDetail/Detail.vue'
import QuyiDetail from '@/components/quyiDetail/Detail.vue'
import Share from '../components/share/share.vue'
import test from '../components/share/test.vue'
import Home1 from '@/components/home1/home1.vue'
import ShareTip from '@/components/shareTip/ShareTip.vue'

Vue.use(Router)

export default new Router({
    mode: 'history', // 使用history模式
    base: '/vue/',
    routes: [{
        path: '/',
        name: 'Home',
        component: Home1
    }, {
        path: '/home1',
        name: '常熟市精品文化数字展厅',
        component: Home1
    }, {
        path: '/home',
        name: 'home',
        component: Home
    }, {
        path: '/bookList',
        name: '图书',
        component: Booklist
    }, {
        path: '/danceList',
        name: '舞蹈',
        component: DanceList
    }, {
        path: '/quyiList',
        name: '曲艺',
        component: QuyiList
    }, {
        path: '/paintinglist',
        name: '书画',
        component: Paintinglist
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
    }, {
        path: '/test',
        name: 'test',
        component: test
    }, {
        path: '/paintingDetail',
        name: 'paintingDetail',
        component: PaintingDetail
    }, {
        path: '/shareTip',
        name: 'shareTip',
        component: ShareTip
    }]
})