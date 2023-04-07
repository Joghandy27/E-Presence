import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SiswaView from '../views/SiswaView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/siswa',
    name: 'siswa',
    component: SiswaView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
