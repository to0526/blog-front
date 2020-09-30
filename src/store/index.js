import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authToken: ""
  },
  mutations: {
    setAuthToken(state, token) {
      state.authToken = token
    }
  },
  actions: {
  },
  modules: {
  }
})
