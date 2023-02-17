import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import(/* webpackChunkName: "pedidos" */ '../views/Catalog.vue')
  },
  {
    path: '/customize',
    name: 'Customize',
    component: () => import(/* webpackChunkName: "pedidos" */ '../views/Customize.vue')
  },
  {
    path: '/flags',
    name: 'Flags',
    component: () => import(/* webpackChunkName: "pedidos" */ '../views/Flags.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
