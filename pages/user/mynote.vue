<template>
  <div class="page-my-note">
    <div class="sidebarmynote">
      <div class="note-logo">
        <div class="logo-note">
          <img
            src="~/assets/images/pages/user/note/logo.png"
            alt=""
            class="logo-icon"
          />
        </div>
        <div class="logo-name-app">NotePlus</div>
      </div>

      <div class="note-action">
        <div class="user d-flex align-items-center">
          <div class="avatar-user">
            <img
              src="https://picsum.photos/id/237/536/354"
              alt=""
              class="w-100 h-100"
            />
          </div>

          <div class="user-name ms-2">
            <span class="text"> Nguyen Van A</span>
          </div>
        </div>

        <div class="list-action mt-3">
          <NuxtLink
            to="/user/mynote"
            class="item-action d-flex align-items-center"
            exact-active-class="active"
          >
            <div class="box-icon">
              <img src="" alt="" class="w-100 h-100" />
            </div>

            <span class="ms-2">Ghi chú của bạn</span>
          </NuxtLink>

          <NuxtLink
            to="/user/mynote"
            class="item-action d-flex align-items-center"
            exact-active-class="active"
          >
            <div class="box-icon">
              <img src="" alt="" class="w-100 h-100" />
            </div>

            <span class="ms-2">NoteBooks</span>
          </NuxtLink>

          <NuxtLink
            to="/user/mynote"
            class="item-action d-flex align-items-center"
            exact-active-class="active"
          >
            <div class="box-icon">
              <img src="" alt="" class="w-100 h-100" />
            </div>

            <span class="ms-2">Kế hoạch dự án</span>
          </NuxtLink>

          <NuxtLink
            to="/user/mynote"
            class="item-action d-flex align-items-center"
            exact-active-class="active"
          >
            <div class="box-icon">
              <img src="" alt="" class="w-100 h-100" />
            </div>

            <span class="ms-2">Kế hoạch cá nhân</span>
          </NuxtLink>
        </div>

        <!-- Thoat -->
        <div class="out-note mt-4">
          <button class="btn" @click="backnative">Quay lại</button>
        </div>
      </div>
    </div>

    <!-- Content my note  -->
    <div class="content-mynote">
      <div class="box-write-note row">
        <div class="col-9">
          <div class="write-note" @click="showWriteNote">
            <span class="text">Viết ghi chú của bạn</span>
          </div>
        </div>

        <div class="col-3">
          <div class="noti-note h-100">a</div>
        </div>
      </div>

      <div v-if="iswritenote" class="row">
        <div class="col-12">
          <div class="input-write-note">
            <div class="contentinput"></div>

            <div class="footer-input">
              <button
                class="btn btn-closed"
                @click="
                  {
                    iswritenote = false;
                  }
                "
              >
                Đóng
              </button>
              <button class="btn btn-save">Lưu</button>
            </div>
          </div>
        </div>
      </div>

      <div class="note-account">
        <div class="note-account-title">
          <span class="text">Ghi chú của bạn</span>
        </div>

        <div class="box-tab-note"></div>

        <div class="row list-note">
          <div class="col-lg-4 col-md-6 col-12 mt-3">
            <div class="box-item-note">
              <div class="card-header-note">
                <div class="card-icon">
                  <svg
                    width="23"
                    height="23"
                    class="svg-icon"
                    id="iq-main-01"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>

                <div class="card-tool-bar">
                  <div class="dropdown">
                    <div
                      class="cursor-pointer"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ...
                    </div>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li><a class="dropdown-item" href="#">Xem ghi chú</a></li>
                      <li>
                        <a class="dropdown-item" href="#">Chỉnh sửa</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Xóa</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="card-body-note">
                <div class="card-title">Ngày nghỉ cuối tuần</div>
                <p class="card-content">
                  vui choiw
                  thaosjoasjoiajcfiojsoijsoifajoiiiiiiiiiiiiiiiiiiiiiii
                </p>
              </div>

              <div class="card-footer-note">
                <div class="card-share"></div>

                <div class="card-date">
                  <div class="date-icon"></div>
                  <span class="text">12 Jan 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "empty",
  data() {
    return {
      listnote: [
        {
          icon: "",
        },
      ],
      iswritenote: false,
    };
  },
  methods: {
    backnative() {
      this.$router.push("/goccuatoi");
    },
    showWriteNote() {
      this.iswritenote = true;
    },
  },
  created() {
    console.log(`${process.env.baseUrl}`);
  },
};
</script>

<style lang="scss" scoped src="@/assets/scss/pages/users/mynote.scss"></style>
