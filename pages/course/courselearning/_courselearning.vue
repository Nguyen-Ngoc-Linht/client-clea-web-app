<template>
  <div class="page-course-learning">
    <div class="header-page">
      <button class="btn btn-back" @click="backnative">Back</button>
    </div>
    <!--  -->
    <div class="box-course-learninng">
      <div class="header-course-box">
        <span class="text">{{ course.name }}</span>
        <div class="list-info">
          <div class="info-item">
            <div class="item-img">
              <img src="" alt="" class="img-item" />
            </div>
            <div class="item-name"></div>
          </div>

          <div class="info-item">
            <div class="item-img">
              <img src="" alt="" class="img-item" />
            </div>
            <div class="item-name"></div>
          </div>

          <div class="info-item">
            <div class="item-img">
              <img src="" alt="" class="img-item" />
            </div>
            <div class="item-name"></div>
          </div>
        </div>
      </div>

      <div class="nav-tab-wrap">
        <!-- Nav -->
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="overview-tab"
              data-bs-toggle="tab"
              data-bs-target="#overview"
              type="button"
              role="tab"
              aria-controls="overview"
              aria-selected="true"
            >
              Nội dung
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="posts-course"
              data-bs-toggle="tab"
              data-bs-target="#postcourse"
              type="button"
              role="tab"
              aria-controls="postcourse"
              aria-selected="true"
            >
              Bài đăng
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="carriculam-tab"
              data-bs-toggle="tab"
              data-bs-target="#carriculam"
              type="button"
              role="tab"
              aria-controls="carriculam"
              aria-selected="false"
            >
              Thông tin chi tiết
            </button>
          </li>
        </ul>

        <!-- Content -->
        <div class="tab-content mt-3" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="overview"
            role="tabpanel"
            aria-labelledby="overview-tab"
          >
            <div v-if="ishavelesson" class="list-lesson">
              <div v-for="(item, index) in chapters" class="box-chapter mb-4">
                <button
                  class="name-chapter"
                  :class="{ chapterselected: tabchapter === index }"
                  :data-index="item"
                  @click="handleClickChapter(index)"
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
                <div v-if="item.isVisible" class="grid list-box-lesson">
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
          <!-- Danh sach bai dang -->
          <div
            class="tab-pane fade"
            id="postcourse"
            role="tabpanel"
            aria-labelledby="posts-course"
          >
            <div class=""><PostLesson @showModal="openmodal" /></div>
          </div>
          <!-- Thong tin chi tiet lien quan -->
          <div
            class="tab-pane fade"
            id="carriculam"
            role="tabpanel"
            aria-labelledby="carriculam-tab"
          >
            <div class="course-tab-content">
              <div class="course-curriculam">
                <div class="heading-title">
                  <h3 class="title">Course Content</h3>
                  <div class="expand-btn">
                    <button class="edu-btn btn-medium">
                      Expand All <i class="icon-31"></i>
                    </button>
                  </div>
                </div>
                <div class="accordion edu-accordion" id="accordionExample">
                  <h4 class="heading-title">Introduction</h4>
                  <div class="accordion-item">
                    <h3 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Lesson 1.1
                        <span class="expand">Expand</span>
                      </button>
                    </h3>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <div class="course-lesson">
                          <div class="reading-status">
                            <h5 class="title">
                              <i class="icon-65"></i> Lesson Content
                            </h5>
                            <span class="complete-text">
                              <span>0% COMPLETE</span>
                              <span>0/1 Steps</span>
                            </span>
                          </div>
                          <ul>
                            <li>Topic 1 – Grounding</li>
                            <li>Topic 2 – Igniting</li>
                            <li>Topic 3 – Awareness</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item no-collapsed">
                    <h2 class="accordion-header">
                      <button class="accordion-button">Lesson 1.2</button>
                    </h2>
                  </div>
                  <div class="accordion-item no-collapsed">
                    <h2 class="accordion-header">
                      <button class="accordion-button">Lesson 1.3</button>
                    </h2>
                  </div>
                  <h4 class="heading-title">Section 2</h4>
                  <div class="accordion-item no-collapsed">
                    <h2 class="accordion-header">
                      <button class="accordion-button">Lesson 2.1</button>
                    </h2>
                  </div>
                  <div class="accordion-item no-collapsed">
                    <h2 class="accordion-header">
                      <button class="accordion-button">Lesson 2.2</button>
                    </h2>
                  </div>
                  <h4 class="heading-title">Section 3</h4>
                  <div class="accordion-item">
                    <h3 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                        Lesson 3.1
                        <span class="topics">3 Topics</span>
                        <span class="expand">Expand</span>
                      </button>
                    </h3>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <div class="course-lesson">
                          <ul>
                            <li>Topic 1 – Grounding</li>
                            <li>Topic 2 – Igniting</li>
                            <li>Topic 3 – Awareness</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item no-collapsed">
                    <h2 class="accordion-header">
                      <button class="accordion-button">Lesson 3.2</button>
                    </h2>
                  </div>
                  <div class="accordion-item no-collapsed">
                    <h2 class="accordion-header">
                      <button class="accordion-button">Lesson 3.3</button>
                    </h2>
                  </div>
                </div>
              </div>
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
      course: {},
      chapters: [],
      ishavelesson: true,
      tabchapter: 0,
      titlepost: "",
      contentpost: "",
    };
  },
  methods: {
    ...mapActions("lesson", {
      getlesson: "getlesson",
    }),
    ...mapActions("course", {
      getcourse: "getcourse",
    }),
    handleClickChapter(index) {
      this.tabchapter = index;
      this.chapters[index].isVisible = !this.chapters[index].isVisible;
    },
    handleLessonClicked(id, type, content) {
      this.$router.push(`/lesson/${id}`);
    },
    backnative() {
      this.$router.push("/course");
    },
    openmodal() {
      this.myModal.show();
    },
  },
  created() {
    const course_id = this.$route.params.courselearning;
    localStorage.setItem("course_id", course_id);
    this.getcourse(course_id).then((course) => {
      this.course = course;
      //this.linkImg = `${process.env.baseUrl}${course.urlImage}`;
    });

    this.getlesson(course_id).then((response) => {
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
    this.myModal = bootstrap.Modal.getOrCreateInstance(
      this.$refs.modallearning
    );
  },
};
</script>

<style
  lang="scss"
  scoped
  src="@/assets/scss/pages/course/courselearning.scss"
></style>
