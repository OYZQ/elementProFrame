<template>
  <div class="myCode">
    <MyCard class="margint10">
      <div slot="header" class="clearfix">
        <span class="my-card-title">{{ title }}</span>
        <MyButton class="float-right" @click="codeDialog = true" type="text">查看源码</MyButton>
      </div>
      <div class="text item">
        <slot />
      </div>
    </MyCard>
    <!-- 查看源码弹窗 start -->
    <MyDialog custom-class="code-dialog" :visible.sync="codeDialog" :title="title" width="80%">
      <div id="codediv">
        <pre class="code-pre" v-highlightjs="sourceCode">
          <code class="html"></code>
        </pre>
        <span slot="footer" class="dialog-footer">
          <MyButton type="primary" @click="codeDialog = false">关闭</MyButton>
        </span>
      </div>
    </MyDialog>
    <!-- 查看源码弹窗 end -->
  </div>
</template>

<script>
export default {
  name: 'MyViewCode',
  componentName: 'MyViewCode',
  data() {
    return {
      codeDialog: false,
    }
  },
  props: {
    title: {
      // 标题
      type: String,
      default: '标题',
    },
    sourceCode: {
      // 源码
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped src="@/styles/modules/demo/index.scss">
</style>
