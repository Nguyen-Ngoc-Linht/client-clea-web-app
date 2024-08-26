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

        <div class="container-fluid">
          Lộ trình
        </div>
      </div>

      <div class="col-3 bg-gradient-secondary" style="height: 100vh">
        <div class="mt-5 pt-5"></div>

        <div class="card card-body py-2 mt-2 cursor-pointer">
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
import { formatLessonstoChapters } from "@/utils/formData";

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
    setTabCourse(type) {
      this.$router.push(`/courselearning/${type}/${this.course_id}`)
    },
  },
  created() {
    this.course_id = this.$route.params.course_id;
    localStorage.setItem("course_id", this.course_id);
    this.getcourse(this.course_id).then((course) => {
      this.course = course;
      //this.linkImg = `${process.env.baseUrl}${course.urlImage}`;
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
  src="@/assets/scss/pages/course/courselearning.scss"
></style>
