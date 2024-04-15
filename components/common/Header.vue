<template>
  <div class="header_page">
    <!-- Logo -->
    <div class="logo-page">
      <img class="logon-img" alt="Clea" src="~/assets/images/base/Logo.svg" />
    </div>
    <!-- Options -->
    <div class="options">
      <!-- options-tab  -->
      <div class="options-tab">
        <NuxtLink
          to="/"
          class="tab-item"
          @click.native="setTab(1)"
          :class="{ activetab: tab === 1 }"
          ><span class="text-item">Trang chủ</span></NuxtLink
        >
        <NuxtLink
          to="/course"
          class="tab-item"
          @click.native="setTab(2)"
          :class="{ activetab: tab === 2 }"
          ><span class="text-item">Khóa học</span></NuxtLink
        >
        <NuxtLink
          to="/blogs"
          class="tab-item"
          @click.native="setTab(3)"
          :class="{ activetab: tab === 3 }"
          ><span class="text-item">Bài viết</span></NuxtLink
        >
        <NuxtLink
          to="/abouts"
          class="tab-item"
          @click.native="setTab(4)"
          :class="{ activetab: tab === 4 }"
          ><span class="text-item">Về chúng tôi</span></NuxtLink
        >
      </div>

      <!-- User -->
      <div v-if="ischeckSignin" class="box-login">
        <NuxtLink to="/auths/login" class="btn btn-login">Đăng nhập</NuxtLink>
        <NuxtLink to="/auths/signup" class="btn btn-signup">Đăng ký</NuxtLink>
      </div>

      <div v-else class="avatar-user">
        <div class="avatar-img">
          <img class="img-avt" :src="avatar" />
        </div>

        <div class="box-name ms-2">
          <span class="text-name">{{ username }}</span>
          <div class="name-settings ms-1">
            <button
              id="btnGroupDrop1"
              type="button"
              class="btn select-down"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              v
            </button>
            <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <li class="dropdown-item">
                <NuxtLink
                  to="/user/profile"
                  style="text-decoration: none; color: black"
                  >Trang cá nhân</NuxtLink
                >
              </li>
              <li v-if="isadmin" class="dropdown-item">
                <NuxtLink
                  to="/admin"
                  style="text-decoration: none; color: black"
                  >Quản lý hệ thống</NuxtLink
                >
              </li>
              <li class="dropdown-item">
                <NuxtLink
                  to="/goccuatoi"
                  style="text-decoration: none; color: black"
                  >Góc của tôi</NuxtLink
                >
              </li>
              <li class="dropdown-item">
                <NuxtLink
                  to="/games"
                  style="text-decoration: none; color: black"
                  >Trò chơi</NuxtLink
                >
              </li>
              <li class="dropdown-item">Tài liệu của tôi</li>
              <li class="dropdown-item" @click="handleLogout">Đăng xuất</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Avatar -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 1,
      ischeckSignin: true,
      username: "",
      avatar: "",
      isadmin: true,
    };
  },
  methods: {
    setTab(newtab) {
      this.tab = newtab;
    },
    handleLogout() {
      console.log("Đã đăng xuất ở đây");
      localStorage.removeItem("token");
      this.$router.push("/auths/login");
    },
  },
  created() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user != "" && user != null) {
      this.ischeckSignin = false;
      this.username = user.name;
      this.avatar = user.avatar;
    }
  },
};
</script>

<style
  lang="scss"
  scoped
  src="@/assets/scss/components/common/header.scss"
></style>
