import { createI18n } from 'vue-i18n'
// import '@/lang/index'
import zhlocale from '@/lang/zh'
import enlocale from '@/lang/en'
import store from '@/store'
const messages = {
  en: {
    msg: {
      ...enlocale
    }
  },
  zh: {
    msg: {
      ...zhlocale
    }
  }
}
function getLanguage() {
  return store && store.getters && store.getters.language
}
const i18n = createI18n({
  // 使用composition API
  legacy: false,
  // 全局使用 t 函数
  globalInjection: true,
  locale: getLanguage() || 'zh',
  messages
})
export default i18n
