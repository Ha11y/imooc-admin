import { createI18n } from 'vue-i18n'
const locale = 'zh'
const messages = {
  en: {
    msg: {
      test: 'test'
    }
  },
  zh: {
    msg: {
      test: '测试'
    }
  }
}

const i18n = createI18n({
  // 使用composition API
  legacy: false,
  // 全局使用 t 函数
  globalInjection: true,
  locale,
  messages
})
export default i18n
