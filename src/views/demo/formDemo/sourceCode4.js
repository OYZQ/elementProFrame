export default`
<template>
  <MyRow :gutter="100">
    <MyCol :span="12">
      <MyTabs v-model="activeName" @tab-click="handleClick">
        <MyTabPane label="用户管理" name="first">用户管理内容</MyTabPane>
        <MyTabPane label="配置管理" name="second">配置管理内容</MyTabPane>
      </MyTabs>
    </MyCol>
    <MyCol :span="12">
      <MyRadioGroup class="margint15" v-model="radio" size="mini">
        <MyRadioButton label="上海"></MyRadioButton>
        <MyRadioButton label="北京"></MyRadioButton>
      </MyRadioGroup>
    </MyCol>
  </MyRow>
</template>

<script>
export default {
  name: 'formDemo',
  data() {
    return {
      activeName:"second",
      radio:'上海'
    }
  },
  methods: {
    handleClick(tab,event){
      window.console.log(tab,event)
    }
  },
}
</script>
`