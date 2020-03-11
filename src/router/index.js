import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import login from '@/page/login'

Vue.use(Router)

const router =new Router({
  mode:'history',//默认为hash
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{
        auth:true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
router.beforeEach(function(to, from, next){
  if (to.meta.auth) {
    // 需要登录
    const token = localStorage.getItem("token");
    if (token) {
      next();
    } else {
      next({
        path: "/login",
        query: { redirect: to.path }
      });
    }
  } else { // 不需要登录验证
    next()
  }

})
export default router;