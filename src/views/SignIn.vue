<template>
  <div>
    <h2 class="my-4">
      ログイン
    </h2>
    <b-form @submit="onSubmit">
      <b-form-group id="email" label="Email address" label-for="email">
        <b-form-input id="email" v-model="email" type="email" required>
        </b-form-input>
      </b-form-group>

      <b-form-group id="password" label="password" label-for="password">
        <b-form-input id="password" v-model="password" type="password" required>
        </b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    onSubmit: function(event) {
      event.preventDefault()
      fetch("http://localhost:3000/sign_in", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: { email: this.email, password: this.password }})
      })
        .then(response => response.json())
        .then(data => this.$store.commit("setAuthToken", data.token))
        .catch(error => alert(error))
    }
  }
}
</script>

<style>
</style>
