import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './getters'
import mutations from './actions'
// install Vuex框架
Vue.use(Vuex)

export default {
  namespaced:true
  ,state
  ,getters
  ,actions
  ,mutations
}
