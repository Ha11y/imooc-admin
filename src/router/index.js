import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout/index.vue'
import ArticleCreaterRouter from './modules/ArticleCreate'
import ArticleRouter from './modules/Article'
import PermissionListRouter from './modules/PermissionList'
import RoleListRouter from './modules/RoleList'
import UserManageRouter from './modules/UserManage'
import store from '@/store'
export const asyncRoutes = [
  RoleListRouter,
  UserManageRouter,
  PermissionListRouter,
  ArticleCreaterRouter,
  ArticleRouter
]

// 公开路由表
export const publicRoutes = [
  {
    path: '/',
    redirect: '/profile',
    component: layout,
    children: [
      {
        path: '/profile',
        icon: 'el-icon-user',
        component: () => import('@/views/profile/index.vue'),
        meta: {
          title: 'profile',
          icon: 'personnel'
        }
      },
      //
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401.vue')
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/loginComponent/indexVue.vue')
  }
  // 所有不匹配的路由，全部进入404 的路由配置，必须要在所有指定的路由之后
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})
export function resetRouter() {
  if (
    store.getters.userInfo &&
    store.getters.userInfo.permission &&
    store.getters.userInfo.permission.menus
  ) {
    const menus = store.getters.userInfo.permission.menus
    menus.forEach((menu) => {
      router.removeRoute(menu)
    })
  }
}

export default router
