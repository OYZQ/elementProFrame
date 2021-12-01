import Vue from "vue";
import VueRouter from "vue-router";
import store from '@/store'
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

// 重置路由：用于切换用户后重置路由
export function resetRouter(){
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

const LOGIN_PAGE_NAME = 'login';
router.beforeEach(async (to, from, next) => {
  // 判断当前用户是否携带token，如果没有携带token就返回登录页面
  const token = getToken();
  if (token) {
    if (to.name === LOGIN_PAGE_NAME) { // 每次进登录页都需要强制重新登录一次
      next()
    } else {
      // 其次是防止当用户刷新页面时，vuex数据被清空，但token还是存在，所以重新生成权限路由
      if (store.state.user.menuList.length === 0) {
        await store.dispatch('user/getUserinfo');
        next({
          ...to,
          replace: true
        }); //中断当前导航，执行新的导航
      } else {
        next();
      }
      // else {
      //   setToken('')
      //   store.commit('user/setToken', '')
      //   next({
      //     name: LOGIN_PAGE_NAME
      //   })
      // }
    }
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