import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/electronicos',
      name: 'electronicos',
      component: () => import('../views/ElectronicosView.vue')
    },
    {
      path: '/ropa',
      name: 'ropa',
      component: () => import('../views/RopaView.vue')
    },
    {
      path: '/joyeria',
      name: 'joyeria',
      component: () => import('../views/JoyeriaView.vue')
    },
    {
      path: '/producto/:id',
      name: 'detalles',
      component: () => import('../views/DetailsView.vue')
    },
  ]
})

export default router
