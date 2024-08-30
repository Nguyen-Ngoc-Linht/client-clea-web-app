<template>
  <div class="w-100 h-100 d-flex justify-content-center align-items-center flex-column">
    <div class="w-100 d-flex align-items-center input-comment">
      <input
        v-model="content"
        type="text"
        class="form-control"
        placeholder="Nhập bình luận của bạn"
      />
      <button class="btn bg-gradient-success mb-0 ms-2" @click="sendcomment">Gửi</button>
    </div>

    <div v-if="!isempty" class="mt-1 w-100 px-2 box-comment" style="flex: 1">
      <div v-for="item in listcomment" class="item-comment mt-2">
        <div class="item-user">
          <div class="user-avatar">
            <img :src="item.avatar" alt="" class="avt-img" />
          </div>

          <div class="user-name">
            <span class="text-lg text-bold text-black">{{ item.name }}</span>
          </div>
        </div>

        <div class="card card-body bg-gradient-light mt-2">
          <span class="text-content text-black">
            {{ item.content }}
          </span>
        </div>
      </div>
    </div>
    <div v-else class="d-flex justify-content-center align-items-center text-bold text-lg" style="flex: 1">{{ text }}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import {getUserInfo} from "@/utils/cookieAuthen";
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
    this.user = getUserInfo();
    this.apiGetListComment(this.lesson_id).then((comments) => {
      if (comments != null) {
        // console.log("Danh sách bình luận", comments);
        this.listcomment = comments;
      } else {
        this.text = "Bài học này chưa có bình luận nào!";
        this.isempty = true;
      }
    });
  },
};
</script>

<style scoped lang="scss">
.box-comment {
  max-height: calc(100% - 32px);
  overflow: hidden;
  overflow-y: auto;
  padding-bottom: 6px;

  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #7df1f1;
    border-radius: 8px;
  }
}

.input-comment {
  height: 48px;

  .input-text {
    width: 80%;
    height: 40px;
    border-radius: 32px;
    border: 0.5px solid black;
    padding: 0 12px;
  }
}

.item-comment {
  width: 100%;

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
  }

  .item-content {
  }
}

</style>
