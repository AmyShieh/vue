import Vue from 'vue'
import Router from 'vue-router'
import defaultCon from '@/components/defaultCon'
import performance from '@/components/page/performance'
import monitor from '@/components/page/monitor'
import systemTool from '@/components/page/systemTool'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultCon',
      // components: {
      //   default:performance
      // },
      redirect:'/performance'
    },{
      path:'/performance',
      name:'performance',
      component:performance
    },{
      path:'/monitor',
      name:'monitor',
      component:monitor
    },{
      path:'/systemTool',
      name:'systemTool',
      component:systemTool
    },
  ]
})
