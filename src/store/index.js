import Vue from "vue";
import Vuex from "vuex";
// 用户信息
import user from "./base/user"
// 权限相关
import app from "./base/app"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    app
  },
});
