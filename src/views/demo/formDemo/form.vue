<template>
  <div class="my--demo">
    <div class="demo-form">
      <MyViewCode title="[输入框]" :source-code="sourceCode1">
        <MyForm :model="ruleForm" :rules="rules" ref="ruleForm1" label-width="150px">
          <MyFormItem label="普通输入框" prop="text1">
            <MyInput v-model="ruleForm.text1" placeholder="请输入文本"></MyInput>
          </MyFormItem>
          <MyFormItem label="必填输入框" prop="text2">
            <MyInput v-model="ruleForm.text2" placeholder="请输入文本"></MyInput>
          </MyFormItem>
          <MyFormItem label="禁用输入框" prop="text3">
            <MyInput v-model="ruleForm.text3" :disabled="true" placeholder="请输入文本"></MyInput>
          </MyFormItem>
          <MyFormItem label="添加单位" prop="text4">
            <MyInput v-model="ruleForm.text4" placeholder="请输入文本">
              <template slot="append">元</template>
            </MyInput>
          </MyFormItem>
          <MyFormItem label="添加单位禁用" prop="text5">
            <MyInput v-model="ruleForm.text5" :disabled="true" placeholder="请输入文本">
              <template slot="append">元</template>
            </MyInput>
          </MyFormItem>
          <MyFormItem label="数字输入框" prop="text6">
            <MyInputControlNum v-model="ruleForm.text6" placeholder="请输入数字">
              <template slot="append">单位</template>
            </MyInputControlNum>
          </MyFormItem>
          <MyFormItem label="金额类数字框" prop="text7">
            <MyInputControlNum
              v-model="ruleForm.text7"
              placeholder="请输入金额"
              :controlConfig="controlConfig.numcontrol_1"
              max="1000000000"
              min="-1000000"
              :clearable="true"
            >
              <template slot="append">元</template>
            </MyInputControlNum>
          </MyFormItem>
          <MyFormItem>
            <MyButton type="primary" @click="submitForm('ruleForm1')">提交</MyButton>
          </MyFormItem>
        </MyForm>
      </MyViewCode>
      <MyViewCode title="[下拉框]" :source-code="sourceCode1">
        
      </MyViewCode>
    </div>
  </div>
</template>

<script>
import MyViewCode from '@/components/base/MyViewCode/MyViewCode'
import sourceCode1 from './sourceCode1.js'
export default {
  name: 'formDemo',
  components: {
    MyViewCode,
  },
  data() {
    return {
      sourceCode1: sourceCode1,
      ruleForm: {
        text1: '',
        text2: '',
        text3: '',
        text4: '',
        text5: '',
        text6: '',
        text7: '',
      },
      rules: {
        text2: [{ required: true, message: '请输入文本', trigger: 'blur' }],
      },
      controlConfig: {
        numcontrol_1: {
          defaultValue: 0, //默认值
          align: 'right', //text-align对齐方式（默认left）
          decimalsLength: 4, //小数位
          commaVaild: true, //是否千分化（逗号分隔）
          isCommaVaild: false, //接受或传递后台的值是否千分化（逗号分隔）
          needPaste: true, //粘贴
          increment: 1.2, //键盘上下键增减值的刻度，默认1
        },
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: 'submit success!',
            type: 'success',
          })
        }else{
          this.$message.error('submit error!');
        }
      })
    },
  },
}
</script>

<style scoped lang="scss" src="@/styles/modules/demo/index.scss"></style>