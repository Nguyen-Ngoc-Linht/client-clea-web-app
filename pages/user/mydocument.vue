<template>
  <div class="page-my-document">
    <div class="header-page">
      <button class="btn" @click="backnative">Back</button>
    </div>

    <div class="body-page container">
      <div class="row">
        <div class="col-3">
          <div class="box-item"></div>
        </div>

        <div class="col-3">
          <div class="box-item"></div>
        </div>

        <div class="col-3">
          <div class="box-item"></div>
        </div>

        <div class="col-3">
          <div class="box-item"></div>
        </div>
      </div>

      <div class="notification mt-4">
        <div class="title">
          <span class="text">Xem danh sách tài liệu của bạn</span>
        </div>

        <div class="description">
          <span class="text-des"
            >Danh sách tài liệu bạn lưu được hiển thị tại đây</span
          >
        </div>
      </div>

      <div class="list-document mt-2">
        <div class="row">
          <div class="col-4"></div>
          <div class="col-8">
            <div class="list-tailieu"></div>
          </div>
        </div>
      </div>
    </div>
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
