import { CONSTANTS } from "../utils/constant";
import { USERSAPI } from "@/api/users";
import { AUTHSAPI } from "@/api/auths";
import {
  getAccessToken,
  removeAccessToken,
  removeUserInfo,
  setAccessToken,
  setReFreshToken,
  setUserInfo
} from "@/utils/cookieAuthen";

const UPDATE_USER = "UPDATE_USER";

const actions = {
  async apiUser({ commit, state }, user) {
    try {
      let { data } = await this.$axios.post(`${AUTHSAPI.LOGIN}`, {
        userName: user.username,
        password: user.password,
      });
      if (data.status === CONSTANTS.SUCCESS) {
        console.log(data.data);
        const user = {
          id: data.data.user._id,
          name: data.data.user.name,
          avatar: `${process.env.baseUrl}${data.data.user.avatarUrl}`,
          email: data.data.user.email,
          role: data.data.user.role,
        };
        setUserInfo(user);
        setAccessToken(data.data.token);
        const expirationTime = new Date();
        expirationTime.setTime(expirationTime.getTime() + 60 * 60 * 1000);

        setReFreshToken(expirationTime.toISOString())
        return data.data;
      }
    } catch (e) {
      throw e;
    }
  },

  async getlistUser({ commit, state }) {
    try {
      const token = getAccessToken();
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

  async setrole({ commit, state }, { userId, role }) {
    try {
      console.log(userId, role);
      const token = getAccessToken();
      let { data } = await this.$axios.post(
        `${USERSAPI.SETROLE}/${userId}`,
        { role: role },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.status === CONSTANTS.SUCCESS) {
        return data;
      }
    } catch (err) {
      console.log(err);
    }
  },

  async setAvatar({ commit, state }, payload) {
    try {
      let { data } = await this.$axios.post(`${USERSAPI.SETAVATAR}`, payload);

      if (data.status === 200) {
        return data.user;
      }
    } catch (err) {
      console.log(err);
    }
  },

  async signup({ commit, state }, payload) {
    try {
      removeUserInfo();
      removeAccessToken();
      let { data } = await this.$axios.post(`${AUTHSAPI.SIGNUP}`, payload);

      if (data.status === CONSTANTS.SUCCESS) {
        return data.data;
      }
    } catch (err) {
      console.log(err);
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
