import { CONSTANTS } from "../utils/constant";

const actions = {};

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
