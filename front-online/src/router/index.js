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
    component: () => import('../views/navigationPages/AboutUs.vue'),
    children: [
      {
        path: 'introduction',
        name: 'AboutIntroduction',
        component: () => import('../views/navigationPages/Global.vue')
      }
    ]
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
  },
  {
    path: '/shiyuq',
    name: 'shiyuq',
    component: () => import('../views/resume/shiyuq.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
