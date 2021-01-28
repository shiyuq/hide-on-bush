import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 你输入的路由在这里会有对应的加载的 vue 文件，这里表示你网址里面输入 /about，加载 about.vue 文件
    // 你要测试的话这样写
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/aboutUs',
    name: 'AboutUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/navigationPages/AboutUs.vue')
  },
  {
    path: '/technologyInnovation',
    name: 'TechnologyInnovation',
    component: () => import('../views/navigationPages/TechnologyInnovation.vue')
  },
  {
    path: '/digitalLife',
    name: 'DigitalLife',
    component: () => import('../views/navigationPages/DigitalLife.vue')
  },
  {
    path: '/openPlatform',
    name: 'OpenPlatform',
    component: () => import('../views/navigationPages/OpenPlatform.vue')
  },
  {
    path: '/global',
    name: 'Global',
    component: () => import('../views/navigationPages/Global.vue')
  },
  {
    path: '/mediaResources',
    name: 'MediaResources',
    component: () => import('../views/navigationPages/MediaResources.vue')
  },
  {
    path: '/investorRelations',
    name: 'InvestorRelations',
    component: () => import('../views/navigationPages/InvestorRelations.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
