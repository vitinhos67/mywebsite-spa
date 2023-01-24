import { createRouter, createWebHashHistory } from 'vue-router'
import PageNotFound from '../components/PageNotFound'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/HomeVue')
  },
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: PageNotFound
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
