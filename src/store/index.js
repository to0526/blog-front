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
    fetchAuthToken(store, payload) {
      if(store.state.authToken !== "") return
      fetch("http://localhost:3000/sign_in", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: payload
      })
        .then(response => response.json())
        .then(data => store.commit("setAuthToken", data.token))
        .catch(error => alert(error))
    }
  },
  modules: {
  }
})
