<template>
  <div class="default-page">
    <!-- header -->
    <div class="header_app">
      <Header />
    </div>

    <div class="body-content">
      <nuxt />
    </div>

    <div class="footers">
      <Footter />
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footter from "@/components/common/Footter.vue";
export default {
  components: {
    Header,
    Footter,
  },
};
</script>

<style lang="scss" scoped src="@/assets/scss/base/default.scss"></style>
