<template>
  <Myrow>
    <MyButton type="primary" @click="notice">打开弹窗</MyButton>
  </Myrow>
</template>

<script>
import notice from '@/views/original/notice/notice.js'
import Vue from 'vue'
Vue.prototype.$notice = notice
export default {
  methods: {
    notice() {
      // 自定义的方式
      this.$notice.info({
        duration: 3,
        content: '消息',
      })
    },
  },
}
</script>

<style>
</style>