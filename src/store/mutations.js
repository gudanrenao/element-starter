import * as types from './mutation-types'

const mutations = {
  [types.IS_LOGIN](state, flag) {
    state.isLogin = flag
  },
  [types.LOGIN_NAME](state, name) {
    state.loginName = name
  }
}

export default mutations