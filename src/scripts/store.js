import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    targetElement: null,
  },
  mutations: {
    setTargetElement(state, element) {
      state.targetElement = element;
    },
  },
  actions: {
    setTargetElement({ commit }, element) {
      commit("setTargetElement", element);
    },
  },
});
