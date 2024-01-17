import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router/router'
import {anu} from 'anu-vue'

// UnoCSS import
import 'uno.css'

// anu styles
import 'anu-vue/dist/style.css'
import { createPinia } from 'pinia';
// default theme styles
import '@anu-vue/preset-theme-default/dist/style.css'



const pinia = createPinia();

const app = createApp(App)
app.use(router)


app.use(pinia);
app.use(anu as any)
app.mount('#app')
