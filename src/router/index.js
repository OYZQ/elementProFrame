import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/components/layout/index'

Vue.use(VueRouter);

const baseRoutes = [
  {
    path: "/",
    name: "index",
    component: Layout,
    redirect: '/home',
    children:[
      {
        path:'home',
        name:'home',
        component: () => import('@/views/demo/button.vue'),
        meta:{
          title:'按钮案例'
        }
      }
    ]
  },
  {
    path:"/demo/button",
    name:"button",
    component: () => import('@/views/demo/button.vue'),
    meta: {
      title: "按钮案例"
    }
  }
];

const createRouter = () =>
  new VueRouter({
    mode: "history",
    routes: baseRoutes,
  });

const router = createRouter();

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
    ? "前端通用框架-" + to.meta.title
    : "前端通用框架";
  next();
});

export default router;
