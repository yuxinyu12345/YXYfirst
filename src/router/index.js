import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home/Home'
Vue.use(Router)
// const home = () => import('../views/home/Home')
const category = () => import('../views/category/Category')
const shopcart = () => import('../views/cart/Cart')
const profile = () => import('../views/profile/Profile')
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/shopcart',
    component:shopcart
  },
  {
    path: '/profile',
    component:profile
  }


]
export default new Router({
 routes
})
