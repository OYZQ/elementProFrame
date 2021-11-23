import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/components/layout/index'

Vue.use(VueRouter);

const baseRoutes = [
  {
    path: "/",
    name: "index",
    component: Layout,
    redirect: '/guide/index',
    children:[
      {
        path:'guide/index',
        name:'index',
        component: () => import('@/views/guide/index.vue'),
        meta:{
          title:'框架介绍'
        }
      },
      {
        path:'demo/button',
        name:'button',
        component: () => import('@/views/demo/buttonDemo/button.vue'),
        meta:{
          title:'按钮案例'
        }
      },
      {
        path:'demo/form',
        name:'button',
        component: () => import('@/views/demo/formDemo/form.vue'),
        meta:{
          title:'表单案例'
        }
      },
      {
        path:'original/notice',
        name:'notice',
        component: () => import('@/views/original/notice/index.vue'),
        meta:{
          title:'弹窗组件'
        }
      },
    ]
  },
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
