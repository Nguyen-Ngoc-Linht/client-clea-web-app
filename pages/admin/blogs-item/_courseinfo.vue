<template>
  <div class="bog-item-course">
    <!-- header course-item -->
    <div class="header-item">Quản lý khóa học / Thêm khóa học</div>

    <!-- Body -->
    <div class="body-item mt-3">
      <div class="title">Tạo khóa học mới</div>

      <!-- course -->
      <div class="course-item mt-4">
        <form action="" class="form-course" @submit.prevent="onSubmit">
          <div class="row row-item">
            <div class="col-xl-6 item">
              <span class="item-name">Tên khóa học</span>
              <input v-model="coursename" type="text" class="input-item" />
            </div>

            <div class="col-xl-6 item">
              <span class="item-name">Giá</span>
              <input v-model="price" type="number" class="input-item" />
            </div>
          </div>

          <div class="row row-item mt-4">
            <div class="col-xl-6 item">
              <span class="item-name">Tiêu đề</span>
              <input v-model="titlecourses" type="text" class="input-item" />
            </div>

            <div class="col-xl-6 item">
              <!-- <span class="item-name">Mô tả khóa học</span>
              <input type="text" class="input-item" /> -->
            </div>
          </div>

          <div class="row row-item mt-4">
            <div class="col-xl-6 item">
              <span class="item-name">Loại</span>
              <input v-model="category" type="text" class="input-item" />
            </div>

            <div class="col-xl-6 item">
              <span class="item-name">Chọn giáo viên</span>
              <input v-model="teacher" type="text" class="input-item" />
            </div>
          </div>

          <div class="row row-item mt-4">
            <div class="col-xl-6 item">
              <label class="input-group-text" for="inputGroupFile01"
                >Ảnh khóa học</label
              >
              <input
                ref="imgFile"
                type="file"
                class="form-control"
                id="inputGroupFile01"
                @change="handleFileChange"
              />
            </div>

            <div class="col-xl-6 item">
              <label class="input-group-text" for="inputGroupFile01"
                >Ảnh bìa khóa học</label
              >
              <input type="file" class="form-control" id="inputGroupFile01" />
            </div>
          </div>

          <div class="row row-item mt-4">
            <div class="item">
              <span class="item-name">Mô tả khóa học</span>
              <textarea
                class="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
          </div>

          <div class="list-btn mt-4">
            <div class="item-btn">
              <button type="submit" class="btn btn-info">Lưu lại</button>
            </div>

            <div class="item-btn">
              <button class="btn btn-danger">Hủy bỏ</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  layout: "admin",
  data() {
    return {
      idcourse: "",
      coursename: "",
      titlecourses: "",
      price: "",
      teacher: "",
      category: "",
      imgcourse: "",
      description: "",
      fileContent: null,
    };
  },
  methods: {
    ...mapActions("course", {
      createcourse: "createcourse",
    }),
    handleFileChange(event) {
      let file = event.target.files[0];
      console.log("File", file);
    },
    async onSubmit(event) {
      event.preventDefault(); // Ngăn chặn việc reload trang khi submit form
      // Tạo đối tượng FormData
      const formData = new FormData();
      // Thêm các dữ liệu khác vào FormData
      formData.append("body", this.coursename);
      formData.append("title", this.titlecourses);
      formData.append("user_id", "6616c3a3eb02950834352264");
      formData.append("status", this.teacher);
      formData.append("category", this.category);
      // Thêm file vào FormData nếu file đã được chọn
      if (this.$refs.imgFile.files.length > 0) {
        const file = this.$refs.imgFile.files[0];
        formData.append("images", file);
      }

      this.createcourse(formData).then((response) => {
        console.log("Dữ liệu trả về", response);
      });
    },
  },
  created() {
    this.idcourse = this.$route.params.courseinfo;
  },
};
</script>

<style
  lang="scss"
  scoped
  src="@/assets/scss/pages/admin/managecourse/course-item.scss"
></style>
