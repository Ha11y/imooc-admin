import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import installIcons from '@/icons/index'
import './permission'
import i18n from './i18n/index'
import element from '@/plugin/element'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(i18n)
installIcons(app)
element(app)
app.mount('#app')
