import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('../pages/home.vue')
const about = () => import('../pages/about.vue')
Vue.use(Router)

const router = new Router({
  routes: [
    {
        path:'/',
        name:'home',
        component:home
    },
    {
        path:'/about',
        name:'about',
        component:about  
    }
  ]
})


export default router
