import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/specialties',
    name: 'Specialties',
    component: () => import('@/views/Specialties.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('@/views/Menu.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () => import('@/views/Jobs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router