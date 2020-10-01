import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authToken: ""
  },
  mutations: {
    setAuthToken(state, token) {
      state.authToken = token
    },
    deleteAuthToken(state) {
      state.authToken = ""
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
        .then(res => {
          // 認証失敗時にapi側で204を返す
          if (res.status === 204) {
            throw new Error("ログインに失敗しました")
          }
          return res.json()
        })
        .then(data => {
          store.commit("setAuthToken", data.token)
          alert("ログインしました")
          router.push("/articles")
        })
        .catch(error => alert(error))
    }
  },
  modules: {
  }
})
