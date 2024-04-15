<template>
  <div class="login-box">
    <label class="header-text">Chào mừng bạn đến với CLEA-Web</label>
    <!-- Chuyển trang -->
    <div class="box-btn mt-4">
      <button class="btn-tab active">Đăng nhập</button>
      <NuxtLink to="/auths/signup" class="btn-tab">Đăng ký</NuxtLink>
    </div>
    <!-- Intro - Giới thiệu về web -->
    <span class="description-content mt-3 mb-4"
      >CLEA-Web mang lại tiện ích trong công việc học và giảng dạy, giúp bạn
      tiết kiệm thời gian và chi phí.</span
    >

    <form class="form-login" @submit.prevent="onSubmit">
      <div class="box-item">
        <span class="item-name mb-2">Tên đăng nhập</span>
        <input
          v-model="username"
          type="text"
          class="item-input"
          autocomplete="username"
          placeholder="Nhập tên đăng nhập"
        />
      </div>

      <div class="box-item">
        <span class="item-name mb-2 mt-3">Mật khẩu</span>
        <input
          v-model="password"
          type="password"
          class="item-input"
          autocomplete="password"
          placeholder="Nhập mật khẩu"
        />
      </div>

      <div class="detail-text mt-2">
        <div class="remember-me">
          <input type="checkbox" />
          <span>Nhớ tài khoản, mật khẩu</span>
        </div>

        <div class="forgot-password">
          <span class="">Quên mật khẩu?</span>
        </div>
      </div>

      <div class="div-submit mt-5">
        <button type="submit" class="btn-submit">Đăng nhập</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  layout: "authencation",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions("user", {
      apiUser: "apiUser",
    }),
    onSubmit() {
      let data = {
        username: this.username,
        password: this.password,
      };
      this.apiUser(data)
        .then((res) => {
          if (res.user._id != null) {
            this.$router.push("/");
          }
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style lang="scss" scoped src="@/assets/scss/pages/auths/login.scss"></style>
