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
      </b-navbar-nav>
    </b-navbar>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<style scoped>
a {
  color: black;
}
</style>
