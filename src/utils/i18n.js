import i18n from '@/i18n'
import store from '@/store'
import { watch } from 'vue'
export const generateTitle = function (title) {
  return i18n.global.t('msg.route.' + title)
}
export function watchSwitchLang(...cbs) {
  watch(
    () => store.getters.language,
    () => {
      cbs.forEach((cb) => cb(store.getters.language))
    }
  )
}
