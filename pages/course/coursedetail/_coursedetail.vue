<template>
  <div class="page-course-detail">
    <div class="header-page">
      <button class="btn btn-back" @click="backnative">Back</button>
    </div>

    <!-- Body -->
    <div class="body-page row">
      <div class="col-xl-8">
        <div class="header-course-detail">
          <span class="text">{{ course.name }}</span>
          <div class="list-info">
            <div class="info-item">
              <div class="item-img">
                <img src="" alt="" class="img-item" />
              </div>
              <div class="item-name">{{ course.createdBy }}</div>
            </div>

            <div class="info-item">
              <div class="item-img">
                <img src="" alt="" class="img-item" />
              </div>
              <div class="item-name">English</div>
            </div>

            <div class="info-item">
              <div class="item-img">
                <img src="" alt="" class="img-item" />
              </div>
              <div class="item-name">(720 members)</div>
            </div>
          </div>
        </div>

        <div class="tab-box-list mt-4 row">
          <div class="tab-list-item col">
            <div class="tab-name">Trạng thái</div>
            <button class="btn mt-2 status">{{ status }}</button>
          </div>

          <div class="tab-list-item col course-price">
            <div class="tab-name">Giá</div>
            <button class="btn mt-2 price">{{ course.price }} vnđ</button>
          </div>

          <div class="tab-list-item col">
            <div class="tab-name">Bắt đầu học</div>
            <button class="btn mt-2 started">Tham gia khóa học ngay</button>
          </div>
        </div>

        <div class="image-course mt-4">
          <img :src="linkImg" alt="" class="img-course" />
        </div>

        <div class="description mt-5">
          <div class="nav-tab-wrap">
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
                  Khóa học
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
                  Chương trình học
                </button>
              </li>
            </ul>
            <div class="tab-content mt-3" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="overview"
                role="tabpanel"
                aria-labelledby="overview-tab"
              >
                <div class="course-tab-content">
                  <div class="course-overview">
                    <h3 class="heading-title">Course Description</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor inc idid unt ut labore et dolore
                      magna aliqua enim ad minim veniam, quis nostrud exerec
                      tation ullamco laboris nis aliquip commodo consequat duis
                      aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur enim ipsam.
                    </p>
                    <p>
                      Excepteur sint occaecat cupidatat non proident sunt in
                      culpa qui officia deserunt mollit anim id est laborum. Sed
                      ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium totam rem aperiam.
                    </p>
                    <ul class="mb--50">
                      <li>
                        No prior knowledge of Wordpress is required as
                        everything will be covered in this course.
                      </li>
                      <li>
                        Basic HTML and CSS knowledge helps, but isn't a
                        must-have
                      </li>
                      <li>
                        You don't need any coding experience at all. That is the
                        beauty of Wordpress.
                      </li>
                      <li>Basic JavaScript knowledge is required</li>
                    </ul>

                    <h5 class="title">Key Features</h5>
                    <ul>
                      <li>
                        No prior knowledge of Wordpress is required as
                        everything will be covered in this course.
                      </li>
                      <li>
                        Basic HTML and CSS knowledge helps, but isn't a
                        must-have
                      </li>
                      <li>Basic JavaScript knowledge is required</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- List Lesson -->
              <div
                class="tab-pane fade"
                id="carriculam"
                role="tabpanel"
                aria-labelledby="carriculam-tab"
              >
                <div class="course-tab-content">
                  <div class="course-curriculam">
                    <div class="accordion edu-accordion" id="accordionExample">
                      <div v-for="item in chapter" class="mt-3">
                        <h4 class="heading-title">{{ item.chaptername }}</h4>
                        <div
                          v-for="lesson in item.listlesson"
                          class="accordion-item no-collapsed"
                        >
                          <h3 class="accordion-header">
                            <button class="accordion-button" type="button">
                              {{ lesson.title + ": " + lesson.name }}
                            </button>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--  -->
      <div class="col-xl-4">
        <div class="course-includes">
          <div class="text-name">Khóa học bao gồm:</div>

          <div class="item-include">
            <div class="include-img">
              <img src="" alt="" class="img-icon" />
              <div class="include-name">Giá:</div>
            </div>

            <div class="include-value" style="color: red; font-size: 22px">
              {{ course.price }} vnđ
            </div>
          </div>

          <div class="item-include">
            <div class="include-img">
              <img src="" alt="" class="img-icon" />
              <div class="include-name">Giáo viên:</div>
            </div>

            <div class="include-value">{{ course.teacherName }}</div>
          </div>

          <div class="item-include">
            <div class="include-img">
              <img src="" alt="" class="img-icon" />
              <div class="include-name">Thời lượng:</div>
            </div>

            <div class="include-value">45 tiết</div>
          </div>

          <div class="item-include">
            <div class="include-img">
              <img src="" alt="" class="img-icon" />
              <div class="include-name">Bài học:</div>
            </div>

            <div class="include-value">16</div>
          </div>

          <div class="item-include">
            <div class="include-img">
              <img src="" alt="" class="img-icon" />
              <div class="include-name">Thành viên:</div>
            </div>

            <div class="include-value">{{ course.nbmembers }} học sinh</div>
          </div>

          <div class="item-include">
            <div class="include-img">
              <img src="" alt="" class="img-icon" />
              <div class="include-name">Ngôn ngữ:</div>
            </div>

            <div class="include-value">VietNamese</div>
          </div>

          <button class="btn btn-started mt-3" @click="startLearning">
            Bắt đầu ngay
          </button>
        </div>
      </div>
    </div>

    <!-- Fotter -->
    <Footter />
  </div>
</template>

<script>
import Footter from "~/components/common/Footter.vue";
import { mapActions } from "vuex";
import { formatLessonstoChapters } from "@/utils/formData";
export default {
  layout: "empty",
  components: {
    Footter,
  },
  data() {
    return {
      course: {},
      chapter: [],
      linkImg: "",
      status: "Chưa đăng ký",
    };
  },
  methods: {
    ...mapActions("course", {
      getcourse: "getcourse",
    }),
    ...mapActions("lesson", {
      getlesson: "getlesson",
    }),
    backnative() {
      this.$router.push("/course");
    },
    startLearning() {
      const course_id = this.$route.params.coursedetail;
      this.$router.push(`/course/courselearning/${course_id}`);
    },
    formatPrice(price) {
      // Sử dụng phương thức toLocaleString() của JavaScript để chuyển đổi số
      return price.toLocaleString("vi-VN");
    },
  },
  created() {
    const course_id = this.$route.params.coursedetail;
    this.getcourse(course_id).then((course) => {
      this.course = course;
      this.linkImg = `${process.env.baseUrl}${course.urlImage}`;
      this.course.price = this.formatPrice(course.price);
    });

    this.getlesson(course_id).then((lesson) => {
      const chapterformat = formatLessonstoChapters(lesson);
      this.chapter = chapterformat;
      console.log(chapterformat);
    });
  },
};
</script>

<style
  lang="scss"
  scoped
  src="@/assets/scss/pages/course/coursedetail.scss"
></style>
