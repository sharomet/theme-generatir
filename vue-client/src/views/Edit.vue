<template>
  <div>
    <themesSidebar />
    <main class="main">
      <div class="card h-100">
        <div class="card-header bg-primary">
          <strong class="text-white">Preview</strong>
        </div>
        <div class="card-body main__content"></div>
      </div>
    </main>
  </div>
</template>

<script>
import ThemesSidebar from "@/components/themeSidebar";

export default {
  components: {
    ThemesSidebar
  }
};
</script>
