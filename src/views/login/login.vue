<template>
  <div class="login">
    <div class="conent">
      <div class="contentLeft">
        <div class="text">
          <p>Welcome</p>
          <p>前端通用框架</p>
        </div>
      </div>
      <div class="contentRight">
        <MyForm
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="form"
        >
          <MyFormItem label="账号" prop="account">
            <MyInput type="text" v-model="ruleForm.account" autocomplete="off"></MyInput>
          </MyFormItem>
          <MyFormItem label="密码" prop="pass">
            <MyInput type="password" v-model="ruleForm.pass" autocomplete="off"></MyInput>
          </MyFormItem>
          <MyForm-item>
            <MyButton style="width: 100%;" type="primary" @click="submitForm('ruleForm')">登录</MyButton>
          </MyForm-item>
        </MyForm>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    var validateAccount = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        account: '',
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        account: [{ validator: validateAccount, trigger: 'blur' }],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (
            this.ruleForm.account === 'admin' &&
            this.ruleForm.pass === '123'
          ) {
            this.$store.dispatch('user/getUserinfo').then(() => {
              this.$router.push({ path: '/' })
            })
          } else {
            this.$message.error('账号密码错误！')
          }
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  width: 100vw;
  background: -webkit-linear-gradient(#93c7fc, #409eff); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#93c7fc, #409eff); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#93c7fc, #409eff); /* Firefox 3.6 - 15 */
  background: linear-gradient(#93c7fc, #409eff); /* 标准的语法 */
  .conent {
    width: 60vw;
    height: 70vh;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #8f8787;
    box-shadow: 10px 10px 10px #4d4949;
    display: flex;
    .contentLeft {
      flex: 1;
      align-items: center;
      justify-content: center;
      display: flex;
      .text {
        flex: 1;
        text-align: center;
        color: #fff;
        font-size: 24px;
        p {
          line-height: 40px;
        }
      }
    }
    .contentRight {
      flex: 1;
      background: #fff;
      align-items: center;
      justify-content: center;
      display: flex;
      .form {
        margin-right: 50px;
        width: 100%;
      }
    }
  }
}
</style>