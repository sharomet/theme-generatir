<template>
  <Wrapper>
    <ThemesSidebar />
    <main class="main">
      <div class="card h-100">
        <div class="card-header bg-primary">
          <strong class="text-white" v-if="getTheme">{{ getTheme.name }}</strong>
        </div>
        <div class="card-body main__content"></div>
      </div>
    </main>
  </Wrapper>
</template>

<script>
import Wrapper from '@/components/Wrapper'
import ThemesSidebar from '@/components/ThemesSidebar'

export default {
  components: {
    ThemesSidebar,
    Wrapper
  },
  computed: {
    getTheme () {
      return this.$store.getters.GET_THEME[0]
    }
  },
  mounted () {
    this.$store.dispatch('GET_THEME', this.$route.params.id)
  }
}
</script>
