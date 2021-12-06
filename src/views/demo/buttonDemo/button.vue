<template>
  <div class="my--demo">
    <div class="demo-button">
      <MyViewCode title="【Normal】" :source-code="sourceCode1">
        <MyRow class="marginb20">
          <MyButton type="primary">主要按钮</MyButton>
          <MyButton type="success">成功按钮</MyButton>
          <MyButton type="info">信息按钮</MyButton>
          <MyButton type="warning">警告按钮</MyButton>
          <MyButton type="danger">危险按钮</MyButton>
          <MyButton plain>朴素按钮</MyButton>
          <MyButton type="primary" plain>主要按钮</MyButton>
          <MyButton type="success" plain>成功按钮</MyButton>
          <MyButton type="info" plain>信息按钮</MyButton>
          <MyButton type="warning" plain>警告按钮</MyButton>
          <MyButton type="danger" plain>危险按钮</MyButton>
        </MyRow>

        <MyRow>
          <MyButton type="primary" round>主要按钮</MyButton>
          <MyButton type="success" round>成功按钮</MyButton>
          <MyButton type="info" round>信息按钮</MyButton>
          <MyButton type="warning" round>警告按钮</MyButton>
          <MyButton type="danger" round>危险按钮</MyButton>
          <MyButton icon="el-icon-search" circle></MyButton>
          <MyButton type="primary" icon="el-icon-edit" circle></MyButton>
          <MyButton type="success" icon="el-icon-check" circle></MyButton>
          <MyButton type="info" icon="el-icon-message" circle></MyButton>
          <MyButton type="warning" icon="el-icon-star-off" circle></MyButton>
          <MyButton type="danger" icon="el-icon-delete" circle></MyButton>
        </MyRow>
      </MyViewCode>
      <MyViewCode title="【Disabled】" :source-code="sourceCode2">
        <MyRow>
          <MyButton type="primary" disabled>主要按钮</MyButton>
          <MyButton type="success" disabled>成功按钮</MyButton>
          <MyButton type="info" disabled>信息按钮</MyButton>
          <MyButton type="warning" disabled>警告按钮</MyButton>
          <MyButton type="danger" disabled>危险按钮</MyButton>
          <MyButton type="primary" plain disabled>主要按钮</MyButton>
          <MyButton type="success" plain disabled>成功按钮</MyButton>
          <MyButton type="info" plain disabled>信息按钮</MyButton>
          <MyButton type="warning" plain disabled>警告按钮</MyButton>
          <MyButton type="danger" plain disabled>危险按钮</MyButton>
        </MyRow>
      </MyViewCode>
      <MyViewCode title="【文字按钮】" :source-code="sourceCode3">
        <MyButton type="text" icon="el-icon-document">文字按钮</MyButton>
        <MyButton type="text" icon="el-icon-document" disabled>文字按钮</MyButton>
      </MyViewCode>
      <MyViewCode title="【下拉按钮】" :source-code="sourceCode4">
        <MyDropdown>
          <span class="el-dropdown-link">
            下拉菜单
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <MyDropdownMenu slot="dropdown">
            <MyDropdownItem>黄金糕</MyDropdownItem>
            <MyDropdownItem>狮子头</MyDropdownItem>
            <MyDropdownItem>螺蛳粉</MyDropdownItem>
            <MyDropdownItem disabled>双皮奶</MyDropdownItem>
            <MyDropdownItem divided>蚵仔煎</MyDropdownItem>
          </MyDropdownMenu>
        </MyDropdown>
      </MyViewCode>
      <MyViewCode title="【下拉按钮（点击事件）】" :source-code="sourceCode5">
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
      </MyViewCode>
      <MyViewCode title="【Badge标记】" :source-code="sourceCode6">
        <MyBadge :value="12" class="item">
          <MyButton size="small">评论</MyButton>
        </MyBadge>
        <MyBadge :value="3" class="item">
          <MyButton size="small">回复</MyButton>
        </MyBadge>
        <MyBadge :value="1" class="item" type="primary">
          <MyButton size="small">评论</MyButton>
        </MyBadge>
        <MyBadge :value="2" class="item" type="warning">
          <MyButton size="small">回复</MyButton>
        </MyBadge>
        <MyBadge value="new" class="item">
          <MyButton size="small">评论</MyButton>
        </MyBadge>
        <MyBadge value="hot" class="item">
          <MyButton size="small">回复</MyButton>
        </MyBadge>
        <MyBadge is-dot class="item">数据查询</MyBadge>
        <MyBadge is-dot class="item">
          <MyButton class="share-button" icon="el-icon-share" type="primary"></MyButton>
        </MyBadge>
      </MyViewCode>
    </div>
  </div>
</template>
<script>
import MyViewCode from '@/components/base/MyViewCode/MyViewCode'
import sourceCode1 from './sourceCode1.js'
import sourceCode2 from './sourceCode2.js'
import sourceCode3 from './sourceCode3.js'
import sourceCode4 from './sourceCode4.js'
import sourceCode5 from './sourceCode5.js'
import sourceCode6 from './sourceCode6.js'

export default {
  name: 'ButtonDemo',
  components: {
    MyViewCode,
  },
  data() {
    return {
      sourceCode1: sourceCode1,
      sourceCode2: sourceCode2,
      sourceCode3: sourceCode3,
      sourceCode4: sourceCode4,
      sourceCode5: sourceCode5,
      sourceCode6: sourceCode6,
    }
  },
  methods: {
    handleDropDown(command) {
      this.$message(command)
    },
  },
}
</script>
<style lang="scss" scoped>
.el-badge.item {
    margin-right: 30px;
}
</style>