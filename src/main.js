import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import installIcons from '@/icons/index'
import './permission'
import i18n from './i18n/index'
const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(i18n)
installIcons(app)
app.mount('#app')
