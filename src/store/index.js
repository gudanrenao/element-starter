import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'

Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
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