<template>
  <div>
    <h2 class="my-4">
      ブログ記事一覧
    </h2>
    <div class="mb-4" v-for="article in articles" v-bind:key="article.id">
      <b-card :title="article.title" :sub-title="article.created_at">
        <b-card-text> {{article.body}} </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: []
    }
  },
  methods: {
    fetchArticles: function() {
      fetch('http://localhost:3000/articles')
        .then(response => response.json())
        .then(data => this.articles = data)
        .catch(error => alert(error))
    }
  },
  created: function() {
    this.fetchArticles()
  }
}
</script>

<style>
</style>
