// 全局前置路由守卫
import store from './store'
import router from './router'
const writeList = ['/login']
router.beforeEach(async (to, from, next) => {
  // 规则一 ：已登录不能进入login页面

  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      if (!store.getters.hasUserInfo) {
        const { permission } = await store.dispatch('user/getUserInfo')
        console.log(permission, 'permission')
        // 处理用户权限，筛选出需要添加的路由
        const filterRoutes = await store.dispatch(
          'permission/filterRoutes',
          permission.menus
        )
        console.log(filterRoutes, 'filterRoutes')
        // 利用 addRoute 循环添加
        filterRoutes.forEach((item) => {
          router.addRoute(item)
        })
        // 添加完动态路由之后，需要在进行一次主动跳转

        return next(to.path)
      }
      next()
    }
  } else {
    if (writeList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
