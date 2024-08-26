<template>
  <div class="component-comment">
    <div class="input-comment">
      <input
        v-model="content"
        type="text"
        class="input-text"
        placeholder="Nhập bình luận của bạn"
      />
      <button class="btn ms-2" @click="sendcomment">Gửi</button>
    </div>

    <div v-if="!isempty" class="list-comment mt-3">
      <div v-for="item in listcomment" class="item-comment">
        <div class="item-user">
          <div class="user-avatar">
            <img :src="item.avatar" alt="" class="avt-img" />
          </div>

          <div class="user-name">
            <span class="text-name">{{ item.name }}</span>
          </div>
        </div>

        <div class="item-content">
          <span class="text-content">
            {{ item.content }}
          </span>
        </div>
      </div>
    </div>
    <div v-else class="list-trong">{{ text }}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    lesson_id: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      listcomment: [],
      content: "",
      text: "",
      user: {},
      isempty: false,
    };
  },
  methods: {
    ...mapActions("comments", {
      apiGetListComment: "apiGetListComment",
      apiPostComment: "apiPostComment",
    }),
    sendcomment() {
      const data = {
        lesson_id: this.lesson_id,
        content: this.content,
        user_id: this.user.id,
      };

      this.apiPostComment(data).then((response) => {
        console.log(response);
        this.content = "";
      });
    },
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.apiGetListComment(this.lesson_id).then((comments) => {
      if (comments != null) {
        this.listcomment = comments;
      } else {
        this.text = "Bài học này chưa có bình luận nào";
        this.isempty = true;
      }
    });
  },
};
</script>

<style scoped lang="scss">
.component-comment {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .input-comment {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;

    .input-text {
      width: 80%;
      height: 40px;
      border-radius: 32px;
      border: 0.5px solid black;
      padding: 0 12px;
    }
  }

  .list-comment {
    flex: 1;

    .item-comment {
      width: 96%;

      .item-user {
        display: flex;
        align-items: center;
        gap: 12px;

        .user-avatar {
          width: 36px;
          height: 36px;
          overflow: hidden;
          border-radius: 50%;

          .avt-img {
            width: 100%;
            height: 100%;
          }
        }

        .user-name {
          font-weight: 600;
        }
      }

      .item-content {
      }
    }
  }

  .list-trong {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
