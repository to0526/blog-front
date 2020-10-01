import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import SignIn from '@/views/SignIn.vue'
import ArticleNew from '@/views/ArticleNew.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/articles', component: Home },
  { path: '/sign_in', component: SignIn },
  { path: '/articles/new', component: ArticleNew }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
