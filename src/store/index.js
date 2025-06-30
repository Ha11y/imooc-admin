import { createStore } from 'vuex'
import user from '@/store/modules/user.js'
import getters from './getters'
export default createStore({
  getters,
  modules: {
    user
  }
})
