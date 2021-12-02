export default`
<template>
  <MyRow :gutter="100">
    <MyCol :span="8">
      <MyCheckboxGroup v-model="checkList">
        <MyCheckbox label="复选A"></MyCheckbox>
        <MyCheckbox label="复选B"></MyCheckbox>
        <MyCheckbox label="复选C" disabled></MyCheckbox>
        <MyCheckbox label="复选D" disabled></MyCheckbox>
      </MyCheckboxGroup>
    </MyCol>
    <MyCol :span="8">
      <MyCheckbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange"
      >全选</MyCheckbox>
      <MyCheckboxGroup v-model="checkList2" @change="handleCheckedCitiesChange">
        <MyCheckbox v-for="city in cities" :label="city" :key="city">{{city}}</MyCheckbox>
      </MyCheckboxGroup>
    </MyCol>
    <MyCol :span="8">
      <MyCheckboxGroup v-model="checkList3" :min="1" :max="2">
        <MyCheckbox v-for="city in cities3" :label="city" :key="city">{{city}}</MyCheckbox>
      </MyCheckboxGroup>
    </MyCol>
  </MyRow>
</template>

<script>
export default {
  name: 'formDemo',
  data() {
    return {
      checkList: ['复选A', '复选C'],
      checkList2: [],
      checkList3: ['上海'],
      cities: ['上海', '北京', '广州', '深圳'],
      cities3: ['上海', '最少勾选一个', '最多勾选两个', '深圳'],
      checkAll: false,
      isIndeterminate: false,
    }
  },
  mounted() {
    handleCheckAllChange(val) {
      this.checkList2 = val ? [...this.cities] : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length
    },
  },
}
</script>
`