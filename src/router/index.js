import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

const notFound = () => import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue')
const Opinions = () => import(/* webpackChunkName: "opinionsView" */ '../views/OpinionsView.vue')
const OpinionsManage = () => import(/* webpackChunkName: "opinionsManageView" */ '../views/OpinionsManageView.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/opinions',
    name: 'opinions',
    component: Opinions
  },
  {
    path:'/opinions/manage',
    name: 'opinionsManage',
    component: OpinionsManage
  },
  {
    path: '*',
    name: 'notFound',
    component: notFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
