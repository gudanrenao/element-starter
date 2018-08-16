import axios from 'axios'
import store from '~/store'
import * as types from '~/store/mutation-types'

axios.interceptors.request.use(function (config) {
  // 在发送请求之前记录发送的时间,exclude:
  if (config.url.indexOf('/manageUsers/refreshToken') === -1) {
    store.commit(types.LAST_REQUEST_TIME, Date.parse(new Date()))
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
});