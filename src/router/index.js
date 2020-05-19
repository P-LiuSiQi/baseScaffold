import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
// import store from '../store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

// router.beforeEach((to, from, next) => {
//   if (!sessionStorage.getItem('token') && to.path !== '/login') {
//     next({ name: 'login' })
//     return false
//   }
//   if (store.state.user.hasGetInfo) {
//     next()
//   } else {
//     // 没有获取用户信息
//     store.dispatch('getUserInfo').then(res => {
//       next()
//     })
//   }
// })

// router.afterEach(to => {
//   window.scrollTo(0, 0)
// })

export default router
