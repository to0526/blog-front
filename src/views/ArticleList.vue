<template>
  <div>
    <h1>
      ブログ記事一覧
    </h1>
    <ul v-for="article in articles" v-bind:key="article.id">
      <li>
        タイトル: {{article.title}}
        本文: {{article.body}}
        作成日時: {{article.created_at}}
      </li>
    </ul>
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
