import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
import { isCheckTimeout } from '@/utils/auth'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      if (isCheckTimeout()) {
        store.dispatch('user/logout')
        return Promise.reject(new Error('token已失效,请重新登录'))
      }
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    config.headers.icode = 'helloqianduanxunlianying'
    config.headers['Accept-Language'] = store.getters.language
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { success, data, message } = response.data
    if (success) {
      return data
    } else {
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    // 请求失败
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 401
    ) {
      // 后端token过期
      store.dispatch('user/logout')
    }

    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)
export default service
