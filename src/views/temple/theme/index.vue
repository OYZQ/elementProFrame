<template>
  <div class="my--demo">
    <MyViewCode title="主题切换">
      <MyDropdown>
        <MyButton type="primary">
          主题切换
          <i class="el-icon-arrow-down el-icon--right"></i>
        </MyButton>
        <MyDropdownMenu slot="dropdown">
          <MyDropdownItem @click.native="theme('normal')">默认</MyDropdownItem>
          <MyDropdownItem @click.native="theme('Red')">红色</MyDropdownItem>
          <MyDropdownItem @click.native="theme('Blue')">蓝色</MyDropdownItem>
        </MyDropdownMenu>
      </MyDropdown>
      <div class="common-util">测试主题变化</div>
    </MyViewCode>
  </div>
</template>

<script>
import MyViewCode from '@/components/base/MyViewCode/MyViewCode'
export default {
  name: 'themeDemo',
  components: {
    MyViewCode,
  },
  data() {
    return {}
  },
  methods: {
    //换主题
    theme(type) {
      //this.$store.commit('upDate', { themeType: type })
      window.document.documentElement.setAttribute('data-theme', type)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/styles/base/_handle.scss';

.common-util {
  font-size: 18px;
  height: 100px;
  margin-top: 20px;
  @include font_color('titleColor');
  @include background_color('mainColor');
  @include border_color('mainColor');
}
</style>
<style scoped lang="scss" src="@/styles/modules/demo/index.scss"></style>