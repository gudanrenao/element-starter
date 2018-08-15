//action提交的是mutation
import * as types from './mutation-types'

export const login = function ({commit}, {isLogin, loginName}) {
  commit[types.IS_LOGIN, isLogin]
  commit[types.LOGIN_NAME, loginName]
}