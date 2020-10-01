<template>
  <div>
    <h2 class="mt-4">
      記事登録
    </h2>
    <b-form @submit="onSubmit">
      <b-form-group id="title" label="Title" label-for="title">
        <b-form-input id="title" v-model="title" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group id="body" label="Body" label-for="body">
        <b-form-textarea id="body" v-model="body" required></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">Create</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  data() {
    return {
      title: "",
      body: ""
    }
  },
  methods: {
    onSubmit: function(event) {
      event.preventDefault()
      const params = { article: { title: this.title, body: this.body }}
      fetch("http://localhost:3000/articles", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${this.authToken}`
        },
        body: JSON.stringify(params)
      })
        .then(res => {
          if(!res.ok) {
            throw new Error(`HTTP status code ${res.status}(${res.statusText})`)
          }
          alert('created article')
          this.$router.push("/articles")
        })
        .catch(error => alert(error))
    }
  },
  computed: {
    ...mapState(["authToken"])
  }
}
</script>

<style>
</style>
