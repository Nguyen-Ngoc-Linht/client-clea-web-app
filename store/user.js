import { CONSTANTS } from "../utils/constant";
import { USERSAPI } from "@/api/users";
import { AUTHSAPI } from "@/api/auths";

const UPDATE_USER = "UPDATE_USER";
const SAVE_TOKEN = "SAVE_TOKEN";
const CLEAR_TOKEN = "CLEAR_TOKEN";

const actions = {
  async apiUser({ commit, state }, user) {
    try {
      let { data } = await this.$axios.post(`${AUTHSAPI.LOGIN}`, {
        userName: user.username,
        password: user.password,
      });
      if (data.status === CONSTANTS.SUCCESS) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: data.data.user._id,
            name: data.data.user.name,
            avatar: data.data.user.avatarUrl,
            email: data.data.user.email,
            role: data.data.user.role,
          })
        );
        localStorage.setItem("token", data.data.token);
        return data.data;
      }
      // let data = {
      //   name: user.username,
      //   matkhau: user.password,
      // };
    } catch (e) {
      throw e;
    }
  },

  async getlistUser({ commit, state }) {
    try {
      const token = localStorage.getItem("token");
      let { data } = await this.$axios.get(`${USERSAPI.GETLISTUSER}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.status === CONSTANTS.SUCCESS) {
        return data.data;
      } else {
        return data;
      }
    } catch (e) {
      console.log(e);
    }
  },

  async getUser({ commit, state }, userId) {
    try {
      let { data } = await this.$axios.get(`${USERSAPI.GETUSER}/${userId}`);
      if (data.status === CONSTANTS.SUCCESS) {
        return data.data;
      }
    } catch (e) {
      console.log(e);
    }
  },
};

const state = () => ({
  listusers: [],
  user: [],
  token: "",
});

const getters = {
  users: (state) => {
    return state.user;
  },
  listusers: (state) => {
    return state.listusers;
  },
};

const mutations = {
  [UPDATE_USER]: (state, user) => {
    state.user = user;
  },
};

export default {
  actions,
  state,
  getters,
  mutations,
};
