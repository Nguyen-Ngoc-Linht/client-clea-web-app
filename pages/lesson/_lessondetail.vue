<template>
  <div class="w-100 h-100">
    <!--  Header  -->
    <div class="container-fluid mt-2">
      <div class="card card-body bg-gradient-light px-4 py-3">
        <div class="d-flex align-items-center">
          <span class="text-secondary text-bold text-lg cursor-pointer"
                style="font-style: italic"
                @click="backCourse">{{
              lesson.nameChapter
            }}</span>
          <span class="text-secondary text-bold text-lg ms-3 me-3">/</span>
          <span class="text-info text-gradient text-bold text-lg">{{ lesson.nameLesson }}</span>
        </div>
      </div>
    </div>

    <!--  Body  -->
    <div class="container-fluid mt-3">
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
              <div class="d-flex justify-content-between align-items-center px-2 mt-3">
                <div class="name">
                  <span class="text-black text-2xl text-bold">{{ lesson.nameLesson }}</span>
                </div>

                <div class="box-button">
                  <button class="btn bg-gradient-info">Lưu</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--  -->
        <div class="col-md-4 col-12">
          <div class="w-100 d-flex flex-column align-items-center tab-content">
            <div class="d-flex border-radius-lg align-items-center list-tab">
              <div
                class="d-flex justify-content-center align-items-center h-100 cursor-pointer tab-item"
                :class="{ active: tabcontent === 1 }"
                @click="settab(1)"
              >
                <span class="text">Nhiệm vụ</span>
              </div>

              <div
                class="d-flex justify-content-center align-items-center h-100 cursor-pointer tab-item"
                @click="settab(2)"
                :class="{ active: tabcontent === 2 }"
              >
                <span class="text">Tài liệu</span>
              </div>

              <div
                class="d-flex justify-content-center align-items-center h-100 cursor-pointer tab-item"
                @click="settab(3)"
                :class="{ active: tabcontent === 3 }"
              >
                <span class="text">Bình luận</span>
              </div>
            </div>
            <!-- Box content -->
            <div class="box-content card card-body mt-3">
              <div v-if="tabcontent === 1" class="nhiemvu">Nhiem Vu</div>
              <div v-if="tabcontent === 2" class="tailieu">Tai Lieu</div>
              <div v-if="tabcontent === 3" class="binhluan">
                <Comment :lesson_id="lesson_id"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
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
      this.$router.push(`/courselearning/khoa-hoc/${course_id}`);
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
>
.main-content {
  width: 100%;

  .video-content {
    width: 100%;

    .box-video {
      width: 100%;
      padding-top: 56.25%;
      display: block;
      overflow: hidden;
      position: relative;
      border-radius: 16px;

      .video-control {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;

        .videoiframe {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

.tab-content {
  height: calc(100vh - 110px);

  .list-tab {
    width: 98%;
    height: 52px;
    box-shadow: 1px 4px 20px rgba(0, 0, 0, 0.3);
    overflow: hidden;

    .tab-item {
      flex: 1;

      &:hover {
        background-image: linear-gradient(310deg, #2152ff 0%, #21d4fd 100%);
      }

      &.active {
        background-image: linear-gradient(310deg, #2152ff 0%, #21d4fd 100%);
        color: white;
      }

      .text {
        font-weight: 600;
      }
    }
  }

  .box-content {
    height: calc(100% - 60px);
    width: 100%;
    border-radius: 12px;

    .binhluan {
      height: 100%;
    }
  }
}
</style>
