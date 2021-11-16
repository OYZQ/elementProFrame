export default`
<template>
  <MyDropdown @command="handleDropDown">
    <MyButton class="el-dropdown-link">
      下拉菜单
      <i class="el-icon-arrow-down el-icon--right"></i>
    </MyButton>
    <MyDropdownMenu slot="dropdown">
      <MyDropdownItem command="黄金糕">黄金糕</MyDropdownItem>
      <MyDropdownItem command="狮子头">狮子头</MyDropdownItem>
      <MyDropdownItem command="螺蛳粉">螺蛳粉</MyDropdownItem>
      <MyDropdownItem command="双皮奶">双皮奶</MyDropdownItem>
      <MyDropdownItem command="蚵仔煎">蚵仔煎</MyDropdownItem>
    </MyDropdownMenu>
  </MyDropdown>
</template>
<script>
  export default{
    name: "dropdownButton",
    methods:{
      handleDropDown(command){
       this.$message(command);
      }
    }
  }
</script>
`;