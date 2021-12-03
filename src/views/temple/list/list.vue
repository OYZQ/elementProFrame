<template>
  <div class="my-list">
    <MyCard shadow="never">
      <div slot="header" class="my-caed-header">查询列表</div>
      <div class="my-list-content">
        <MySearchBar :multi="false" @on-query="query">
        </MySearchBar>
      </div>
    </MyCard>
  </div>
</template>

<script>
export default {

}
</script>
<style scoped lang="scss" src="@/styles/modules/demo/index.scss"></style>