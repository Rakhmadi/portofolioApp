import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router';
import menu from './components/menu.vue'

const app = createApp(App)
app.component('menu-component', menu)
app.use(router);
app.mount('#app')
