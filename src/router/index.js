import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'
import SubcategoryView from '../views/SubcategoryView.vue'

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
      path: '/ropa',
      name: 'ropa',
      component: () => import('../views/RopaView.vue')
    },
    {
      path: '/producto/:id',
      name: 'detalles',
      component: () => import('../views/DetailsView.vue')
    },
    {
      path: '/categoria/:name',
      name: 'categoria',
      component: CategoryView
    },
    {
      path: '/subcategoria/:category/:name',
      name: 'subcategoria',
      component: SubcategoryView
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/CreateView.vue')
    },
    {
      path: '/terminos',
      name: 'terminos',
      component: () => import('../views/TerminosView.vue')
    },
    {
      path: '/devoluciones',
      name: 'devoluciones',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/entrega',
      name: 'entrega',
      component: () => import('../views/EntregaView.vue')
    },
  ]
})

export default router
