// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Lazy-loaded components
const Dashboard = () => import('../views/Dashboard.vue')
const Forms = () => import('../views/Forms.vue')
const Analytics = () => import('../views/Analytics.vue')
const Settings = () => import('../views/Settings.vue')
const NotFound = () => import('../views/NotFound.vue')

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/forms',
    name: 'Forms',
    component: Forms
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: Analytics
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router