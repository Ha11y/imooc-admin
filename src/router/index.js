import { createRouter, createWebHashHistory } from 'vue-router'
import LayoutIndex from '@/Layout/LayoutIndex.vue'
const privateRoutes = [
  {
    path: '/user',
    redirect: '/user/manage',
    component: LayoutIndex,
    name: 'user',
    meta: {
      title: 'user',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage',
        name: 'userManage',
        component: () => import('@/views/user-manage/index.vue'),
        meta: {
          title: 'userManage',
          icon: 'personnel-manage'
        }
      },
      {
        path: '/user/role',
        name: 'roleList',
        component: () => import('@/views/role-list/index.vue'),
        meta: {
          title: 'roleList',
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        name: 'permissionList',
        component: () => import('@/views/permission-list/index.vue'),
        meta: {
          title: 'permissionList',
          icon: 'permission'
        }
      },
      {
        path: '/user/info/:id',
        name: 'userInfo',
        component: () => import('@/views/user-info/index.vue'),
        props: true,
        meta: {
          title: 'userInfo'
        }
      },
      {
        path: '/user/profile',
        name: 'profile',
        component: () => import('@/views/profile/index.vue'),
        meta: {
          title: 'user'
        }
      },
      {
        path: '/user/import',
        name: 'import',
        component: () => import('@/views/import/index.vue'),
        meta: {
          title: 'excelImport'
        }
      }
    ]
  },
  {
    path: '/article',
    name: 'article',
    component: LayoutIndex,
    redirect: '/article/ranking',
    meta: {
      title: 'article',
      icon: 'article'
    },
    children: [
      {
        path: '/article/ranking',
        name: 'rangking',
        component: () => import('@/views/article-ranking/index'),
        meta: {
          title: 'articleRanking',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/:id',
        name: 'articleDetail',
        component: () => import('@/views/article-detail/index'),
        meta: {
          title: 'articleDetail'
        }
      },
      {
        path: '/article/create',
        name: 'articleCreate',
        component: () => import('@/views/article-create/index'),
        meta: {
          title: 'articleCreate',
          icon: 'article-create'
        }
      },
      {
        path: '/article/editor/:id',
        name: 'articleEditor',
        component: () => import('@/views/article-create/index'),
        meta: {
          title: 'articleEditor'
        }
      }
    ]
  }
]

// 公开路由表
const publicRoutes = [
  {
    path: '/',
    redirect: '/profile',
    component: LayoutIndex,
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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
