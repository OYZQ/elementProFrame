export default`
<template>
  <MyForm :model="ruleForm3" :rules="rules3" ref="ruleForm3" label-width="20rem">
    <MyFormItem label="日期选择（日）" prop="date1">
      <MyDatePicker v-model="ruleForm3.date1" type="date" placeholder="请选择"></MyDatePicker>
    </MyFormItem>
    <MyFormItem label="日期选择（周）" prop="date2">
      <MyDatePicker
        v-model="ruleForm3.date2"
        format="yyyy 第 WW 周"
        type="week"
        placeholder="请选择"
      ></MyDatePicker>
    </MyFormItem>
    <MyFormItem label="日期选择（月）" prop="date3">
      <MyDatePicker v-model="ruleForm3.date3" type="month" placeholder="请选择"></MyDatePicker>
    </MyFormItem>
    <MyFormItem label="日期选择（年）" prop="date4">
      <MyDatePicker v-model="ruleForm3.date4" type="year" placeholder="请选择"></MyDatePicker>
    </MyFormItem>
    <MyFormItem label="日期段选择" prop="date5">
      <MyDatePicker
        v-model="ruleForm3.date5"
        type="daterange"
        range-separator="~"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></MyDatePicker>
    </MyFormItem>
    <MyFormItem label="指定范围日期" prop="date6">
      <MyDatePicker
        v-model="ruleForm3.date6"
        type="daterange"
        range-separator="~"
        :picker-options="pickerOptions"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></MyDatePicker>
    </MyFormItem>
    <MyFormItem label="日期时间段选择" prop="date7">
      <MyDatePicker
        v-model="ruleForm3.date7"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></MyDatePicker>
    </MyFormItem>
    <MyFormItem label="日期选择（必填）" prop="date8">
      <MyDatePicker v-model="ruleForm3.date8" type="date" placeholder="请选择"></MyDatePicker>
    </MyFormItem>
    <MyFormItem label="日期选择（禁用）" prop="date9">
      <MyDatePicker :disabled="true" v-model="ruleForm3.date9" type="date" placeholder="请选择"></MyDatePicker>
    </MyFormItem>
  </MyForm>
</template>

<script>
export default {
  name: 'formDemo',
  data() {
    return {
      ruleForm3: {
        date1: '',
        date2: '',
        date3: '',
        date4: '',
        date5: '',
        date6: '',
        date7: '',
        date8: '',
        date9:''
      },
      rules3: {
        date8: [{ required: true, message: '请选择', trigger: 'change' }],
      },
      pickerOptions: {
        // 日期指定范围内时间段设置
        disabledDate(time) {
          return time.getTime() < Date.now()
        },
      },
    }
  },
  mounted() {
     // 表单3 日期
    this.$refs['ruleForm3'].validate((valid) => {
      if (valid) {
        window.console.log('valid!')
      } else {
        window.console.log('error submit!')
        return false
      }
    })
  },
}
</script>
`