<template>
  <div class="admin-page">
    <!-- Sidebar -->
    <div class="sidebar-admin">
      <div class="header-admin">
        <!-- avatar -->
        <div class="avatar-admin">
          <img :src="users.avatar" alt="avatar" class="img-admin" />
        </div>

        <div class="admin-name ms-1">{{ users.name }}</div>
      </div>

      <div class="line"></div>

      <div class="list-manage mt-4">
        <NuxtLink
          to="/admin/manageuser"
          class="manage-item"
          :class="{ active: tab === 1 }"
          @click.native="setTab(1)"
        >
          <div class="item-icon">
            <img src="~/assets/images/pages/admin/user.svg" class="icon-img" />
          </div>
          <span class="item-name">Quản lý người dùng</span>
        </NuxtLink>

        <NuxtLink
          to="/admin/manageposts"
          class="manage-item"
          :class="{ active: tab === 2 }"
          @click.native="setTab(2)"
        >
          <div class="item-icon">
            <img
              src="~/assets/images/pages/admin/baiviet.svg"
              class="icon-img"
            />
          </div>
          <span class="item-name">Quản lý bài viết</span>
        </NuxtLink>

        <NuxtLink
          to="/admin/managecourse"
          class="manage-item"
          :class="{ active: tab === 3 }"
          @click.native="setTab(3)"
        >
          <div class="item-icon">
            <img
              src="~/assets/images/pages/admin/khoahoc.svg"
              class="icon-img"
            />
          </div>
          <span class="item-name">Quản lý khóa học</span>
        </NuxtLink>

        <NuxtLink
          to="/admin/managedocument"
          class="manage-item"
          :class="{ active: tab === 4 }"
          @click.native="setTab(4)"
        >
          <div class="item-icon">
            <img
              src="~/assets/images/pages/admin/tailieu.svg"
              class="icon-img"
            />
          </div>
          <span class="item-name">Quản lý tài liệu</span>
        </NuxtLink>

        <NuxtLink
          to="/admin"
          class="manage-item"
          :class="{ active: tab === 5 }"
          @click.native="setTab(5)"
        >
          <div class="item-icon">
            <img src="~/assets/images/pages/admin/user.svg" />
          </div>
          <span class="item-name">Quản lý Blogs</span>
        </NuxtLink>
      </div>

      <!-- Quay về trang chủ -->
      <div class="button-navigation">
        <NuxtLink to="/" class="text-navi">Quay về Trang chủ</NuxtLink>
      </div>
    </div>

    <!-- Body -->
    <div class="content-admin">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: {},
      tab: 1,
    };
  },
  methods: {
    setTab(tab) {
      this.tab = tab;
    },
  },
  created() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user != "" && user != null) {
      this.users = user;
    }
  },
};
</script>

<style lang="scss" scoped src="@/assets/scss/base/admin.scss"></style>
