<template>
  <div class="blogs">
    <div class="header-blogs grid">
      <!-- Nội dung -->
      <div class="header-content">
        <span class="header-by mb-3">Bài viết nổi bật</span>
        <span class="header-detail mb-2"
          >Tổng hợp các bài viết chia sẻ về kinh nghiệm học tập, giải đáp thắc
          mắc.</span
        >
        <span class="header-text"
          >Chỉ với việc đơn giản đăng bài viết lên hệ thống, thành viên sẽ chia
          sẻ và hỗ trợ cùng các bạn, với thao tác đơn giản và linh hoạt hy vọng
          sẽ đem lại trải nghiệm tốt cho bạn.</span
        >
        <div class="btn-action mt-4">
          <button class="btn btn-start">Bắt đầu ngay</button>
        </div>
      </div>

      <!-- Ảnh minh họa -->
      <div class="header-img">
        <img
          alt="Đăng bài viết cùng CLEA"
          class="img-blogs"
          src="~/assets/images/pages/blogs/blogs.svg"
        />
      </div>
    </div>

    <!-- Input Đăng bài viết -->
    <div class="input-blogs mt-4">
      <div class="box-input">
        <div class="avatar-user">
          <img :src="user.avatar" alt="" class="img-avt" />
        </div>

        <div class="input-data">
          <input
            type="text"
            class="input-text"
            placeholder="Hãy chia sẻ kinh nghiệm hoặc vấn đề bạn đang gặp phải?"
            @click="showboxInput"
          />
        </div>
      </div>
    </div>

    <!-- List Blogs -->
    <div class="listblogs">
      <span class="listblogsheader">Cùng xem danh sách bài viết.</span>
      <div class="list-blog">
        <div v-for="item in listposts" class="box-post mt-3">
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
                {{ item.body }}
              </div>
              <div class="post-time"></div>
            </div>

            <!-- Image -->
            <div class="post-image col-4">
              <div class="image-item">
                <img :src="item.imageLink" alt="" class="img-post" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Chuyển trang -->
      <div class="nativ mt-3">
        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link">Trang trước</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">...</a></li>
            <li class="page-item"><a class="page-link" href="#">9</a></li>
            <li class="page-item"><a class="page-link" href="#">10</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Trang sau</a>
            </li>
          </ul>
        </nav>
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
            <h4>Chia sẻ suy nghĩ và câu chuyện của bạn!!</h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form class="form-input" @submit.prevent="onSubmit">
              <div class="input-item">
                <label for="">Nhập tiêu đề cho bài viết của bạn</label>
                <input v-model="titlepost" type="text" class="input-title" />
              </div>

              <div class="input-item mt-3">
                <label for="">Nội dung của bạn</label>
                <textarea
                  v-model="contentpost"
                  class="text-area-input mt-2"
                ></textarea>
              </div>

              <div class="input-item mt-3">
                <label for="">Đính kèm ảnh cho bài viết</label>
                <input
                  ref="imgpost"
                  type="file"
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
                  Tạo bài viết
                </button>
              </div>
            </form>
          </div>
          <!-- <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  layout: "default",
  data() {
    return {
      titlepost: "",
      contentpost: "",
      user: {},
      listposts: [],
    };
  },
  methods: {
    ...mapActions("post", {
      createpost: "createpost",
      getpost: "getpost",
    }),
    showboxInput() {
      this.titlepost = "";
      this.contentpost = "";
      this.$refs.imgpost.files = null;
      this.myModal.show();
    },
    async onSubmit(event) {
      event.preventDefault();

      console.log(this.titlepost, this.contentpost);

      const formData = new FormData();

      if (this.contentpost != "" && this.titlepost != "") {
        formData.append("title", this.titlepost);
        formData.append("body", this.contentpost);
        formData.append("user_id", this.user.id);
        formData.append("status", "HAHA");

        if (this.$refs.imgpost.files.length > 0) {
          const file = this.$refs.imgpost.files[0];
          console.log(file);
          formData.append("images", file);
        }
      } else {
        alert("Bạn chưa nhập đủ thông tin");
        return;
      }

      await this.createpost(formData).then((response) => {
        if (response) {
          this.myModal.hide();
        }
      });
    },
  },
  created() {
    this.getpost().then((response) => {
      this.listposts = response;
    });
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    // Lấy ra thể hiện của modal từ DOM element có tham chiếu 'modal'
    this.myModal = bootstrap.Modal.getOrCreateInstance(this.$refs.modal1);
  },
};
</script>

<style lang="scss" scoped src="@/assets/scss/pages/blogs/index.scss"></style>
