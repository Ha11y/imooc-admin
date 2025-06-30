// 全局前置路由守卫
import store from './store'
import router from './router'
const writeList = ['/login']
router.beforeEach(async (to, from, next) => {
  // 规则一 ：已登录不能进入login页面

  if (store.getters.token) {
    console.log(store.getters.token)
    if (to.path === '/login') {
      next('/')
    } else {
      if (!store.getters.hasUserInfo) {
        await store.dispatch('user/getUserInfo')
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
