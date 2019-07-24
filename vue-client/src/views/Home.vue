<template>
  <div class="home">
    <ul>
      <li v-for="(theme, index) in themes" :key="index">{{ theme.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
      themes: []
    }
  },
  mounted () {
    this.getAllThemes()
  },
  methods: {
    getAllThemes () {
      axios.get('api/home').then(themes => {
        this.themes = themes.data
      })
    }
  }
}
</script>
