import { CONSTANTS } from "../utils/constant";
import { COURSEAPI } from "@/api/course";

const SET_LIST_COURSE = "SET_LIST_COURSE";

const actions = {
  async getlistcourse({ commit, state }) {
    try {
      let { data } = await this.$axios.get(`${COURSEAPI.GETCOURSE}`);
      if (data.status === CONSTANTS.SUCCESS) {
        const listCourse = data.data;
        const response = [];
        for (let item of listCourse) {
          response.push({
            id: item._id,
            title: item.title,
            name: item.name,
            price: item.price,
            description: item.description,
            nbmembers: item.nbmembers,
            category: item.category,
            pathImage: `${process.env.baseUrl}${item.urlImage}`,
          });
        }

        commit(SET_LIST_COURSE, response);
        return response;
      }
    } catch (err) {
      console.log(err);
    }
  },

  async createcourse({ commit, state }, formData) {
    try {
      const token = localStorage.getItem("token");

      let { data } = await this.$axios.post(
        "http://localhost:3030/posts",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.status === CONSTANTS.SUCCESS) {
        return data.data;
      }
    } catch (err) {
      console.log(err);
    }
  },

  async getcourse({ commit, state }, course_id) {
    try {
      let { data } = await this.$axios.get(
        `${COURSEAPI.GETCOURSE}/${course_id}`
      );
      if (data.status === CONSTANTS.SUCCESS) {
        const course = data.data;
        return course;
      }
    } catch (err) {
      console.log(err);
    }
  },

  async updatecourse({ commit, state }, { formData, course_id }) {
    try {
      const token = localStorage.getItem("token");

      let { data } = await this.$axios.post(
        `${COURSEAPI.GETCOURSE}/course-item/${course_id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.status === CONSTANTS.SUCCESS) {
        return data.data;
      }
    } catch (err) {
      console.log(err);
    }
  },
};

const state = () => ({
  courses: [],
});

const getters = {
  courses: (state) => {
    return state.courses;
  },
};

const mutations = {
  [SET_LIST_COURSE]: (state, courses) => {
    state.courses = courses;
  },
};

export default {
  actions,
  state,
  getters,
  mutations,
};
