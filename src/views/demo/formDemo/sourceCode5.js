export default `
<template>
  <MyRow :gutter="100">
    <MyCol :span="8">
      <MyRadioGroup v-model="radio2">
        <MyRadio :label="1">选项A</MyRadio>
        <MyRadio :label="2">选项B</MyRadio>
        <MyRadio :label="3" disabled>选项C</MyRadio>
        <MyRadio :label="4">选项D</MyRadio>
      </MyRadioGroup>
    </MyCol>
    <MyCol :span="8">
      <MyRadioGroup v-model="radio4">
        <MyRadio border :label="1">选项A</MyRadio>
        <MyRadio border :label="2">选项B</MyRadio>
        <MyRadio border :label="3" disabled>选项C</MyRadio>
        <MyRadio border :label="4">选项D</MyRadio>
      </MyRadioGroup>
    </MyCol>
    <MyCol :span="8">
      <MyRadioGroup v-model="radio3">
        <MyRadioButton label="上海"></MyRadioButton>
        <MyRadioButton label="北京"></MyRadioButton>
        <MyRadioButton label="广州"></MyRadioButton>
        <MyRadioButton label="深圳"></MyRadioButton>
      </MyRadioGroup>
    </MyCol>
  </MyRow>
</template>

<script>
export default {
  name: 'formDemo',
  data() {
    return {
      radio2: 2,
      radio3: '上海',
      radio4:4
    }
  },
}
</script>
`