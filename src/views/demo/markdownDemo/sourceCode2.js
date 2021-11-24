export default`
<template>
  <div>
      <MyViewCode title="简约" :source-code="sourceCode2">
        <mavon-editor
          style="position:static"
          class="blogPage"
          :subfield="false"
          :defaultOpen="'preview'"
          :toolbarsFlag="false"
          :editable="false"
          :scrollStyle="true"
          :ishljs="true"
          :value="value"
        />
      </MyViewCode>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'markdownDemo',
  components: {
    mavonEditor,
  },
  data() {
    return {
      value: \`## markdown编辑测试
### 引入
\`\`\`js
    // 全局注册
    // import with ES6
    import Vue from 'vue'
    import mavonEditor from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    // use
    Vue.use(mavonEditor)
    new Vue({
        'el': '#main',
        data() {
            return { value: '' }
        }
    })
\`\`\`
[github地址](https://github.com/hinesboy/mavonEditor)
>npm install mavon-editor --save
\`,
    }
  },
}
</script>
`