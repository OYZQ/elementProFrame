<template>
  <div class="my--demo">
    <div class="demo-button">
      <MyViewCode title="【msg提示】" :source-code="sourceCode1">
      </MyViewCode>
    </div>
  </div>
</template>
<script>
import MyViewCode from '@/components/base/MyViewCode/MyViewCode'
// import sourceCode1 from './sourceCode1.js'
export default {
  name: 'dialogDemo',
  components: {
    MyViewCode,
  },
  data() {
    return {
      // sourceCode1: sourceCode1,
    }
  },
  methods: {
  },
}
</script>
