<template>
  <div class="page-my-note">
    <button class="btn" @click="backnative">Back</button>
    Đây là trang note của tôi
  </div>
</template>

<script>
export default {
  layout: "empty",
  methods: {
    backnative() {
      this.$router.push("/goccuatoi");
    },
  },
};
</script>

<style lang="scss" scoped src="@/assets/scss/pages/users/mynote.scss"></style>
