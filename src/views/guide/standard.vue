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
        <p>2、严禁多div、多span、多table、正确使用标签表示DOM结构，在文档没有css的条件下，任然具有结构和可读性：</p>
        <ol class="left2rem">
          <li>h1~h6:文章标题、内容区块标题</li>
          <li>p:文本段落</li>
          <li>strong/em:强调文本</li>
          <li>dl:包括标题和内容简介的区块</li>
          <li>ul:无序列表</li>
          <li>ol:有序列表</li>
          <li>img:图像，必须加上alt属性来表示图像代替文本，背景和按钮不要使用该标签，请使用css处理</li>
          <li>table:数据网络，规则的分栏布局，必须显性定宽和定高</li>
          <li>表单结构</li>
          <p>使用fieldset做字段分类</p>
          <p>使用legend表示分类标题</p>
          <p>使用label表示字段文本，添加必要的for属性</p>
        </ol>
        <p>
          3、
          <span class="res">不建议</span>在代码中使用已在xhtml1.0中移除的用于表示样式的标签：s、i、b、font
        </p>
      </div>
    </MyCard>
    <MyCard class="box-card margint10">
      <div slot="header" class="clearfix">
        <span class="my-card-title">CSS代码篇</span>
      </div>
      <div class="text-box">
        <h4 class="marginb20">规范命名</h4>
        <p>1、id/name:驼峰命名法"helloWorld"</p>
        <p>
          2、class:连接符命名法"hello-world",
          <span class="red">两个单词之间用中划线"-",不要用下划线或驼峰写法</span>,
          模块样式前面加上模块前缀如:".user-search-form、user-search-btn"
        </p>
        <h4 class="marginb20 margint20">css样式文件命名</h4>
        <ol class="left1rem">
          <li>标签重置:reset.css</li>
          <li>通用:common.css</li>
          <li>主要的:main.css</li>
          <li>布局版面:layout.css</li>
          <li>打印样式:print.css</li>
          <li>主题:themes.css</li>
        </ol>
        <h4 class="marginb20 margint20">书写与注释格式范例</h4>
        <p>在样式表里面结构性模块的样式用大模块注释包含起来：</p>
        <div class="show-code">
          /* header style start
          <br />-----------------------*/
          <br />write your style header
          <br />/*-----------------------
          <br />header style end*/
        </div>
        <P>子模块子需要用简单注释标注即可，同时各子模块样式段之间空一行，增强样式的可读性。如：</P>
        <div class="show-code">
          /* header */
          <br />
          .header{...}
          <br />
          <br />/* nav-box */
          <br />
          .nav-box{...}
          <br />
        </div>
      </div>
    </MyCard>
    <MyCard class="box-card margint10">
      <div slot="header" class="clearfix">
        <span class="my-card-title">JavaScript代码篇</span>
      </div>
      <div class="text-box">
        <h4 class="marginb20">注释规范</h4>
        <ol class="left1rem">
          <li>把你所产出的每条注释当成写给什么都不懂的新人看的</li>
          <li>避免在已有良好注释规范的代码中引入自己独有的风格，除非它经过团队的一致认可</li>
          <li>重要性排序：有效的描述性注释（what）> 准确的解释性注释（why）> 提示性注释（reference）</li>
          <li>创建新文件需要添加创建者信息和文件业务描述</li>
          <li>建议：描述性注释先于代码创建，解释性注释开发过程中创建，提示性注释代码创建完成后创建</li>
        </ol>
        <h4 class="marginb20 margint20">文件注释</h4>
        <p>
          创建一个新的js文件必须添加文件头注释，主要主要采取类java风格，但是注释的形式不是最重要的，对于
          其他人来说主要的是内容是否有帮助。一个实例：在detail页面上用于展示产品运费信息的一个js文件，它的注释是：
        </p>
        <div class="show-code">
          /**
          <br />* 表格显示列选择插件，支持复杂表头和冻结表头选择操作，并且支持表头拖动改变显示排序功能（描述应用业务场景 - 重要信息）
          <br />* @path 首页 -> 个人信息 -> 密码修改（适用于页面特有业务场景，帮助其他同事找到对应的调试页面）
          <br />* @author oyzq（使用author来描述作者信息，尽量写其他人容易识别你的信息）
          <br />* @time 2021年12月6日
          <br />**/
        </div>
        <h4 class="marginb20 margint20">类注释</h4>
        <div class="show-code">
          /**
          <br />* Class making playing animation fun and easy (描述这个类是什么和做什么)
          <br />
          * @param {object} customConfig 用于控制动画的自定义配置（参数类型使用@param{}包起来，后面接参数名，再接参数解释）
          <br />**/
        </div>
        <h4 class="marginb20 margint20">方法（函数）注释</h4>
        <div class="show-code">
          /**方法说明
          <br />*@method 方法名
          <br />*@for 所属类名
          <br />
          *@param{参数类型}参数名 参数说明
          <br />
          *@return {返回值类型} 返回值说明*
          <br />*/
        </div>
        <h4 class="marginb20 margint20">编程规范</h4>
        <p>1. 页面内嵌代码（XHTML 1.x）</p>
        <div class="show-code">
          &lt;script type="text/javascript"&gt;<br/>
          &nbsp;&nbsp;alert('Hello World!')<br/>
          &lt;/script&gt;
        </div>
        <p>2. 页面内嵌代码（HTML5）</p>
        <div class="show-code">
          &lt;script&gt;<br/>
          &nbsp;&nbsp;alert('Hello World!')<br/>
          &lt;/script&gt;
        </div>
        <p>3. 页面链接代码（XHTML 1.x）</p>
        <div class="show-code">
          &lt;script type="text/javascript" src="script.js"&gt;
          &lt;/script&gt;
        </div>
        <p>4. 页面链接代码（HTML5）</p>
        <div class="show-code">
          &lt;script src="script.js"&gt;
          &lt;/script&gt;
        </div>
      </div>
    </MyCard>
  </div>
</template>

<script>
import sourceCode from './md/files.js'
import 'mavon-editor/dist/css/index.css'

export default {
  name: 'guideIndex',
  components: {},
  data() {
    return {
      sourceCode: sourceCode,
    }
  },
}
</script>
<style scoped lang="scss">
.left2rem {
  margin-left: 2em;
}
.left1rem {
  margin-left: 1em;
}
li {
  line-height: 30px;
}
.show-code {
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 2px;
  color: #51bd3e;
}
</style>
