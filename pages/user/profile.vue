<template>
  <div class="profile-page container-fluid">
    <!--  Header  -->
    <div class="container">
      <div
        class="page-header min-height-300 border-radius-xl mt-4"
        style="
          background-image: url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80');
        "
      >
        <span class="mask bg-gradient-primary opacity-6"></span>
      </div>
      <div class="card card-body px-4 pt-4 mt-n8">
        <div class="d-flex align-items-center">
          <div class="box-avatar">
            <img :src="user.avatar" class="avatar avatar-xxl" style="border-radius: 50%;"/>

            <div class="box-edit-avatar" @click="openImageUploader">
              <img
                src="~/assets/images/pages/user/Gallery.svg"
                alt=""
                class="icon-edit-avatar"
              />
            </div>
          </div>

          <div class="d-flex justify-content-center flex-column ms-3 h-100" style="flex: 1">
            <span class="text-3xl text-bold text-black">{{ user.name }}</span>
            <span class="text text-danger text-bold">{{ user.description }}</span>
          </div>

          <div class="icon-edit">
            <img
              src="~/assets/images/pages/user/Pen.svg"
              alt="Chỉnh sửa thông tin cá nhân"
              class="img-icon"
            />
          </div>
        </div>
      </div>
    </div>

    <!--  Detail Info  -->
    <div class="container mt-3 pb-4">
      <div class="row">
        <div class="col-xl-5 col-md-6 col-12">
          <div class="card card-body">
            <h4 class="text-black text-center mb-0">Thông tin chi tiết cá nhân</h4>
            <hr class="horizontal dark">
            <div class="d-flex align-items-center mt-1">
              <div
                class="text-center bg-white shadow icon icon-md border-radius-md d-flex align-items-center justify-content-center"
              >
                <i class="ni ni-single-02 opacity-10 text-info text-bolder" style="font-size: 18px"></i>
              </div>
              <span class="mb-0 ms-2 text-md-start text-bolder text-info text-gradient">Tên tài khoản: </span>
              <span for="" class="mb-0 ms-1 text-md-start text-bold">{{ user.username }}</span>
            </div>

            <div class="d-flex align-items-center mt-3">
              <div
                class="text-center bg-white shadow icon icon-md border-radius-md d-flex align-items-center justify-content-center"
              >
                <i class="ni ni-email-83 opacity-10 text-info text-bolder" style="font-size: 18px"></i>
              </div>
              <span class="mb-0 ms-2 text-md-start text-bolder text-info text-gradient">Email: </span>
              <span for="" class="mb-0 ms-1 text-md-start text-bold">{{ this.email }}</span>
            </div>

            <div class="d-flex align-items-center mt-3">
              <div
                class="text-center bg-white shadow icon icon-md border-radius-md d-flex align-items-center justify-content-center"
              >
                <i class="ni ni-headphones opacity-10 text-info text-bolder" style="font-size: 18px"></i>
              </div>
              <span class="mb-0 ms-2 text-md-start text-bolder text-info text-gradient">Số điện thoại: </span>
              <span for="" class="mb-0 ms-1 text-md-start text-bold">{{ user.phone }}</span>
            </div>

            <div class="d-flex align-items-center mt-3">
              <div
                class="text-center bg-white shadow icon icon-md border-radius-md d-flex align-items-center justify-content-center"
              >
                <i class="ni ni-square-pin opacity-10 text-info text-bolder" style="font-size: 18px"></i>
              </div>
              <span class="mb-0 ms-2 text-md-start text-bolder text-info text-gradient">Địa chỉ: </span>
              <span for="" class="mb-0 ms-1 text-md-start text-bold">{{ user.address }}</span>
            </div>

            <div class="d-flex align-items-center mt-3">
              <div
                class="text-center bg-white shadow icon icon-md border-radius-md d-flex align-items-center justify-content-center"
              >
                <i class="ni ni-hat-3 opacity-10 text-info text-bolder" style="font-size: 18px"></i>
              </div>
              <span class="mb-0 ms-2 text-md-start text-bolder text-info text-gradient">Trình độ: </span>
              <span for="" class="mb-0 ms-1 text-md-start text-bold">{{ user.level }}</span>
            </div>
          </div>

          <div class="card card-body mt-3">

          </div>
        </div>

        <div class="col-xl-7 col-md-6 col-12">
          <div class="card card-body">
            <h4 class="text-black text-center">Danh sách bài đăng hệ thống</h4>
            <hr class="horizontal dark">
            <div v-if="isListPost"></div>
            <div v-else class="w-100">
              <div class="d-flex flex-column p-5 border-radius-lg shadow-blur justify-content-center align-items-center bg-gradient-info">
                <span class="text-bold text-white text-2xl text-center w-75">Hiện bạn chưa có bài đăng nào, hãy tương tác với hệ thống nhé</span>
                <NuxtLink to="/blogs" class="btn mt-3 bg-gradient-secondary">Đi đến đăng bài</NuxtLink>
              </div>
            </div>
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
            <form class="form-input" @submit.prevent="onSubmitSetAvatar">
              <div class="avatar">
                <img :src="srcImage" alt="" class="img-avt"/>
              </div>
              <div class="input-item mt-3">
                <label for="imgavatar">Chọn ảnh từ thư viện</label>
                <input
                  ref="imgpostavatar"
                  type="file"
                  id="imgavatar"
                  accept=".jpg, .jpeg, .png"
                  class="file-posts mt-3"
                  @input="changeImage"
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
import {mapActions} from "vuex";
import {getUserInfo, setUserInfo} from "@/utils/cookieAuthen";

export default {
  data() {
    return {
      user: {},
      description: "",
      studyat: "",
      address: "",
      email: "",
      phone: "",
      post: [],
      isListPost: false,
      //
      fileImage: null,
      srcImage: "",
      defaultChangeImage: false,

    };
  },
  methods: {
    ...mapActions("user", {
      getUser: "getUser",
      setAvatar: "setAvatar",
    }),
    openImageUploader() {
      this.srcImage = this.user.avatar;
      this.myModal.show();
    },

    changeImage(event) {
      const file = event.target.files[0];
      this.fileImage = file;

      if (file) {
        this.defaultChangeImage = true;
        console.log(this.fileImage.name, this.defaultChangeImage);
        const reader = new FileReader();
        reader.onload = (e) => {
          this.srcImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    async onSubmitSetAvatar(event) {
      event.preventDefault();
      const formData = new FormData();

      formData.append("user_id", this.user.id);
      formData.append("images", this.fileImage);

      await this.setAvatar(formData).then((response) => {
        this.user.avatar = `${process.env.baseUrl}${response.avatarUrl}`;
        setUserInfo(this.user);
        this.myModal.hide();
      });
    },
  },
  created() {
    this.user = JSON.parse(getUserInfo());
    this.getUser(this.user.id).then((response) => {
      this.email = response.email;
    });
  },
  mounted() {
    this.myModal = bootstrap.Modal.getOrCreateInstance(this.$refs.modal1);
  },
};
</script>

<style lang="scss" scoped>
.box-avatar {
  width: 110px;
  height: 110px;
  position: relative;

  .box-edit-avatar {
    position: absolute;
    bottom: 0px;
    right: 4px;
    z-index: 6;
    cursor: pointer;
  }
}

.icon-edit {
  position: absolute;
  top: 30px;
  right: 40px;
  border-radius: 50%;
  cursor: pointer;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #92a2bf;
  }

  .img-icon {
    width: 80%;
    height: 80%;
    object-fit: cover;
  }
}
</style>
