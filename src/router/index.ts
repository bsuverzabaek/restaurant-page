import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/EN/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/JP',
    name: 'HomeJP',
    component: () => import('../views/JP/HomeJP.vue')
  },
  {
    path: '/specialties',
    name: 'Specialties',
    component: () => import('../views/EN/Specialties.vue')
  },
  {
    path: '/specialtiesJP',
    name: 'SpecialtiesJP',
    component: () => import('../views/JP/SpecialtiesJP.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/EN/Menu.vue')
  },
  {
    path: '/menuJP',
    name: 'MenuJP',
    component: () => import('../views/JP/MenuJP.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/EN/Contact.vue')
  },
  {
    path: '/contactJP',
    name: 'ContactJP',
    component: () => import('../views/JP/ContactJP.vue')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () => import('../views/EN/Jobs.vue')
  },
  {
    path: '/jobsJP',
    name: 'JobsJP',
    component: () => import('../views/JP/JobsJP.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
