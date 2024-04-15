<template>
  <div class="signup-box">
    <label class="header-text">Chào mừng bạn đến với CLEA-Web</label>
    <!-- Chuyển trang -->
    <div class="box-btn mt-4">
      <NuxtLink to="/auths/login" class="btn-tab">Đăng nhập</NuxtLink>
      <NuxtLink to="/auths/signup" class="btn-tab active">Đăng ký</NuxtLink>
    </div>
    <!-- Intro - Giới thiệu về web -->
    <span class="description-content mt-3 mb-2"
      >CLEA-Web mang lại tiện ích trong công việc học và giảng dạy, giúp bạn
      tiết kiệm thời gian và chi phí.</span
    >

    <form class="form-login" @submit.prevent="handleSubmit">
      <div class="box-item">
        <span class="item-name mb-2"
          >Email <span style="color: red">*</span></span
        >
        <input
          v-model="email"
          type="text"
          class="item-input"
          placeholder="Nhập email đăng ký"
        />
      </div>

      <div class="box-item">
        <span class="item-name mb-2 mt-3"
          >Tên đăng nhập <span style="color: red">*</span></span
        >
        <input
          v-model="username"
          type="text"
          class="item-input"
          autocomplete="username"
          placeholder="Nhập tên đăng nhập"
        />
      </div>

      <div class="box-item">
        <span class="item-name mb-2 mt-3"
          >Mật khẩu <span style="color: red">*</span></span
        >
        <input
          v-model="password"
          type="password"
          class="item-input"
          autocomplete="password"
          placeholder="Nhập mật khẩu"
        />
      </div>

      <div class="box-item">
        <span class="item-name mb-2 mt-3"
          >Nhập lại mật khẩu <span style="color: red">*</span></span
        >
        <input
          v-model="respassword"
          type="password"
          class="item-input"
          autocomplete="new-password"
          placeholder="Nhập lại mật khẩu"
        />
      </div>

      <span v-if="isError" class="text-error mt-1">{{ textError }}</span>

      <div class="div-submit mt-4">
        <button type="submit" class="btn-submit">Đăng ký</button>
      </div>
    </form>

    <!-- Modal -->
    <div
      ref="modal"
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Bạn đã đăng ký tài khoản thành công
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            Click để thêm thông tin cá nhân của bạn!!
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Để sau
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="handleNavigation"
            >
              Đi tới chỉnh sửa
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import validation from "@/utils/validation";
export default {
  layout: "authencation",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      respassword: "",
      isError: false,
      textError: "Haha",
      showModal: false,
    };
  },
  methods: {
    handleSubmit() {
      if (
        this.email != "" &&
        this.username != "" &&
        this.password != "" &&
        this.respassword != ""
      ) {
        if (!validation.emailFormat()(this.email)) {
          this.textError = "Email không hợp lệ";
          this.isError = true;
          return;
        }
        if (this.password != this.respassword) {
          this.textError = "Mật khẩu nhập lại không đúng";
          this.isError = true;
          return;
        }
        if (
          /\s/.test(this.username) ||
          /\s/.test(this.password) ||
          /[^\w\s]/.test(this.username) ||
          /[^\w\s]/.test(this.password)
        ) {
          this.textError =
            "Tên đăng nhập và mật khẩu không được chứa khoảng trắng và kí tự đặc biệt!!";
          this.isError = true;
          return;
        }
        let data = {
          username: this.username,
          email: this.email,
          password: this.password,
          respassword: this.respassword,
        };
        console.log(data);
        this.myModal.show();
      } else {
        this.textError = "Hãy nhập đầy đủ trường thông tin";
        this.isError = true;
      }
    },
    handleNavigation() {
      this.myModal.hide();
      this.$router.push('/user/changeprofile')
    },
  },
  mounted() {
    // Lấy ra thể hiện của modal từ DOM element có tham chiếu 'modal'
    this.myModal = bootstrap.Modal.getOrCreateInstance(this.$refs.modal);
  },
};
</script>

<style lang="scss" scoped src="@/assets/scss/pages/auths/signup.scss"></style>
