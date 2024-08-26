<template>
  <div class="page-lesson-detail">
    <div class="header-page">
      <span class="text-khoa" @click="backCourse">{{
        lesson.nameChapter
      }}</span>
      <span class="text ms-3 me-3">></span>
      <span class="text-course">{{ lesson.nameLesson }}</span>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-8 col-12">
          <div class="main-content">
            <!-- Video -->
            <div class="video-content">
              <div class="box-video">
                <section class="video-control">
                  <iframe
                    class="videoiframe"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    :src="lesson.details.linkVideo"
                    controls
                  ></iframe>
                </section>
              </div>

              <!-- Description -->
              <div class="description-lesson mt-3">
                <div class="name">
                  <span class="text">{{ lesson.nameLesson }}</span>
                </div>

                <div class="box-button">
                  <button class="btn">Lưu</button>
                  <!-- <button class="btn">Ghi chú</button> -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--  -->
        <div class="col-md-4 col-12">
          <div class="tab-content">
            <div class="list-tab">
              <div
                class="tab-item"
                :class="{ active: tabcontent === 1 }"
                @click="settab(1)"
              >
                <span class="text">Nhiệm vụ</span>
              </div>

              <div
                class="tab-item"
                @click="settab(2)"
                :class="{ active: tabcontent === 2 }"
              >
                <span class="text">Tài liệu</span>
              </div>

              <div
                class="tab-item"
                @click="settab(3)"
                :class="{ active: tabcontent === 3 }"
              >
                <span class="text">Bình luận</span>
              </div>
            </div>
            <!-- Box content -->
            <div class="box-content mt-3">
              <div v-if="tabcontent === 1" class="nhiemvu">Nhiem Vu</div>
              <div v-if="tabcontent === 2" class="tailieu">Tai Lieu</div>
              <div v-if="tabcontent === 3" class="binhluan">
                <Comment :lesson_id="lesson_id" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Comment from "@/components/feature/lesson/Comment";
export default {
  layout: "empty",
  components: {
    Comment,
  },
  data() {
    return {
      lesson: {
        details: {
          linkVideo:
            "https://www.youtube.com/embed/zoELAirXMJY?si=e2KJz0r5TnkCaTFi",
        },
      },
      tabcontent: 1,
      lesson_id: "",
    };
  },
  methods: {
    ...mapActions("lesson", {
      getlessonitem: "getlessonitem",
    }),
    settab(tab) {
      this.tabcontent = tab;
    },
    backCourse() {
      const course_id = localStorage.getItem("course_id");
      this.$router.push(`/course/courselearning/${course_id}`);
    },
  },
  created() {
    this.lesson_id = this.$route.params.lessondetail;
    this.getlessonitem(this.lesson_id).then((response) => {
      // console.log(response);
      this.lesson = response;
    });
  },
};
</script>

<style
  lang="scss"
  scoped
  src="@/assets/scss/pages/lesson/lessondetail.scss"
></style>
