<template>
  <div class="my--demo">
    <MyViewCode title="[Normal]" :source-code="sourceCode1">
      <MyButton type="primary">查询</MyButton>
    </MyViewCode>
  </div>
</template>
<script>
import MyViewCode from "@/components/base/MyViewCode/MyViewCode";
import sourceCode1 from "./sourceCode1.js"
export default {
  name: "ButtonDemo",
  components: {
    MyViewCode,
  },
  data() {
    return {
      sourceCode1:sourceCode1
    }
  },
};
</script>
<style scoped lang="scss" src="@/styles/modules/demo/index.scss"></style>
