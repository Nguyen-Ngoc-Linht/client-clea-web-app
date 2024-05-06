<template>
  <div class="manage-user-page">
    <div class="header-page">
      <div><b>Danh sách khóa học</b></div>
      <div id="clock"></div>
    </div>

    <!-- body -->
    <div class="body-page mt-3">
      <div class="title-page">
        <div class="list-option">
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
      </div>

      <div class="name-table mt-3">
        <div class="table-user">
          <table
            class="table table-hover table-bordered"
            cellpadding="0"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th width="10"><input type="checkbox" id="all" /></th>
                <th>ID tài khoản</th>
                <th width="150">Tên tài khoản</th>
                <th width="20">Avatar</th>
                <th width="300">Tên</th>
                <!-- <th>Địa chỉ</th> -->
                <th>Tuổi</th>
                <th>Email</th>
                <th>Chức vụ</th>
                <th width="100">Chỉnh sửa</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in listUser">
                <td width="10">
                  <input type="checkbox" name="check1" value="1" />
                </td>
                <td>{{ item._id }}</td>
                <td>{{ item.userName }}</td>
                <td>
                  <img
                    class="img-card-person"
                    style="width: 30px; height: 30px"
                    :src="item.avatarUrl"
                    alt=""
                  />
                </td>
                <td>{{ item.name }}</td>
                <!-- <td>{{ item.address }}</td> -->
                <td>{{ item.age }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.role }}</td>
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
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  layout: "admin",
  middleware: "checkAdmin",
  data() {
    return {
      listUser: [],
      accountuser: {},
    };
  },
  methods: {
    ...mapActions("user", {
      getlistUser: "getlistUser",
      getUser: "getUser",
    }),
    async showInfoUser(userId) {
      await this.getUser(userId).then((response) => {
        if (response != null) {
          //this.accountuser = response;
          //this.myModal.show();
          this.$router.push(`/admin/user-item/${response._id}`);
        }
      });
    },
  },
  mounted() {
    this.getlistUser().then((res) => {
      //console.log(res);
      this.listUser = res;
    });
  },
};
</script>

<style
  lang="scss"
  scoped
  src="@/assets/scss/pages/admin/manageuser.scss"
></style>
