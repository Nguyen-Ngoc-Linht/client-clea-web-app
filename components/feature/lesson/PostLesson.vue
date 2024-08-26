<template>
  <div class="box-post-lesson">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-9">
        <div class="header-post">
          <span class="text">Bạn hãy chia sẻ ý kiến của bạn trong nhóm</span>
        </div>

        <div class="input-blogs mt-2">
          <div class="box-input">
            <div class="avatar-user">
              <img :src="user.avatar" alt="" class="img-avt" />
            </div>

            <div class="input-data">
              <input
                type="text"
                class="input-text"
                placeholder="Hãy chia sẻ kinh nghiệm hoặc vấn đề bạn đang gặp phải?"
              />
            </div>

            <div class="btn-post ms-3">
              <button class="btn btn-dangbai" @click="showModal">
                Đăng bài ngay
              </button>
            </div>
          </div>
        </div>

        <!-- List post -->
        <div class="list-post">
          <div v-for="item in listpost" class="box-post mt-3">
            <!-- Header -->
            <div class="header-post">
              <!-- Avatar -->
              <div class="avatar-user">
                <img :src="item.avataruser" alt="" class="avt-img" />
              </div>
              <div class="user-name ms-2">{{ item.username }}</div>
            </div>
            <div class="post-body row mt-2">
              <!-- Title -->
              <div class="post-content col-8">
                <div class="post-title">
                  {{ item.title }}
                </div>
                <div class="post-text mt-2">
                  {{ item.body }}
                </div>
                <div class="post-time"></div>
              </div>

              <!-- Image -->
              <div class="post-image col-4">
                <div class="image-item">
                  <img :src="item.imageLink" alt="" class="img-post" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    course_id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      listpost: [],
      user: {},
    };
  },
  methods: {
    ...mapActions("post", {
      getpostcourse: "getpostcourse",
    }),
    showModal() {
      this.$emit("showModal");
    },
  },
  async created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getpostcourse(this.course_id).then((postcourse) => {
      this.listpost = postcourse;
    });
  },
};
</script>

<style
  lang="scss"
  scoped
  src="@/assets/scss/components/feature/lesson/postlesson.scss"
></style>
