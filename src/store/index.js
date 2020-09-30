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
    async fetchAuthToken(store, payload) {
      if(store.state.authToken !== "") return

      try {
        const response = await fetch("http://localhost:3000/sign_in", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: payload
        }).then(res => res.json())
        store.commit("setAuthToken", response.token)
      } catch {
        alert("ログインに失敗しました")
      }
    }
  },
  modules: {
  }
})
