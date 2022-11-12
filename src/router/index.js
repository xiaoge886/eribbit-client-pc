import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [

]
// vue2.0 new VueRouter({}) 创建路由实例
// vue3.0 createRouter({}) 创建路由实例
const router = createRouter({
  // 用hash的路由模式
  history: createWebHashHistory(),
  routes
})

export default router
