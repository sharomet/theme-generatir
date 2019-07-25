<template>
  <aside class="sidebar mb-4 mb-lg-0">
    <div class="card h-100">
      <div class="card-header sidebar__header bg-primary d-flex align-items-center justify-content-between">
        <strong class="text-white">Themes</strong>
        <div>
          <a href="#" class="btn btn-primary btn-sm">
            <i class="fas fa-save"></i>
          </a>
          <a href="#" class="btn btn-primary btn-sm">
            <i class="fas fa-sync"></i>
          </a>
          <router-link :to="{ name: 'home' }" class="btn btn-primary btn-sm">
            <i class="fas fa-reply-all"></i>
          </router-link>
        </div>
      </div>
      <ul class="list-group list-group-flush">
        <li v-for="(theme, index) in fetchThemes" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
          <a href="#">{{ theme.name }}</a>
          <div>
            <ul class="list-inline">
              <li class="list-inline-item">
                <router-link :to="{ name: 'edit', params: { id: theme.id }}" class="btn btn-sm px-1">
                  <i class="fas fa-pencil-alt"></i>
                </router-link>
              </li>
              <li class="list-inline-item">
                <a href="#" class="btn btn-sm px-1">
                  <i class="far fa-copy"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="btn btn-sm px-1">
                  <i class="far fa-trash-alt"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="btn btn-sm px-1">
                  <i class="fas fa-check"></i>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  computed: {
    fetchThemes () {
      return this.$store.getters.GET_THEMES
    }
  },
  mounted () {
    this.$store.dispatch('FETCH_THEMES')
  }
}
</script>
