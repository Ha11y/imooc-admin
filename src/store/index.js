import { createStore } from 'vuex'
import user from '@/store/modules/user.js'
import getters from './getters'
import app from '@/store/modules/app.js'
export default createStore({
  getters,
  modules: {
    user,
    app
  }
})
