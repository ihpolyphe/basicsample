import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// eslint-disable-next-line
const store = new Vuex.Store({
  state: {
    isLogin: false,
    userId: "",
  },
  mutations: {
    auth(state, user) {
      state.isLogin = true;
      state.userId = user;
    },
  },
  actions: {
    fetch(context, user) {
      context.commit("auth", user);
    },
  },
  modules: {},
});
