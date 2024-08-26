<template>
  <div class="goccuatoi-pages">
    <!-- Pc -->
    <div class="page-lap">
      <div class="header-page">
        <div class="back-home">
          <button class="btn" @click="backHome">Back</button>
        </div>
      </div>

      <!-- Body -->
      <div class="body-page">
        <div class="row">
          <!-- Left -->
          <div class="col-xl-8 col-lg-7 col-sm-6 box-course-task">
            <!-- Row Course -->
            <div class="row mt-2">
              <div class="col">
                <div class="course-layout">
                  <div class="header-course">
                    <div class="text-header">Khóa học của bạn</div>
                    <div class="see-all">Xem tất cả</div>
                  </div>
                  <!-- Body course -->
                  <div class="body-course row">
                    <div
                      v-for="item in listcourse"
                      class="col-md-4"
                      @click="clickCourse(item.course_id)"
                    >
                      <CourseItem
                        :id="item.id"
                        :image="item.pathImage"
                        :nameCourse="item.course_name"
                        :numberMembers="item.nbmembers"
                        class="mt-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Row - task - document -->
            <div class="row mt-3">
              <!-- Document -->
              <div class="col-md-4">
                <div class="box-task">
                  <div class="header-box">
                    <div class="text-box">Tài liệu của bạn</div>
                  </div>

                  <div class="body-box">
                    <div class="box-button">
                      <NuxtLink
                        to="/user/mydocument"
                        class="btn button-document"
                        style="background-color: #9df99d"
                      >
                        Tài liệu
                      </NuxtLink>
                    </div>

                    <div class="box-button">
                      <NuxtLink
                        to="/user/mynote"
                        class="btn button-document"
                        style="background-color: #bfbeef"
                      >
                        Ghi chú
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Task -->
              <div class="col-md-8">
                <div class="box-document">
                  <div class="header-box">Nhiệm vụ của bạn</div>

                  <!-- Body box -->
                  <div class="body-box">
                    <div
                      v-for="item in listtask"
                      class="item-box"
                      :style="bgstyle(item.bgcolor)"
                    >
                      <div class="item-name">
                        <span class="text-name">
                          {{ item.nametask }}
                        </span>
                        <span class="time-item"
                          >Hạn cuối: {{ item.deadline }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right -->
          <div class="col-xl-4 col-lg-5 col-sm-6 box-calendar-todolist">
            Coming soon...
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile -->
  </div>
</template>

<script>
import CourseItem from "@/components/feature/course/CourseItem.vue";
import { mapActions } from "vuex";

export default {
  layout: "goccuatoilayout",
  middleware: "authenication",
  components: {
    CourseItem,
  },
  data() {
    return {
      listcourse: [],
      listtask: [
        {
          id: "1",
          nametask: "Làm bài tập về nhà môn A",
          deadline: "9:00 - 17/04/2024",
          bgcolor: "rgba(238, 100, 91, 0.3)",
          color: "#ee645b",
        },
        {
          id: "2",
          nametask: "Làm bài tập về nhà môn A",
          deadline: "9:00 - 17/04/2024",
          bgcolor: "rgba(238, 100, 91, 0.3)",
          color: "red",
        },
        {
          id: "3",
          nametask: "Làm bài tập về nhà môn A",
          deadline: "9:00 - 17/04/2024",
          bgcolor: "red",
          color: "#ee645b",
        },
        {
          id: "4",
          nametask: "Làm bài tập về nhà môn A",
          deadline: "9:00 - 17/04/2024",
          bgcolor: "rgba(238, 100, 91, 0.3)",
          color: "#ee645b",
        },
      ],
    };
  },
  methods: {
    ...mapActions("courseuser", {
      getcourseuser: "getcourseuser",
    }),
    backHome() {
      this.$router.push("/");
    },
    bgstyle(bgcolor) {
      return {
        "background-color": bgcolor,
      };
    },
    clickCourse(course_id) {
      console.log(course_id);
      this.$router.push(`/course/courselearning/${course_id}`);
    },
  },
  created() {
    let user = JSON.parse(localStorage.getItem("user"));
    this.getcourseuser(user.id).then((respone) => {
      // console.log(respone);
      this.listcourse = respone;
    });
  },
};
</script>

<style
  lang="scss"
  scoped
  src="@/assets/scss/pages/goccuatoi/index.scss"
></style>
