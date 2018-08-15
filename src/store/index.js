import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

// const debug = process.env.NODE_ENV !== 'production'
//
// export default new Vuex.Store({
//   actions,
//   getters,
//   state,
//   mutations,
//   strict: debug,
//   plugins: debug ? [createLogger()] : []
// })