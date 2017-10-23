import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Hi1 from '@/components/test1'
import Hi2 from '@/components/test2'
import params from '@/components/params'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default:Hello,
        t1:Hi1,
        t2:Hi2,
        // t3:params
      }
    },{
      path: '/Hi',
      alias:'/amy',
      components: {
        default:Hello,
        t1:Hi2,
        t2:Hi1
      }
    },{
      path:'/params/:newsId(\\d+)/:newTitle',
      // component:params
      components:{
        default:Hello,
        t3:params
      },
      beforeEnter:(to,from,next)=>{
        console.log("我进入了params模板");
        console.log(to);
        console.log(from);
        next();
        // next(false);
      }
    },{
      path:'/goback',
      redirect:'/'
    },{
      path:'/goNews/:newsId(\\d+)/:newTitle',
      redirect:'/params/:newsId(\\d+)/:newTitle'
    }

  ]
})
