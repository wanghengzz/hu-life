import { createRouter, createWebHashHistory } from 'vue-router'
import Banner from "../views/Banner.vue"
import Grade from  "../views/Grade.vue"
import Information from "../views/Information.vue"
import Logined from '../views/Logined.vue'
const routes = [
  {
    path: '/banner',
    name: 'banner',
    component:Banner
  },
  {
      path:'/grade',
      name:'grade',
      component:Grade
  },
  {
    path:'/',
    name:'information',
    component:Information
  },
  {
    path:'/logined',
    name:'logined',
    component:Logined
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
