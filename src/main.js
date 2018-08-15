import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import {yyyyMmDdHhMmSs, yyyyMmDd, hhMmSs} from '~/assets/common/js/date'
import qs from 'qs'
//vue过滤器注册
Vue.filter('yyyyMmDdHhMmSs', yyyyMmDdHhMmSs)
Vue.filter('yyyyMmDd', yyyyMmDd)
Vue.filter('hhMmSs', hhMmSs)

Vue.use(ElementUI)
Vue.prototype.$qs = qs
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
