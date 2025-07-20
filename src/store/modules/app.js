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
    },
    delTagsView(state, index) {
      if (index !== -1) {
        state.tagsViewList.splice(index, 1)
        setItem(TAGS_VIEW, state.tagsViewList)
      }
    },
    //  payload.type: index, other, right
    removeTagsView(state, payload) {
      if (payload.type === 'index') {
        state.tagsViewList.splice(payload.index, 1)
        return
      } else if (payload.type === 'other') {
        state.tagsViewList.splice(
          payload.index + 1,
          state.tagsViewList.length - payload.index + 1
        )
        state.tagsViewList.splice(0, payload.index)
      } else if (payload.type === 'right') {
        state.tagsViewList.splice(
          payload.index + 1,
          state.tagsViewList.length - payload.index + 1
        )
      }
      setItem(TAGS_VIEW, state.tagsViewList)
    }
  }
}
