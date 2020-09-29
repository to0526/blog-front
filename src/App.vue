<template>
  <div id="app">
    <b-container>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/articles">ブログ一覧</router-link>
      </div>
      <router-view/>
    </b-container>
  </div>
</template>

<style>
</style>
