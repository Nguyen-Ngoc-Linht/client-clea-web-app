<template>
  <div class="admin-page">
    <!-- Sidebar -->
    <div class="sidebar-admin">
      <div class="header-admin">
        <!-- avatar -->
        <div class="avatar-admin">
          <img
            src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/399478519_1702090053618636_3532707926183260069_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFSyiVQtR8-lDT8XmhKYDV7lAd1BMTp9kaUB3UExOn2RtWoyc1UiusO8Tm7VLiDrZRtpoFv1aILk0qUsgfoVR2P&_nc_ohc=gL5zuf0uPqEAX8_PbtV&_nc_ht=scontent.fhan14-3.fna&oh=00_AfB8JMDJ5NG8A1GEsV9JHhItOBIotGM9xEWFo2JzwbrE0g&oe=6605F6D4"
            alt="avatar"
            class="img-admin"
          />
        </div>
      </div>

      <div class="line"></div>

      <div class="list-manage mt-4">
        <NuxtLink to="/admin/manageuser" class="manage-item">
          <div class="item-icon">
            <img src="~/assets/images/pages/admin/user.svg" class="icon-img" />
          </div>
          <span class="item-name">Quản lý người dùng</span>
        </NuxtLink>

        <NuxtLink to="/admin/manageblogs" class="manage-item">
          <div class="item-icon">
            <img
              src="~/assets/images/pages/admin/baiviet.svg"
              class="icon-img"
            />
          </div>
          <span class="item-name">Quản lý bài viết</span>
        </NuxtLink>

        <NuxtLink to="/admin/managecourse" class="manage-item">
          <div class="item-icon">
            <img
              src="~/assets/images/pages/admin/khoahoc.svg"
              class="icon-img"
            />
          </div>
          <span class="item-name">Quản lý khóa học</span>
        </NuxtLink>

        <NuxtLink to="/admin/managedocument" class="manage-item">
          <div class="item-icon">
            <img
              src="~/assets/images/pages/admin/tailieu.svg"
              class="icon-img"
            />
          </div>
          <span class="item-name">Quản lý tài liệu</span>
        </NuxtLink>

        <NuxtLink to="/admin" class="manage-item">
          <div class="item-icon">
            <img src="~/assets/images/pages/admin/user.svg" />
          </div>
          <span class="item-name">Quản lý quảng cáo</span>
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
export default {};
</script>

<style lang="scss" scoped src="@/assets/scss/base/admin.scss"></style>
