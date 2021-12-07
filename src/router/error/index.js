import Layout from '@/components/layout/index'

export default [{
  path: '/error',
  name: 'Error',
  component: Layout,
  children: [{
      path: '403',
      name:'Error_403',
      component: () => import('@/views/error/403.vue'),
      meta: {
        title: 'Error_403',
        hideInTagNav: true
      }
    },
    {
      path: '404',
      name: 'Error_404',
      component: () => import('@/views/error/404.vue'),
      meta: {
        title: 'Error_403',
        hideInTagNav: true
      }
    },
    {
      path: '500',
      name: 'Error_500',
      component: () => import('@/views/error/500.vue'),
      meta: {
        title: 'Error_500',
        hideInTagNav: true
      }
    },
  ]
}]