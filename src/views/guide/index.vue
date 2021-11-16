<template>
  <div class="page">
    <div class="navTitle">框架介绍</div>
    <MyCard class="box-card">
      <div slot="header" class="clearfix">
        <span class="my-card-title">框架介绍</span>
      </div>
      <div class="text-box">
        <p>1、本框架是基于elementUi的二次封装，其目的是基于实际工作场景，按业务进行封装组件，提高代码的复用性。</p>
        <p>
          2、本框架的所有elementUi组件通过src\conponents\elementUi\index.js引入，并改为&lt;MyXxx&gt;&lt;/MyXxx&gt;的调用模式
          实际项目开发完后可以根据实际使用组件情况，移除没有引用的elementUi组件。
        </p>
        <p>
          3、本框架采用rem自动适配，通过postcss-px2rem插件，自动将scss、css文件中的px转换为rem,默认在1920px情况下，1rem=10px
          <span
            class="red font-bold"
          >（注意：html标签上内联样式不会自动转换为rem，如果有些情况下scss文件中不想让px转换为rem，可以将px大写）</span>
        </p>
        <p>
          4、本框架引入scss，
          <span class="red font-bold">样式表文件最好使用scss文件，vue文件在style使用scss需要添加lang="scss"，</span>
          有时候在style写的样式无法影响到子组件，
          <span class="red font-bold">请使用::v-deep深度选择器</span>
        </p>
        <p>
          5、本框架demo案例分为三部分：模板页面、公共元素和页面模块，其中公共元素和页面模快提供查看源码功能，可以直接将对应demo进行复制使用，
          模板页面部门不支持查看源码，如有需要请到src\views\modules查看相应源码文件。
        </p>
      </div>
    </MyCard>
    <MyCard class="box-card margint10">
      <div slot="header" class="clearfix">
        <span class="my-card-title">框架系统结构图</span>
      </div>
      <div class="text-box" v-html="sourceCode"></div>
    </MyCard>
  </div>
</template>

<script>
import sourceCode from './md/files.js'
export default {
  name: 'guideIndex',
  data() {
    return {
      sourceCode: sourceCode
    }
  },
}
</script>

<style>
</style>