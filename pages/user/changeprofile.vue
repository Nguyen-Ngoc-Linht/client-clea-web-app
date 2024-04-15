<template>
  <div>
    <button class="btn btn-success" @click="handleNavigation">Quay lai trang chu</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleNavigation() {
      this.$router.push('/')
    }
  }
}
</script>
