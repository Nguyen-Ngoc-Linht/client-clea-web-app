import { CONSTANTS } from "../utils/constant";
import { COURSEUSERAPI } from "@/api/courseuserapi";
import {getAccessToken} from "@/utils/cookieAuthen";

const actions = {
  async getcourseuser({ commit, state }, user_id) {
    try {
      const token = getAccessToken();
      let { data } = await this.$axios.get(
        `${COURSEUSERAPI.GETCOURSE}/${user_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.status === CONSTANTS.SUCCESS) {
        const listCourse = data.data;
        const response = [];
        for (let item of listCourse) {
          response.push({
            id: item.course._id,
            course_name: item.details_course.name,
            course_id: item.details_course._id,
            title: item.details_course.title,
            price: item.details_course.price,
            description: item.details_course.description,
            nbmembers: item.details_course.nbmembers,
            category: item.details_course.category,
            pathImage: `${process.env.baseUrl}${item.details_course.urlImage}`,
          });
        }

        return response;
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

const mutations = {
  // [SET_LIST_COURSE]: (state, lessons) => {
  //   state.lessons = lessons;
  // },
};

export default {
  actions,
  state,
  getters,
  mutations,
};
