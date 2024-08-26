<template>
  <div class="container-fluid">
    <div v-if="ishavelesson" class="list-lesson">
      <div v-for="(item, index) in chapters" class="box-chapter mb-4">
        <button
          class="btn w-100"
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
</template>

<script>
import {mapActions} from "vuex";
import {formatLessonstoChapters} from "@/utils/formData";
import LessonBox from "@/components/feature/lesson/LessonBox.vue";

export default {
  components: {LessonBox},
  props: {
    course_id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      course: {},
      chapters: [],
      ishavelesson: true,
    }
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
  },
  created() {
    localStorage.setItem("course_id", this.course_id);
    // this.getcourse(this.course_id).then((course) => {
    //   this.course = course;
    //   //this.linkImg = `${process.env.baseUrl}${course.urlImage}`;
    // });

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
  }
}
</script>
