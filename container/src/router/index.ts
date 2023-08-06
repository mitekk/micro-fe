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
      path: '/vue-app',
      name: 'vue',
      component: () => import('vue_app/App')
    },
    {
      path: '/react-app',
      name: 'react',
      component: () => import('react_app/App')
    }
  ]
})

export default router
