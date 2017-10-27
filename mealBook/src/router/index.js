import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import leftNav from '@/components/common/leftNav'
import sys from '@/components/page/sys'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sys',
      component: sys
    }
  ]
})
