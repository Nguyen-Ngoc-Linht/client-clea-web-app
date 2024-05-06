<template>
  <div class="course-page">
    <!-- Các khóa học nổi bật -->
    <div class="course-outstanding pt-4 pb-5">
      <div class="outstanding-text">
        Chào mừng bạn đến với khóa học của chúng tôi, hãy xem những khóa học nổi
        bật đang được nhiều người theo dõi nhé!.
      </div>
      <!-- List course -->
      <div class="list-course-outstanding row mt-3">
        <div
          v-for="item in courseoutstanding"
          class="col-12 col-xxl-4 col-md-6"
        >
          <div class="course-outstanding-item">
            <div class="item-img">
              <img
                :src="require(`~/assets/images/pages/course/${item.image}.svg`)"
                alt=""
                class="img-item"
              />
            </div>
            <span class="item-name ms-3">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- List Course -->
    <div class="list-course mt-4">
      <div class="list-course-text">
        <span class="text-name">Khóa học</span>
      </div>

      <!-- List coure -->
      <div class="row list-item-course mt-2 mb-4">
        <div
          v-for="item in courseList"
          class="col-6 col-md-4 col-lg-3 mt-2"
          @click="nativeCourse(item.id)"
        >
          <CourseItem
            :key="item.id"
            :id="item.id"
            :nameCourse="item.name"
            :numberMembers="item.nbmembers"
            :image="item.pathImage"
          />
        </div>
      </div>
    </div>

    <!-- Category course -->
    <div class="category-course">
      <div class="list-caterory-text pt-4">
        <span class="text-name">Chọn lĩnh vực mà bạn đang tìm hiểu</span>
      </div>

      <!-- ListCategory -->
      <div class="row list-category mt-2">
        <div v-for="item in listCategory" class="col-4 col-md-3 col-lg-3 mt-4">
          <div class="category-item">
            <div class="item-icon">
              <img
                :src="
                  require(`~/assets/images/pages/course/category/${item.icon}.svg`)
                "
                alt=""
                class="icon-img"
              />
            </div>
            <span class="item-name mt-2">{{ item.nameCategory }}</span>
            <span class="item-description mt-3">{{ item.description }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseItem from "@/components/feature/course/CourseItem.vue";
import { mapActions } from "vuex";
export default {
  components: {
    CourseItem,
  },
  data() {
    return {
      courseoutstanding: [
        {
          id: "1",
          image: "course1",
          name: "Khóa học lập trình C++",
        },
        {
          id: "2",
          image: "course2",
          name: "Học lập trình C#",
        },
        {
          id: "3",
          image: "course3",
          name: "Làm quen với Nuxtjs",
        },
      ],
      courseList: [
        // {
        //   id: "1",
        //   image: "nhapmonIT",
        //   nameCourse: "Kiến thức nhập môn IT",
        //   numberMembers: "124.365",
        // },
        // {
        //   id: "2",
        //   image: "Ccoban",
        //   nameCourse: "C++ Từ cơ bản đến nâng cao",
        //   numberMembers: "23.793",
        // },
        // {
        //   id: "3",
        //   image: "htmlcss",
        //   nameCourse: "HTML CSS từ Zero đến Hero",
        //   numberMembers: "189.402",
        // },
        // {
        //   id: "4",
        //   image: "responsive",
        //   nameCourse: "Responsive với Grid System",
        //   numberMembers: "42.610",
        // },
        // {
        //   id: "5",
        //   image: "jsbasic",
        //   nameCourse: "Javascript Cơ bản",
        //   numberMembers: "129.599",
        // },
        // {
        //   id: "6",
        //   image: "jsmaster",
        //   nameCourse: "Lập trình JavaScript nâng cao",
        //   numberMembers: "35.463",
        // },
        // {
        //   id: "7",
        //   image: "Ubuntu",
        //   nameCourse: "Làm việc với Terminal & Ubuntu",
        //   numberMembers: "16.961",
        // },
        // {
        //   id: "8",
        //   image: "reactjs",
        //   nameCourse: "Xây dựng Website với RectJs",
        //   numberMembers: "61.491",
        // },
        // {
        //   id: "9",
        //   image: "nodejs",
        //   nameCourse: "Node & ExpressJs",
        //   numberMembers: "40.456",
        // },
        // {
        //   id: "10",
        //   image: "aidata",
        //   nameCourse: "Xây dựng App với AI và Học máy",
        //   numberMembers: "12.685",
        // },
        // {
        //   id: "11",
        //   image: "sass",
        //   nameCourse: "Xây dựng website sử dụng SASS",
        //   numberMembers: "9.401",
        // },
      ],
      listCategory: [
        {
          id: "1",
          icon: "design",
          nameCategory: "Design",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
        },
        {
          id: "2",
          icon: "developmentmaster",
          nameCategory: "Development",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
        },
        {
          id: "3",
          icon: "development",
          nameCategory: "Data",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
        },
        {
          id: "4",
          icon: "business",
          nameCategory: "Business",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
        },
        {
          id: "5",
          icon: "marketing",
          nameCategory: "Marketing",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
        },
        {
          id: "6",
          icon: "photo",
          nameCategory: "Photography",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
        },
        {
          id: "7",
          icon: "acting",
          nameCategory: "Acting",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
        },
        {
          id: "8",
          icon: "design",
          nameCategory: "Design",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
        },
      ],
    };
  },
  methods: {
    ...mapActions("course", {
      getlistcourse: "getlistcourse",
    }),
    nativeCourse(courseid) {
      this.$router.push(`/course/coursedetail/${courseid}`);
    },
  },
  created() {
    this.getlistcourse()
      .then((response) => {
        this.courseList = response;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style lang="scss" scoped src="@/assets/scss/pages/course/course.scss"></style>
