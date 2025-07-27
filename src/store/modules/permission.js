import { publicRoutes, asyncRoutes } from '@/router/index'
export default {
  namespaced: true,
  state: () => ({
    routes: publicRoutes
  }),
  mutations: {
    // 增加路由
    setRoutes(state, newRoutes) {
      // 永远在静态路由的基础上增加新路由
      state.routes = [...publicRoutes, ...newRoutes]
    }
  },
  actions: {
    // 根据权限筛选路由
    filterRoutes(context, menus) {
      const routes = []
      menus.forEach((key) => {
        routes.push(...asyncRoutes.filter((item) => item.name === key))
      })
      // 所有不匹配的路由进入到404 的路由配置
      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })
      context.commit('setRoutes', routes)
      return routes
    }
  }
}
