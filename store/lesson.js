import { CONSTANTS } from "../utils/constant";
import { LESSONAPI } from "@/api/lesson";
import { formatLessons } from "@/utils/formData";

const actions = {
  async getlesson({ commit, state }, course_id) {
    try {
      const token = localStorage.getItem("token");
      let { data } = await this.$axios.get(
        `${LESSONAPI.GETLESSON}/${course_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.status === CONSTANTS.SUCCESS) {
        const dataformat = formatLessons(data.data);
        return dataformat;
      }
    } catch (err) {
      console.log(err);
    }
  },

  async getlessonitem({ commit, state }, lesson_id) {
    try {
      const token = localStorage.getItem("token");
      let { data } = await this.$axios.get(
        `${LESSONAPI.GETITEMLESSON}/${lesson_id}`
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // }
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
  lessons: [],
});

const getters = {
  lessons: (state) => {
    return state.lessons;
  },
};

const mutations = {};

export default {
  actions,
  state,
  getters,
  mutations,
};
