import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Dashboard from '@/views/Dashboard'
import Terms from '@/views/Terms'
import DashboardSites from '@/views/DashboardSites'
import ProductPage from '@/views/ProductPage'
import PrivacyPolicy from '@/views/PrivacyPolicy'
import firebase from 'firebase'

import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard-sites',
      name: 'dashboardSites',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DashboardSites,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/p/:id',
      name: 'productPage',
      component: ProductPage
    },
    {
      path: '/privacy-policy',
      name: 'privacyPolicy',
      component: PrivacyPolicy
    },
    {
      path: '/terms',
      name: 'terms',
      component: Terms
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('/')
  else next()
})

export default router
