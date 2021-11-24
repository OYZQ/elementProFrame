<template>
  <div class="my--demo">
    <div class="demo-form">
      <MyViewCode title="普通" :source-code="sourceCode1">
        <div>
          <mavon-editor v-model="value" />
        </div>
      </MyViewCode>
      <MyViewCode title="简约" :source-code="sourceCode1">
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
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import MyViewCode from '@/components/base/MyViewCode/MyViewCode'
import sourceCode1 from './sourceCode1.js'
export default {
  name: 'markdownDemo',
  components: {
    MyViewCode,
    mavonEditor,
  },
  data() {
    return {
      sourceCode1: sourceCode1,
      value: `## markdown编辑测试
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
`,
    }
  },
  methods: {},
}
</script>

<style scoped lang="scss" src="@/styles/modules/demo/index.scss"></style>