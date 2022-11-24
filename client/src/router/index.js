import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/display',
        name: 'display',
        component: () => import('../views/DisplayView.vue')
    },
    {
        path: '/welcome',
        name: 'welcome',
        component: () => import('../views/WelcomeView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
