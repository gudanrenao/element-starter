import Vue from 'vue'
import Router from 'vue-router'
import login from '../page/common/login'

Vue.use(Router)
const index = (resolve) => {
  import('../page/common/index').then((content) => {
    resolve(content)
  })
}
const topIndex = (resolve) => {
  import('../page/common/top').then((content) => {
    resolve(content)
  })
}
const merchantIndex = (resolve) => {
  import('../page/merchant/index').then((content) => {
    resolve(content)
  })
}
export default new Router({
  routes: [
    {
      path: '/index',
      redirect: '/merchant/index',
      name: 'index',
      component: index,
      children: [
        {
          path: '/merchant/index',
          component: merchantIndex
        }
      ]
    }, {
      path: '/topIndex',
      name: 'topIndex',
      component: topIndex
    }, {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})