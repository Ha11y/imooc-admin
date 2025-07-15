import { login, getUserInfo } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem, removeItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import { setTiemStamp } from '@/utils/auth'
import router from '@/router'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username, password: md5(password) })
          .then((data) => {
            this.commit('user/setToken', data.token || '')
            router.push('/')
            setTiemStamp()
            // setItem(TOKEN, data.data.data.token)
            // console.log(data)
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    async getUserInfo(context) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    },
    async logout(context) {
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeItem()
      router.push('/login')
      // return Promise.resolve()
    }
  }
}
