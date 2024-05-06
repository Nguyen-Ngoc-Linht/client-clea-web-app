<template>
  <div class="profile-page">
    <div class="box-profile">
      <!-- Header -->
      <div class="header-profile">
        <div class="avatar">
          <img :src="avatar" class="avt-img" />

          <div class="box-edit-avatar" @click="openImageUploader">
            <img
              src="~/assets/images/pages/user/Gallery.svg"
              alt=""
              class="icon-edit-avatar"
            />
          </div>
        </div>

        <div class="detail ms-3">
          <span class="name">{{ user.name }}</span>
          <span class="text">28-05-2002</span>
        </div>

        <div v-if="!editing" class="icon-edit" @click="enableEditing">
          <img
            src="~/assets/images/pages/user/Pen.svg"
            alt=""
            class="img-icon"
          />
        </div>

        <div v-else class="btn-box">
          <button class="btn btn-save btn-primary" @click="enableEditing">
            Lưu
          </button>
        </div>
      </div>

      <!-- Thông tin cá nhân -->
      <div class="infouser">
        <span class="title-info">Thông tin cá nhân</span>
        <div class="box-info mt-3">
          <div class="info-item">
            <span class="item-title">Giới thiệu</span>
            <textarea
              v-model="description"
              class="item-detail"
              :readonly="!editing"
            ></textarea>
          </div>

          <div class="info-item">
            <span class="item-title">Học tập tại</span>
            <textarea
              v-model="studyat"
              class="item-detail"
              :readonly="!editing"
            ></textarea>
          </div>

          <div class="info-item">
            <span class="item-title">Địa chỉ</span>
            <textarea
              v-model="address"
              class="item-detail"
              :readonly="!editing"
            ></textarea>
          </div>

          <div class="info-item">
            <span class="item-title">Thông tin liên hệ</span>
            <textarea
              v-model="email"
              class="item-detail"
              :readonly="!editing"
            ></textarea>
          </div>

          <div class="info-item">
            <span class="item-title">Số điện thoại</span>
            <textarea v-model="phone" class="item-detail" :readonly="!editing">
            </textarea>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      ref="modal1"
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
            <h4>Thay Đổi avatar của bạn</h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form class="form-input" @submit.prevent="onSubmit">
              <div class="avatar">
                <img :src="avatar" alt="" class="img-avt" />
              </div>
              <div class="input-item mt-3">
                <label for="imgavatar">Chọn ảnh từ thư viện</label>
                <input
                  ref="imgpostavatar"
                  type="file"
                  id="imgavatar"
                  accept=".jpg, .jpeg, .png"
                  class="file-posts mt-3"
                />
              </div>

              <!-- Gắn ảnh -->
              <div class="box-button mt-4">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Đóng
                </button>

                <button type="submit" class="btn btn-primary">
                  Cập nhật Avatar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {},
      description: "",
      studyat: "",
      address: "",
      email: "",
      phone: "",
      avatar: "",
      editing: false,
    };
  },
  methods: {
    ...mapActions("user", {
      getUser: "getUser",
      setAvatar: "setAvatar",
    }),
    enableEditing() {
      this.editing = !this.editing;
    },
    openImageUploader() {
      this.myModal.show();
    },
    async onSubmit(event) {
      event.preventDefault();
      const formData = new FormData();

      formData.append("user_id", this.user.id);

      if (this.$refs.imgpostavatar.files.length > 0) {
        const file = this.$refs.imgpostavatar.files[0];
        console.log(file);
        formData.append("images", file);
      }

      await this.setAvatar(formData).then((response) => {
        this.avatar = `${process.env.baseUrl}${response.avatarUrl}`;
        this.user.avatar = this.avatar;
        localStorage.setItem("user", JSON.stringify(this.user));
        this.myModal.hide();
      });
    },
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.avatar = this.user.avatar;
    this.getUser(this.user.id).then((response) => {
      this.email = response.email;
    });
  },
  mounted() {
    this.myModal = bootstrap.Modal.getOrCreateInstance(this.$refs.modal1);
  },
};
</script>

<style lang="scss" scoped src="@/assets/scss/pages/users/profile.scss"></style>
