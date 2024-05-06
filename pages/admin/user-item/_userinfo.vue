<template>
  <div class="bog-item-course">
    <!-- header course-item -->
    <div class="header-item">
      <NuxtLink
        to="/admin/manageuser"
        style="text-decoration: none; color: black"
        >Quản lý người dùng
      </NuxtLink>
      / Quản lý tài khoản cá nhân
    </div>

    <!-- Body -->
    <div class="body-item mt-3">
      <div class="title">Quản lý User</div>

      <!-- course -->
      <div class="user-item mt-4">
        <div class="content">
          <span class="text-header">Thông tin tài khoản</span>
          <div class="detail">
            <div class="avatar-box">
              <img :src="user.avatarUrl" alt="" class="imgavt" />
            </div>

            <div class="item-info">
              <div class="item-title">Tên tài khoản:</div>
              <span class="item-value">{{ user.userName }}</span>
            </div>

            <div class="item-info">
              <div class="item-title">Họ tên:</div>
              <span class="item-value">{{ user.name }}</span>
            </div>

            <div class="item-info">
              <div class="item-title">Tuổi:</div>
              <span class="item-value">{{ user.age }}</span>
            </div>

            <div class="item-info">
              <div class="item-title">Email:</div>
              <span class="item-value">{{ user.email }}</span>
            </div>

            <div class="item-info">
              <div class="item-title">Chức vụ:</div>
              <span class="item-value">{{ user.role }}</span>
            </div>
          </div>
        </div>

        <div class="list-btn mt-4">
          <div class="item-btn">
            <button type="submit" class="btn btn-info" @click="setroleUser">
              Set quyền
            </button>
          </div>

          <div class="item-btn">
            <button class="btn btn-danger">Chặn tài khoản</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <!--  -->
    <!--  -->
    <!--  -->
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
              Chọn quyền mà bạn muốn set cho tài khoản này
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <!-- Body -->
          <div class="modal-body">
            Lưu ý: Khi quyền là quản trị viên, bạn không thể set được quyền cho
            những tài khoản có cùng role === ADMIN
            <select
              v-model="role"
              class="form-select mt-2"
              aria-label="Default select example"
            >
              <option selected>Chọn quyền phân cho tài khoản</option>
              <option value="ADMIN">ADMIN</option>
              <option value="MINISTRY">MINISTRY</option>
              <option value="USER">USER</option>
              <option value="TEACHER">TEACHER</option>
              <option value="TUTORS">TUTORS</option>
            </select>
          </div>
          <!-- Footer -->
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Đóng
            </button>
            <button type="button" class="btn btn-primary" @click="updateRole">
              Cập nhật
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  layout: "admin",
  data() {
    return {
      user: {},
      role: "",
      isupdatecourse: false,
    };
  },
  methods: {
    ...mapActions("user", {
      getUser: "getUser",
      setrole: "setrole",
    }),
    setroleUser() {
      if (this.user.role === "ADMIN") {
        alert("Bạn không thể set quyền cho tài khoản này!!");
      } else {
        this.myModal.show();
      }
    },
    updateRole() {
      this.setrole({ userId: this.user._id, role: this.role }).then(
        (response) => {
          alert("Bạn đã cập nhật quyền cho tài khoản thành công!!");
          this.user.role = this.role;
          this.myModal.hide();
        }
      );
    },
  },
  created() {
    const user_id = this.$route.params.userinfo;
    this.getUser(user_id).then((response) => {
      this.user = response;
      this.role = response.role;
    });
  },
  mounted() {
    this.myModal = bootstrap.Modal.getOrCreateInstance(this.$refs.modal);
  },
};
</script>

<style
  lang="scss"
  scoped
  src="@/assets/scss/pages/admin/manageuser/useritem.scss"
></style>
