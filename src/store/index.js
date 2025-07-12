import { createStore } from 'vuex'
import user from '@/store/modules/user.js'
import getters from './getters'
import app from '@/store/modules/app.js'
import theme from '@/store/modules/theme'
export default createStore({
  getters,
  modules: {
    user,
    app,
    theme
  }
})
