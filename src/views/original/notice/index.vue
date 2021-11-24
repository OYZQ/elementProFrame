<template>
  <div class="my--demo">
    <div class="demo-button">
      <MyViewCode title="[Normal]" :source-code="sourceCode1">
        <MyRow>
          <MyButton type="primary" @click="notice">打开弹窗</MyButton>
        </MyRow>
      </MyViewCode>
    </div>
  </div>
</template>

<script>
import notice from '@/views/original/notice/notice.js'
import MyViewCode from '@/components/base/MyViewCode/MyViewCode'
import sourceCode1 from "./sourceCode1.js"
import Vue from 'vue'
Vue.prototype.$notice = notice
export default {
  name:"notice",
  components:{
    MyViewCode
  },
  data(){
    return {
      sourceCode1:sourceCode1
    }
  },
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