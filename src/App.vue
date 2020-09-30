<template>
  <div id="app">
    <b-navbar variant="light">
      <b-navbar-brand>
        <router-link to="/">Takalog</router-link>
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item class="mr-2">
          <router-link to="/about">About</router-link>
        </b-nav-item>
        <b-nav-item class="mr-2">
          <div v-if="authToken === ''">
            <router-link to="/sign_in">SignIn</router-link>
          </div>
          <div v-else>
            <span @click="signOut">SignOut</span>
          </div>
        </b-nav-item>
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
