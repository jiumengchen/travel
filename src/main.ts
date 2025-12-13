import 'ant-design-vue/dist/reset.css'
import '@/styles/reset.scss'
import { createApp } from 'vue'
import store from './stores'
import router from './router'
import Antd from 'ant-design-vue'
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import updateLocale from 'dayjs/plugin/updateLocale'
import '@/mock/index'
dayjs.locale('zh-cn')
dayjs.extend(updateLocale)
dayjs.updateLocale('zh-cn', {
  weekStart: 0,
})
import App from './App.vue'
const app = createApp(App)

app.use(store)
app.use(router)
app.use(Antd, { locale: zhCN } as any)

app.component('SvgIcon', SvgIcon)

app.mount('#app')
