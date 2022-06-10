import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

const notFound = () => import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue')
const Opinions = () => import(/* webpackChunkName: "opinionsView" */ '../views/OpinionsView.vue')
const OpinionsManage = () => import(/* webpackChunkName: "opinionsManageView" */ '../views/OpinionsManageView.vue')
const OpinionNew = () => import(/* webpackChunkName: "opinionsNew" */ '../views/OpinionNewView.vue')
const OpinionEdit = () => import(/* webpackChunkName: "opinionsEdit" */ '../views/OpinionEditView.vue')

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomeView, children: [{ path: '', name: 'opinionNew', component: OpinionNew }] },
  { path: '/opinions', name: 'opinions', component: Opinions },
  { path: '/opinions/manage', component: OpinionsManage, children: [{ path: '', name: 'opinionEdit', component: OpinionEdit }] },
  { path: '*', name: 'notFound', component: notFound },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: 'active'
})

export default router
