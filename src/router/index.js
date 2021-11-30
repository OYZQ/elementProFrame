import Vue from "vue";
import VueRouter from "vue-router";
// import menuRoutes from '@/assets/json/menuRoutes'
import {
  getToken,
} from "../utils/auth";

Vue.use(VueRouter);

let baseRoutes = [{
  path: "/login",
  name: "login",
  component: () => import('@/views/login/login.vue'),
  meta: {
    title: '登录'
  }
}];

const createRouter = () =>
  new VueRouter({
    mode: "history",
    routes: baseRoutes,
  });

const router = createRouter();
const LOGIN_PAGE_NAME = 'login';
router.beforeEach((to, from, next) => {
  // 是否登录判断
  const token = getToken();
  if (token) {
    next();
    // setToken('')
    // store.commit('user/setToken', '')
    // next({name:LOGIN_PAGE_NAME})
  } else {
    to.name === LOGIN_PAGE_NAME ? next() : next({
      name: LOGIN_PAGE_NAME
    })
  }
  document.title = to.meta.title ?
    "前端通用框架-" + to.meta.title :
    "前端通用框架";
});

export default router;