import { createRouter, createWebHashHistory } from 'vue-router'

// 公开路由表
const publicRoutes = [
  {
    path: '/',
    component: () => import('@/Layout/LayoutIndex.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/loginComponent/indexVue.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
