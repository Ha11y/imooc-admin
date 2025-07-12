import i18n from '@/i18n'
export const generateTitle = function (title) {
  return i18n.global.t('msg.route.' + title)
}
