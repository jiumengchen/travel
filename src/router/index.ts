import { createRouter, createWebHashHistory } from 'vue-router'
import receptionRouters from './receptionRouters'
import adminRouters from './adminRouters'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...receptionRouters, ...adminRouters],
})

export default router
