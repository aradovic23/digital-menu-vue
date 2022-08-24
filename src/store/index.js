import { createStore } from "vuex";

export default createStore({
  state: {
    data: [{ email: "onload store test", password: "test", id: Date.now() }],
  },
  getters: {},
  mutations: {
    pushData(state, payload) {
      this.state.data.unshift(payload);
    },
  },
  actions: {},
  modules: {},
});
