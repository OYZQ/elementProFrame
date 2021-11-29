<template>
  <div class="page">
    <div class="navTitle">代码规范</div>
    <MyCard class="box-card">
      <div slot="header" class="clearfix">
        <span class="my-card-title">前言</span>
      </div>
      <div class="text-box">
        <h4 class="marginb20">规范目的</h4>
        <p>
          规定并不是一种限制，而是约定。强调团队的一致性，更好的加强团队之间的合作，从而提高协作效率、形成一种团队文化并积累知识，规范最终是为项目服务的。
          我们所做的一切都是为了优化项目和流程，提高我们的工作效率，让工作事半功倍。
        </p>
        <h4 class="marginb20 margint20">基本准则</h4>
        <p>符合web标准，语义化html，结构表现行为分离，兼容性优良，页面性能方面，代码要求简洁明了有序，尽可能的减少服务器负载，保证最快的解析速度。</p>
        <p>提高前端静态资源（包括页面模块和JS功能组件）的可复用性，能实现和具体业务逻辑分离的坚决不和业务逻辑混到一块去。能拆分的功能组件尽量不要整合。给各个功能组件预留足够灵活的使用空间。</p>
        <p>加强团队内部技术人员之间的交流，形成相互学习和促进共同进步的良好氛围。</p>
      </div>
    </MyCard>
    <MyCard class="box-card margint10">
      <div slot="header" class="clearfix">
        <span class="my-card-title">HMTL代码篇</span>
      </div>
      <div class="text-box">
        <h4 class="marginb20">HTML代码编写规范</h4>
        <p class="red">基本原则：内容（DOM）、样式（CSS）、行为（JS）代码分离</p>
        <p>1、所有标签必须结束</p>
        <p>2、所有标签必须小写</p>
        <p>3、标签属性都必须用引号引起来</p>
        <p>4、标签属性必须有值</p>
        <p>5、所有特殊符合必须转译</p>
        <h4 class="marginb20 margint20">合理使用标签</h4>
        <p>1、标签合理嵌套：a、span、strong、em、p、h1~h6等元素不能包含：div、ul、ol、dl、p</p>
        <p>2、严禁多div、多span、多table、</p>
      </div>
    </MyCard>
  </div>
</template>

<script>
import sourceCode from './md/files.js'
import 'mavon-editor/dist/css/index.css'

export default {
  name: 'guideIndex',
  components: {
  },
  data() {
    return {
      sourceCode: sourceCode,
    }
  },
}
</script>
