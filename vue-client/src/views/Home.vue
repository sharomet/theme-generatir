<template>
  <Wrapper>
    <ThemesSidebar />
    <!-- <ul>
      <li v-for="(theme, index) in themes" :key="index">{{ theme.name }}</li>
    </ul>-->
    <main class="main">
      <div class="card h-100">
        <div class="card-header bg-primary">
          <strong class="text-white">Preview</strong>
        </div>
        <div class="card-body main__content"></div>
      </div>
    </main>
  </Wrapper>
</template>

<script>
import axios from 'axios'
import Wrapper from '@/components/Wrapper'
import ThemesSidebar from '@/components/ThemesSidebar'

export default {
  data () {
    return {
      themes: []
    }
  },
  components: {
    ThemesSidebar,
    Wrapper
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
