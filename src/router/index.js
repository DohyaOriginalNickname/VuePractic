import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Orders from '@/components/Users/Orders'
import NewAd from '@/components/Ads/NewAd'
import AdList from '@/components/Ads/AdList'
import Ad from '@/components/Ads/Ad'
import AuthGuard from './auth-guard'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/login',
    name: 'Login',
    component: Login,
  },
  {
    path:'/registration',
    name: 'Reg',
    component: Registration,
  },
  {
    path:'/orders',
    name: 'Orders',
    component: Orders,
    beforeEnter: AuthGuard
  },
  {
    path:'/new',
    name: 'NewAd',
    component: NewAd,
    beforeEnter: AuthGuard
  },
  {
    path:'/List',
    name: 'AdList',
    component: AdList,
    beforeEnter: AuthGuard
  },
  {
    path:'/ad/:id',
    props: true,
    name: 'Ad',
    component: Ad,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
