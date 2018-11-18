import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/page/LandingPage'
import HomePage from '@/page/home/HomePage'
import HomeChildPage from '@/page/home/HomeChildPage'

import ContactPage from '@/page/contact/ContactPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: LandingPage,
      children: [
        {
          path: 'home',
          component: HomePage,
        },
        {
          path: 'home/child',
          component: HomeChildPage
        },
        {
          path: 'contact',
          component: ContactPage
        }
      ]
    }
  ]
})
