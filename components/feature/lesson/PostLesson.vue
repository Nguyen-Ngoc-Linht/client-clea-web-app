<template>
  <div class="box-post-lesson">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-9">
        <div class="header-post">
          <span class="text">Bạn hãy chia sẻ ý kiến của bạn trong nhóm</span>
        </div>

        <div class="input-blogs mt-2">
          <div class="box-input">
            <div class="avatar-user">
              <img :src="user.avatar" alt="" class="img-avt" />
            </div>

            <div class="input-data">
              <input
                type="text"
                class="input-text"
                placeholder="Hãy chia sẻ kinh nghiệm hoặc vấn đề bạn đang gặp phải?"
              />
            </div>

            <div class="btn-post ms-3">
              <button class="btn btn-dangbai" @click="showModal">
                Đăng bài ngay
              </button>
            </div>
          </div>
        </div>

        <!-- List post -->
        <div class="list-post">
          <div v-for="item in listpost" class="box-post mt-3">
            <!-- Header -->
            <div class="header-post">
              <!-- Avatar -->
              <div class="avatar-user">
                <img :src="item.avataruser" alt="" class="avt-img" />
              </div>
              <div class="user-name ms-2">{{ item.username }}</div>
            </div>
            <div class="post-body row mt-2">
              <!-- Title -->
              <div class="post-content col-8">
                <div class="post-title">
                  {{ item.title }}
                </div>
                <div class="post-text mt-2">
                  {{ item.content }}
                </div>
                <div class="post-time"></div>
              </div>

              <!-- Image -->
              <div class="post-image col-4">
                <div class="image-item">
                  <img :src="item.urlImage" alt="" class="img-post" />
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
  data() {
    return {
      listpost: [
        {
          id: "1",
          avataruser: "https://www.shorturl.at/img/shorturl-icon.png",
          username: "Nguyễn Ngọc Linh",
          urlImage: "https://www.shorturl.at/img/shorturl-icon.png",
          title:
            "LÀ THÀNH VIÊN CỦA F8. BẠN ĐÃ THỰC SỰ SỬ DỤNG F8 HIỆU QUẢ CHƯA?",
          content:
            "`F8` sẽ đưa bạn đến chính xác từng vị trí xảy ra vấn đề. F8 là phím tắt mặc định trong VScode các bạn nhé (không phải cài thêm bất cứ Extensions nào)",
        },
      ],
      user: {},
    };
  },
  methods: {
    showModal() {
      this.$emit("showModal");
    },
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
  },
};
</script>

<style
  lang="scss"
  scoped
  src="@/assets/scss/components/feature/lesson/postlesson.scss"
></style>
