import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import i18n from '@/locale/index'
import { setupStore } from '@/stores'
import { setupDirective } from '@/directive'

// 本地SVG图标
import 'virtual:svg-icons-register'

import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/styles/index.scss'
import 'uno.css'

const app = createApp(App)
// 全局注册 自定义指令(directive)
setupDirective(app)
// 全局注册 状态管理(store)
setupStore(app)
app.use(router)
// 国际化
app.use(i18n)
app.mount('#app')
