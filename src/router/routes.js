import Home from '../views/Home.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      hideInMenu: true
    },
    component: () => import('_v/login.vue')
  },
  {
    path: '/',
    name: '_home',
    component: Home
  }
]

export default routes
