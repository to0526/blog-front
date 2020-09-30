<template>
  <div id="app">
    <b-navbar variant="light">
      <b-navbar-brand>
        <router-link to="/">Takalog</router-link>
      </b-navbar-brand>
        <b-navbar-nav v-if="authToken === ''">
          <b-nav-item to="/sign_in">SignIn</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav v-else>
          <b-nav-item class="mr-2" to="/articles/new">NewArticle</b-nav-item>
          <b-nav-item @click="signOut">SignOut</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  methods: {
    signOut() {
      this.$store.commit("deleteAuthToken")
      alert("ログアウトしました")
      this.$router.push("/articles")
    }
  },
  computed: {
    ...mapState(["authToken"])
  }
}
</script>

<style scoped>
a {
  color: black;
}
</style>
