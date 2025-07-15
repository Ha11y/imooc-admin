import { getItem, setItem } from '@/utils/storage'
import { LANG, TAGS_VIEW } from '@/constant'
// import { get } from "core-js/core/dict"
export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true,
    language: getItem(LANG) || 'zh',
    tagsViewList: getItem(TAGS_VIEW) || []
  }),
  mutations: {
    toggleSidebar(state) {
      state.sidebarOpened = !state.sidebarOpened
    },
    setLanguage(state, lang) {
      setItem(LANG, lang)
      state.language = lang
    },
    addTagsViewList(state, tags) {
      const isFind = state.tagsViewList.find((item) => {
        return item.path === tags.path
      })
      // 处理重复 tags
      if (!isFind) {
        state.tagsViewList.push(tags)
        setItem(TAGS_VIEW, state.tagsViewList)
      }
    },
    changeTagsTitle(state, { index, tag }) {
      state.tagsViewList[index] = tag
      setItem(TAGS_VIEW, state.tagsViewList)
    }
  }
}
