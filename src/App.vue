<template>
  <div id="app">
    <b-navbar variant="light">
      <b-navbar-brand>
        Takalog
      </b-navbar-brand>
      <b-navbar-nav>
        <b-navbar-item class="mr-2"><router-link to="/">Home</router-link></b-navbar-item>
        <b-navbar-item class="mr-2"><router-link to="/about">About</router-link></b-navbar-item>
        <b-navbar-item class="mr-2"><router-link to="/articles">ブログ一覧</router-link></b-navbar-item>
      </b-navbar-nav>
    </b-navbar>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<style>
a {
  color: black;
}
</style>
