import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import { request } from './api/http'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/common.css'

Vue.use(ElementUI);

/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false

/**
 * @description 全局注册请求变量
 */
Vue.prototype.$request = request

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
