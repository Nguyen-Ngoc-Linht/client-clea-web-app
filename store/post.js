import { CONSTANTS } from "../utils/constant";
import { POSTAPI } from "@/api/postapi";
import { formatPosts } from "~/utils/formData";

const COMMITPOST = "COMMITPOST";
const ADDPOST = "ADDPOST";

const actions = {
  async getpost({ commit, state }) {
    try {
      let { data } = await this.$axios.get(`${POSTAPI.GETPOST}`);

      if (data.status === CONSTANTS.SUCCESS) {
        console.log(data.data);
        const fomatPost = formatPosts(data.data);
        commit(COMMITPOST, fomatPost);
        return fomatPost;
      }
    } catch (e) {
      console.log(e);
    }
  },

  async createpost({ commit, state }, payload) {
    try {
      const token = localStorage.getItem("token");
      let { data } = await this.$axios.post(`${POSTAPI.CREATEPOST}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data.status === CONSTANTS.SUCCESS) {
        const fomatPost = {
          id: data.data._id,
          body: data.data.body,
          title: data.data.title,
          imageLink: `${process.env.baseUrl}${data.data.images[0].path}`,
          numberlike: data.data.number_like,
          status: data.data.status,
          username: data.user.name,
          avataruser: `${process.env.baseUrl}${data.user.avatarUrl}`,
        };
        commit(ADDPOST, fomatPost);
        return fomatPost;
      }
    } catch (e) {
      console.log(e);
    }
  },
};

const state = () => ({
  posts: [],
});

const getters = {
  posts: (state) => {
    return state.posts;
  },
};

const mutations = {
  [COMMITPOST]: (state, posts) => {
    state.posts = posts;
  },
  [ADDPOST]: (state, post) => {
    state.posts.unshift(post);
  },
};

export default {
  actions,
  state,
  getters,
  mutations,
};
