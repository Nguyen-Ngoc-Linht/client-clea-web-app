<template>
  <div class="page-course-learning w-100" style="background-color: #f6f7f8">
    <div class="row" style="margin: 0">
      <div class="col-9">
        <div class="header-page w-100" style="height: 60px">
          <div class="d-flex align-items-center h-100">
            <button class="btn mb-0 bg-gradient-info" @click="backnative">Back</button>
          </div>
          <div class="header-course-box h-100 d-flex align-items-center ms-4">
            <span class="text text-2xl text-bolder text-gradient text-info">{{ course.name }}</span>
          </div>
        </div>

        <div class="container-fluid mt-3">
          <div class="row">
            <div class="nav-tab-wrap">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active"
                          id="upcoming-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#upcoming"
                          type="button"
                          role="tab"
                          aria-controls="upcoming"
                          aria-selected="true">
                    <span class="text-black">Chưa nộp</span>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link"
                          id="pastdue-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#pastdue"
                          type="button"
                          role="tab"
                          aria-controls="pastdue"
                          aria-selected="true">
                    <span class="text-black">Quá hạn</span>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link"
                          id="completed-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#completed"
                          type="button"
                          role="tab"
                          aria-controls="completed"
                          aria-selected="true">
                    <span class="text-black">Hoàn thành</span>
                  </button>
                </li>
              </ul>

              <div class="tab-content mt-3" id="myTabContent">
                <div class="tab-pane fade show active"
                     id="upcoming"
                     role="tabpanel"
                     aria-labelledby="upcoming-tab"
                >
                  <div class="row">
                    <div class="">
                      <h6>Tên bài kiểm tra</h6>
                      <div class="card card-body">

                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade"
                     id="pastdue"
                     role="tabpanel"
                     aria-labelledby="pastdue-tab"
                >
                  Due Tab
                </div>

                <div class="tab-pane fade"
                     id="completed"
                     role="tabpanel"
                     aria-labelledby="completed-tab"
                >
                  Completed Tab
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

        <div class="card card-body py-2 mt-2 cursor-pointer" @click="setTabCourse('bai-dang-khoa-hoc')">
          <div class="d-flex align-items-center">
            <i class="ni ni-collection text-info text-gradient"></i>

            <div class="d-flex justify-content-center align-items-center ms-3">
              <span class="text-secondary text-lg text-bold">Bài đăng</span>
            </div>
          </div>
        </div>

        <div class="card card-body py-2 mt-2 cursor-pointer">
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
    <Footter />
  </div>
</template>

<script>
import Footter from "~/components/common/Footter.vue";

import { mapActions } from "vuex";

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
      course_id: "",
    };
  },
  methods: {
    ...mapActions("course", {
      getcourse: "getcourse",
    }),
    backnative() {
      this.$router.push("/course");
    },
    setTabCourse(type) {
      this.$router.push(`/courselearning/${type}/${this.course_id}`)
    },
  },
  created() {
    this.course_id = this.$route.params.course_id;
    localStorage.setItem("course_id", this.course_id);
    this.getcourse(this.course_id).then((course) => {
      this.course = course;
    });
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
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

  .nav-item {

    .nav-link {
      &.active {
        span {
          font-weight: 700;
          background-image: linear-gradient(310deg, #2152ff, #21d4fd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          z-index: 1;
        }
      }

      &:hover {
        span {
          background-image: linear-gradient(310deg, #2152ff, #21d4fd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          z-index: 1;
        }
      }
    }

  }


}
</style>
