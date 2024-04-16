<template>
  <div class="manage-user-page">
    <div class="header-page">
      <div><b>Danh sách bài viết</b></div>
      <div id="clock"></div>
    </div>

    <!-- body -->
    <div class="body-page mt-4">
      <!-- <div class="title-page">
        <div class="list-option">
          <div class="">
            <NuxtLink
              class="btn btn-add btn-sm"
              to="/admin/blogs-item"
              title="Thêm"
            >
              Tạo khóa học mới</NuxtLink
            >
          </div>

          <div class="">
            <a class="btn btn-sm nhap-tu-file" type="button" title="Nhập"
              >Tải từ file</a
            >
          </div>

          <div class="">
            <a class="btn btn-sm print-file" type="button" title="In"
              >In dữ liệu</a
            >
          </div>
          <div class="">
            <a class="btn btn-sm print-file" type="button" title="Sao chép"
              >Sao chép</a
            >
          </div>

          <div class="">
            <a class="btn btn-excel btn-sm" href="" title="In"
              ><i class="fas fa-file-excel"></i> Xuất Excel</a
            >
          </div>
          <div class="">
            <a
              class="btn btn-sm pdf-file"
              type="button"
              title="In"
              onclick="myFunction(this)"
              ><i class="fas fa-file-pdf"></i> Xuất PDF</a
            >
          </div>
        </div>
      </div> -->

      <div class="name-table mt-3">
        <div class="table-user">
          <table
            class="table table-hover table-bordered"
            cellpadding="0"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th width="200">Tiêu đề bài viết</th>
                <th width="20">Người tạo</th>
                <th width="300">Nội dung</th>
                <th>Status</th>
                <th>Ngày tạo</th>
                <th>Ảnh</th>
                <th width="100">Lượng tương tác</th>
                <th width="100">Chỉnh sửa</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in listUser">
                <td>{{ item.name }}</td>
                <td>{{ item.userName }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.category }}</td>
                <!-- <td>{{ item.address }}</td> -->
                <td>{{ item.age }}</td>
                <td>{{ item.price }} VND</td>
                <td>{{ item.nbmembers }}</td>
                <td class="table-td-center">
                  <button
                    class="btn btn-primary btn-sm trash"
                    type="button"
                    title="Sửa"
                    @click="showInfoUser(item._id)"
                  >
                    <img
                      src="~/assets/images/pages/admin/usermanagaer/user.png"
                      alt=""
                      class="img-edit"
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!-- Modal -->
    <div
      ref="modal"
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
            <h5 class="modal-title" id="staticBackdropLabel">
              {{ accountuser.name }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
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
      listUser: [],
      accountuser: {},
    };
  },
  methods: {
    ...mapActions("course", {
      getlistcourse: "getlistcourse",
    }),
    async showInfoUser(userId) {
      await this.getlistcourse().then((response) => {
        if (response != null) {
          this.accountuser = response;
          this.myModal.show();
        }
      });
    },
  },
  mounted() {
    this.getlistcourse().then((res) => {
      //console.log(res);
      this.listUser = res;
    });
    // Lấy ra thể hiện của modal từ DOM element có tham chiếu 'modal'
    //this.myModal = bootstrap.Modal.getOrCreateInstance(this.$refs.modal);
  },
};
</script>

<style
  lang="scss"
  scoped
  src="@/assets/scss/pages/admin/managecourse.scss"
></style>
