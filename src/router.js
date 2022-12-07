import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Contratacion from './components/Contratacion.vue'
import Financiero from './components/Financiero.vue'

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/user/login',
    name: 'logIn',
    component: LogIn
  },
  {
    path: '/user/signUp',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/user/dashboard_contratacion',
    name: 'Contratacion',
    component: Contratacion
  },
  {
    path: '/user/dashboard_financiero',
    name: 'Financiero',
    component: Financiero
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
