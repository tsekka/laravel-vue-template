import './styles/index.css'

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// Router
import router from './router'
app.use(router)

// Pinia
import { createPinia } from 'pinia'
app.use(createPinia())

// Axios
// @ts-ignore
import axios from '@/common/axios.js'
axios.init(app)

// I18n
import i18n from '@/plugins/i18n'
app.use(i18n)

// Progressbar
import { Vue3ProgressPlugin } from '@marcoschulte/vue3-progress'
app.use(Vue3ProgressPlugin)

app.mount('#app')
