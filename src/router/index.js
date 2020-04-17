import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',    // 使用history模式
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
