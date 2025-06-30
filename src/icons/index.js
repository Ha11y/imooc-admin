// 导入所有的icon 图标
// 全局注册图标组件
import SvgIcon from '@/components/SvgIcon.vue'

const svgRequire = require.context('./svg', false, /\.svg$/)
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))

// 全局注册组件
export default (app) => {
  app.component('svg-icon', SvgIcon)
}
