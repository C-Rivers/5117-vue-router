import { createRouter, createWebHashHistory } from 'vue-router'
import HomeVue from '../views/HomeVue.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeVue
  },
  {
    path: '/testing/',
    name: 'testing',
    component: function () {
      return import('../views/TestingVue.vue')
    }
  },
  {
    path: '/testing/:id',
    name: 'testing',
    component: function () {
      return import('../views/TestingVue.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
