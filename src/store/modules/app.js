import { getItem, setItem } from '@/utils/storage'
import { LANG } from '@/constant/index'
// import { get } from "core-js/core/dict"
export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true,
    language: getItem(LANG) || 'zh'
  }),
  mutations: {
    toggleSidebar(state) {
      state.sidebarOpened = !state.sidebarOpened
    },
    setLanguage(state, lang) {
      setItem(LANG, lang)
      state.language = lang
    }
  }
}
