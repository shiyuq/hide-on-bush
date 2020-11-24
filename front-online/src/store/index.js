import Vue from 'vue'
import Vuex from 'vuex'

import feedback from './modules/feedback'
import header from './modules/header'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    feedback,
    header
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
