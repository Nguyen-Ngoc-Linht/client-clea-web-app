<template>
  <div class="w-100 goccuatoi-pages">
    <!-- Pc -->
    <div class="container-fluid">
      <div class="header-page">
        <div class="back-home">
          <button class="btn" @click="backHome">Back</button>
        </div>
      </div>

      <!-- Body -->
      <div class="row">
        <!-- Left -->
        <div class="col-xl-8 col-lg-7 col-sm-6 box-course-task">
          <!-- Row Course -->
          <div class="row">
            <div class="col">
              <div class="w-100 shadow-blur border-radius-lg bg-gradient-info" style="min-height: 320px">
                <div class="d-flex justify-content-between py-2 align-items-center px-4">
                  <div class="text-2xl text-bold text-white">Khóa học của bạn</div>
                  <div class="text-black text-bold cursor-pointer">Xem tất cả</div>
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
              <div class="card">
                <div class="card-header pb-2">
                  <div class="text-bold text-info text-gradient text-2xl">Tài liệu của bạn</div>
                </div>

                <div class="card-body py-2">
                  <div class="row">
                    <div class="col-md-6 col-12">
                      <NuxtLink
                        to="/user/mydocument"
                        class="btn bg-gradient-success w-100"
                      >
                        Tài liệu
                      </NuxtLink>
                    </div>

                    <div class="col-md-6 col-12">
                      <NuxtLink
                        to="/user/mynote"
                        class="btn bg-gradient-primary w-100"
                      >
                        Ghi chú
                      </NuxtLink>
                    </div>
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
        <div class="col-xl-4 col-lg-5 col-sm-6 bg-gradient-light
                    border-radius-xl shadow d-flex align-items-center
                    justify-content-center">
          Coming soon...
        </div>
      </div>
    </div>
    <!-- Mobile -->
  </div>
</template>

<script>
import CourseItem from "@/components/feature/course/CourseItem.vue";
import {getUserInfo} from "@/utils/cookieAuthen";
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
    let user = JSON.parse(getUserInfo());
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
>
.goccuatoi-pages {
  height: 100vh;
  background-color: #f5f5f5;
  max-height: 100vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #7df1f1;
    border-radius: 8px;
  }

  .header-page {
    padding: 0 24px;
    height: 60px;
    display: flex;
    align-items: center;
  }

  .body-course {
    width: 96%;
    margin: 0 auto;
  }

  .box-document {
    //height: 100px;
    box-shadow: 2px 4px 10px rgb(0 0 0 / 15%);
    border-radius: 10px;
    padding-bottom: 12px;

    .header-box {
      height: 52px;
      display: flex;
      padding: 0 24px;
      align-items: center;
      font-size: 22px;
      font-weight: 700;
    }

    .body-box {
      width: 96%;
      margin: 0 auto;

      .item-box {
        width: 100%;
        border-radius: 12px;
        height: 60px;
        border: 0.5px solid #dee2e6;
        padding: 0 20px;
        --bg-color: rgba(238, 100, 91, 0.3);
        background-color: var(--bg-color);
        margin-top: 6px;
        cursor: pointer;
        transition: transform 0.2s ease; /* Thêm hiệu ứng chuyển động */

        &:hover {
          transform: translateY(-3px); /* Di chuyển lên 1px khi hover */
        }

        .item-name {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;

          .text-name {
            font-size: 16px;
            font-weight: 500;
            --color: #ee645b;
            color: var(--color);
          }

          .time-item {
            font-size: 12px;
            color: black;
            font-weight: 600;
          }
        }
      }
    }
  }

  .box-calendar-todolist {
    background-color: white;
    border-radius: 10px;
    height: 500px;
    box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

}

</style>
