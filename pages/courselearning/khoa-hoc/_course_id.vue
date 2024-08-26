<template>
  <div class="page-course-learning w-100" style="background-color: #f6f7f8">
    <div class="row" style="margin: 0">
      <div class="col-9 box-content-course" style="min-height: 100vh">
        <div class="header-page w-100" style="height: 60px">
          <div class="d-flex align-items-center h-100">
            <button class="btn mb-0 bg-gradient-info" @click="backnative">Back</button>
          </div>
          <div class="header-course-box h-100 d-flex align-items-center ms-4">
            <span class="text text-2xl text-bolder text-gradient text-info">{{ course.name }}</span>
          </div>
        </div>

        <div class="container-fluid mt-3">
          <div v-if="ishavelesson" class="list-lesson">
            <div v-for="(item, index) in chapters" class="box-chapter mb-4">
              <button
                class="btn w-100 d-flex"
                :class="{ chapterselected: tabchapter === index }"
                :data-index="item"
                data-bs-toggle="collapse"
                :data-bs-target="'#chapter' + index"
                :aria-controls="'#chapter' + index"
                aria-expanded="false"
              >
                <label class="text">{{ item.chaptername }}</label>
                <i
                  v-if="item.isVisible"
                  class="fa-solid fa-angle-up fa-fw me-3"
                  style="font-size: 24px; margin-top: 4px"
                >
                </i
                ><i
                v-else
                class="fa-solid fa-angle-down fa-fw me-3"
                style="font-size: 24px; margin-top: 4px"
              >
              </i>
              </button>

              <!-- Danh sách bài giảng trong chương list-box-lesson -->
              <div :id="'chapter' + index"  class="grid list-box-lesson collapse">
                <div class="row">
                  <div
                    v-for="lesson in item.listlesson"
                    class="mt-3 col-6 col-xl-3 col-lg-4 col-md-5 col-xxl-3 col-sm-6 col-12 col-xs-5"
                  >
                    <LessonBox
                      :key="lesson.id"
                      :id="lesson.id"
                      :name="lesson.name"
                      :image="lesson.image"
                      :type="lesson.type"
                      :content="lesson.content"
                      @lessonClicked="handleLessonClicked"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="box-empty-lesson">
            Khóa học này chưa có bài học nào...
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

        <div class="card card-body py-2 mt-2 cursor-pointer" @click="setTabCourse('bai-dang-khoa-hoc')">
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

        <div class="card card-body py-2 mt-2 cursor-pointer">
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
    <Footter />
    <!-- Modal -->
    <div
      ref="modallearning"
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
import LessonBox from "~/components/feature/lesson/LessonBox.vue";
import PostLesson from "@/components/feature/lesson/PostLesson.vue";

import { mapActions } from "vuex";
import { formatLessonstoChapters } from "@/utils/formData";

export default {
  layout: "empty",
  middleware: "dangkykhoahoc",
  components: {
    Footter,
    LessonBox,
    PostLesson,
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
    }),
    backnative() {
      this.$router.push("/course");
    },
    openmodal() {
      this.myModal.show();
    },
    handleLessonClicked(id, type, content) {
      this.$router.push(`/lesson/${id}`);
    },
    setTabCourse(type) {
      this.$router.push(`/courselearning/${type}/${this.course_id}`)
    },
    async onSubmit(event) {
      event.preventDefault();

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
  },
  created() {
    this.course_id = this.$route.params.course_id;
    localStorage.setItem("course_id", this.course_id);
    this.getcourse(this.course_id).then((course) => {
      this.course = course;
      //this.linkImg = `${process.env.baseUrl}${course.urlImage}`;
    });

    this.getlesson(this.course_id).then((response) => {
      if (Array.isArray(response) && response.length > 0) {
        const chapterformat = formatLessonstoChapters(response);
        this.chapters = chapterformat;
        this.chapters[0].isVisible = true;
      } else {
        this.ishavelesson = false;
        // Xử lý trường hợp không có dữ liệu hoặc dữ liệu không hợp lệ
        console.error("Dữ liệu không hợp lệ hoặc không có dữ liệu.");
      }
    });
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.myModal = bootstrap.Modal.getOrCreateInstance(
      this.$refs.modallearning
    );
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

  .box-content-course {
    overflow-y: auto;
    max-height: 100vh;

    &::-webkit-scrollbar {
      width: 0.2px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #7df1f1;
      border-radius: 8px;
    }
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

  .header-course-box {
    height: 66px;
    .text {
      font-size: 36px;
      font-weight: 600;
    }
  }

  .nav-tab-wrap {
    .nav-tabs {
      display: flex;
      align-items: center;
      //justify-content: center;

      .nav-item {
        font-size: 18px;

        .nav-link {
          border: none;
          font-weight: 700;
          color: black;

          &.active {
            border-bottom: 4px solid #1ab69d;
            color: #1ab69d;
          }
        }
      }
    }
  }

  .box-chapter {
    width: 100%;

    .name-chapter {
      width: 100%;
      border: none;
      outline: none;
      height: 56px;
      //order-bottom: 1px solid #000;
      //border-top: 1px solid #000;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 10px;
      background-color: #f4f4f4;

      &.chapterselected {
        background-color: #c9efff;
      }

      .text {
        margin-left: 10px;
      }
    }
  }

  .box-empty-lesson {
    height: 400px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
  }
}
</style>
