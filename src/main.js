import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import MainPage from './pages/MainPage.vue'
import ValuePage from './pages/ValuePage.vue'

const routes = [
  { path: '/', name: 'mainpage', component: MainPage },
  { path: '/valuation', name: 'valuation', component: ValuePage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
const app = createApp(App)
app.use(router)
app.mount('#app')
