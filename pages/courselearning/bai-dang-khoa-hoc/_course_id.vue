<template>
  <div class="page-course-learning w-100" style="background-color: #f6f7f8">
    <div class="row" style="margin: 0">
      <div class="col-9 box-content-course">
        <div class="header-page w-100" style="height: 60px">
          <div class="d-flex align-items-center h-100">
            <button class="btn mb-0 bg-gradient-info" @click="backnative">Back</button>
          </div>
          <div class="header-course-box h-100 d-flex align-items-center ms-4">
            <span class="text text-2xl text-bolder text-gradient text-info">{{ course.name }}</span>
          </div>
        </div>

        <div class="container-fluid mx-0 px-0 mt-3">
          <div class="row mb-4">
            <div class="col-3">
              Name
            </div>

            <div class="col-9">
              <div class="header-post">
                <span class="text">Bạn hãy chia sẻ ý kiến của bạn trong nhóm</span>
              </div>

              <div class="card card-body input-blogs mt-2">
                <div class="box-input">
                  <div class="avatar-user">
                    <img :src="user.avatar" alt="" class="img-avt" />
                  </div>

                  <div class="input-data">
                    <input
                      type="text"
                      class="input-text form-control"
                      @click="showModal"
                      placeholder="Hãy chia sẻ kinh nghiệm hoặc vấn đề bạn đang gặp phải?"
                    />
                  </div>

                  <div class="btn-post ms-3">
                    <button class="btn bg-gradient-info mb-0" @click="showModal">
                      Đăng bài ngay
                    </button>
                  </div>
                </div>
              </div>

              <!--       Danh sách bài đăng       -->
              <div class="list-post">
                <div v-for="item in listpost" class="card card-body mt-3" style="min-height: 180px">
                  <!-- Header -->
                  <div class="d-flex align-items-center w-100">
                    <!-- Avatar -->
                    <div class="avatar">
                      <img :src="item.avataruser" alt="" class="avatar" style="border-radius: 50%"/>
                    </div>
                    <div class="text-bolder ms-2 text-black text-lg">{{ item.username }}</div>
                  </div>

                  <div class="w-100 row mt-2">
                    <!-- Title -->
                    <div class="col-8">
                      <div class="text-2xl text-black text-bolder cursor-pointer">
                        {{ item.title }}
                      </div>
                      <div class="text-secondary text-sm mt-2">
                        {{ item.body }}
                      </div>
                      <div class="post-time"></div>
                    </div>

                    <!-- Image -->
                    <div class="col-4">
                      <div class="d-flex w-100 h-100 align-items-center justify-content-center">
                        <img :src="item.imageLink" class="w-100" style="object-fit: cover"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-3 bg-gradient-secondary" style="height: 100vh">
        <div class="mt-5 pt-5"></div>

        <div class="card card-body py-2 mt-2 cursor-pointer" @click="setTabCourse('lo-trinh')">
          <div class="d-flex align-items-center">
            <i class="ni ni-bullet-list-67 text-info text-gradient"></i>

            <div class="d-flex justify-content-center align-items-center ms-3">
              <span class="text-secondary text-lg text-bold">Lộ trình</span>
            </div>
          </div>
        </div>

        <div class="card card-body py-2 mt-2 cursor-pointer" @click="setTabCourse('chat-khoa-hoc')">
          <div class="d-flex align-items-center">
            <i class="ni ni-chat-round text-info text-gradient"></i>

            <div class="d-flex justify-content-center align-items-center ms-3">
              <span class="text-secondary text-lg text-bold">Kênh chat</span>
            </div>
          </div>
        </div>

        <div class="card card-body py-2 mt-2 cursor-pointer">
          <div class="d-flex align-items-center">
            <i class="ni ni-collection text-info text-gradient"></i>

            <div class="d-flex justify-content-center align-items-center ms-3">
              <span class="text-secondary text-lg text-bold">Bài đăng</span>
            </div>
          </div>
        </div>

        <div class="card card-body py-2 mt-2 cursor-pointer" @click="setTabCourse('kiem-tra')">
          <div class="d-flex align-items-center">
            <i class="ni ni-single-copy-04 text-info text-gradient"></i>

            <div class="d-flex justify-content-center align-items-center ms-3">
              <span class="text-secondary text-lg text-bold">Kiểm tra/Bài tập</span>
            </div>
          </div>
        </div>

        <hr class="horizontal dark">

        <div class="card card-plain px-3">
          <h4 class="">Chủ đề</h4>
        </div>

        <div class="card card-body py-2 mt-2 cursor-pointer" @click="setTabCourse('khoa-hoc')">
          <div class="d-flex align-items-center">
            <i class="ni ni-bullet-list-67 text-info text-gradient"></i>

            <div class="d-flex justify-content-center align-items-center ms-3">
              <span class="text-secondary text-lg text-bold">Bài giảng</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <Footter/>

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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Footter from "~/components/common/Footter.vue";

import {mapActions} from "vuex";
import {formatLessonstoChapters} from "@/utils/formData";
import {getUserInfo} from "@/utils/cookieAuthen";

export default {
  layout: "empty",
  middleware: "dangkykhoahoc",
  components: {
    Footter,
  },
  data() {
    return {
      user: {},
      course: {},
      chapters: [],
      ishavelesson: true,
      tabchapter: 0,
      tab: 1,
      titlepost: "",
      contentpost: "",
      course_id: "",
      listpost: [],
    };
  },
  methods: {
    ...mapActions("lesson", {
      getlesson: "getlesson",
    }),
    ...mapActions("course", {
      getcourse: "getcourse",
    }),
    ...mapActions("post", {
      createpostcourse: "createpostcourse",
      getpostcourse: "getpostcourse",
    }),
    showModal() {
      this.myModal.show();
    },
    backnative() {
      this.$router.push("/course");
    },
    async onSubmit(event) {
      event.preventDefault();

      console.log(this.titlepost, this.contentpost);

      const formData = new FormData();

      if (this.contentpost != "" && this.titlepost != "") {
        formData.append("title", this.titlepost);
        formData.append("body", this.contentpost);
        formData.append("course_id", this.course_id);
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

      await this.createpostcourse(formData).then((response) => {
        if (response) {
          this.myModal.hide();
        }
      });
    },
    setTabCourse(type) {
      this.$router.push(`/courselearning/${type}/${this.course_id}`)
    },
  },
  async created() {
    this.course_id = this.$route.params.course_id;
    localStorage.setItem("course_id", this.course_id);
    this.getcourse(this.course_id).then((course) => {
      this.course = course;
      //this.linkImg = `${process.env.baseUrl}${course.urlImage}`;
    });

    this.user = JSON.parse(getUserInfo());
    this.getpostcourse(this.course_id).then((postcourse) => {
      this.listpost = postcourse;
    });
  },
  mounted() {
    this.myModal = bootstrap.Modal.getOrCreateInstance(this.$refs.modal1);
  },
};
</script>

<style
  lang="scss"
  scoped
>
.page-course-learning {
  overflow-y: auto;
  max-height: 100vh;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #7df1f1;
    border-radius: 8px;
  }

  .header-page {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 60px;

    .btn-back {
      font-size: 20px;
      font-weight: 600;
    }
  }

  .header-post {
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 40px;
    font-size: 24px;
    font-weight: 500;
  }
  .box-input {
    align-items: center;
    width: 100%;
    display: flex;

    .avatar-user {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;

      .img-avt {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .input-data {
      margin-left: 20px;
      height: 48px;
      flex: 1;

      .input-text {
        padding: 0 20px;
        width: 100%;
        height: 100%;
        border-radius: 36px;
        border: 2px solid #e8e8e8;
      }
    }
  }

  .form-input {
    .input-item {
      display: flex;
      flex-direction: column;

      .input-title {
        margin-top: 4px;
        height: 42px;
        border-radius: 12px;
        border: 0.7px solid rgba(0, 0, 0, 0.2);
        outline: none;
        padding: 0 16px;
      }
    }
  }
}
</style>
