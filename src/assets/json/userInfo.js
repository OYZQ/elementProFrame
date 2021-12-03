export default {
  token: '测试token',
  menuList: [{
      path: 'guide/index',
      name: 'index',
      component: () => import('@/views/guide/index.vue'),
      meta: {
        title: '框架介绍'
      }
    },
    {
      path: 'guide/standard',
      name: 'standard',
      component: () => import('@/views/guide/standard.vue'),
      meta: {
        title: '代码规范'
      }
    },
    {
      path: 'demo/button',
      name: 'button',
      component: () => import('@/views/demo/buttonDemo/button.vue'),
      meta: {
        title: '按钮案例'
      }
    },
    {
      path: 'demo/markdown',
      name: 'button',
      component: () => import('@/views/demo/markdownDemo/markdown.vue'),
      meta: {
        title: 'markdwon案例'
      }
    },
    {
      path: 'demo/form',
      name: 'button',
      component: () => import('@/views/demo/formDemo/form.vue'),
      meta: {
        title: '表单案例'
      }
    },
    {
      path: 'demo/tableDemo',
      name: 'button',
      component: () => import('@/views/demo/tableDemo/table.vue'),
      meta: {
        title: '表格案例'
      }
    },
    {
      path: 'demo/excel',
      name: 'excel',
      component: () => import('@/views/demo/excelDemo/excel.vue'),
      meta: {
        title: '导入导出'
      }
    },
    {
      path: '/temple/theme',
      name: 'theme',
      component: () => import('@/views/temple/theme/index.vue'),
      meta: {
        title: '主题切换'
      }
    },
    {
      path: 'original/notice',
      name: 'notice',
      component: () => import('@/views/original/notice/index.vue'),
      meta: {
        title: '弹窗组件'
      }
    },
  ]
};