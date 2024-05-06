<template>
  <div class="page-my-document">
    <button class="btn" @click="backnative">Back</button>

    Đây là trang tài liệu của tôi
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

<style
  lang="scss"
  scoped
  src="@/assets/scss/pages/users/mydocument.scss"
></style>
