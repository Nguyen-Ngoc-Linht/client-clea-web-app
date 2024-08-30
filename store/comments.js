import { CONSTANTS } from "~/utils/constant";
import { COMMENT } from "@/api/comment";
import { formatListComments } from "@/utils/formData";

import Vue from "vue";
import {getAccessToken} from "@/utils/cookieAuthen";

const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const ADD_COMMENT_CHILD = "ADD_COMMENT_CHILD";

const actions = {
  async apiGetListComment({ commit }, lesson_id) {
    try {
      let { data } = await this.$axios.get(
        `${COMMENT.GETCOMMENT}/${lesson_id}`
      );

      if (data.status === CONSTANTS.SUCCESS) {
        const commentsFormat = formatListComments(data.data);
        commit(SET_COMMENT, commentsFormat);
        return commentsFormat;
      } else {
        return null;
      }
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  },

  async apiPostComment({ commit }, payload) {
    try {
      const lesson_id = payload.lesson_id;
      const token = getAccessToken();

      let { data } = await this.$axios.post(
        `${COMMENT.POSTCOMMENT}/${lesson_id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.status === CONSTANTS.SUCCESS) {
        const comment = {
          id: data.data.id,
          name: data.user.name,
          avatar: `${process.env.baseUrl}${data.user.avatarUrl}`,
          content: data.data.content,
          like: data.data.number_like,
        };

        commit(ADD_COMMENT, comment);
        return data.comment;
      }
    } catch (e) {
      throw new Error();
    }
  },
};

const state = () => ({
  comments: [],
});

const mutations = {
  [SET_COMMENT](state, comments) {
    state.comments = comments;
  },
  [ADD_COMMENT](state, comment) {
    if (
      !state.comments ||
      !Array.isArray(state.comments) ||
      state.comments.length === 0
    ) {
      //state.comments = [comment];
      Vue.set(state.comments, state.comments.length, comment);
      //console.log("Đã vào đây", state.comments);
    } else {
      //console.log("Đã vào  2", state.comments);
      state.comments.unshift(comment);
    }
  },
  [ADD_COMMENT_CHILD](state, { comment, idparent }) {
    const listCommnet = [];
    console.log(idparent);
    for (let index = 0; index < state.comments.length; index++) {
      const newComment = state.comments[index];
      listCommnet.push(newComment);
      console.log(listCommnet);
      // if (state.comments[index].id === idparent) {
      //   newComments.childComments.push(comment);
      //   console.log("Vao day");
      // }
    }

    state.comments = listCommnet;
  },
};

const getters = {
  comment: (state) => {
    return state.comments;
  },
};

export default {
  actions,
  state,
  mutations,
  getters,
};
