<template>
  <div>
    <MyHeader>
      <MyMenu
        class="el-menu-demo"
        mode="horizontal"
        :default-active="$route.path"
        router
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <MySubmenu index="1">
          <template slot="title">使用指南</template>
          <template v-for="v in menus.one">
            <MyMenuItem :key="v.index" :index="v.index">{{ v.name }}</MyMenuItem>
          </template>
        </MySubmenu>
        <MySubmenu index="2">
          <template slot="title">公共元素</template>
          <template v-for="v in menus.two">
            <MyMenuItem :key="v.index" :index="v.index">{{ v.name }}</MyMenuItem>
          </template>
        </MySubmenu>
        <MySubmenu index="3">
          <template slot="title">模板页面</template>
          <template v-for="v in menus.three">
            <MyMenuItem :key="v.index" :index="v.index">{{ v.name }}</MyMenuItem>
          </template>
        </MySubmenu>
        <MyMenuItem index="4">页面模块</MyMenuItem>
        <MySubmenu index="5">
          <template slot="title">原生组件</template>
          <template v-for="v in menus.five">
            <MyMenuItem :key="v.index" :index="v.index">{{ v.name }}</MyMenuItem>
          </template>
        </MySubmenu>
      </MyMenu>
      <MyPopover trigger="hover" placement="bottom-end" :offset="20">
        <div class="account" slot="reference"></div>
        <div class="hoverContent">
          <div>
            <i class="el-icon-user"></i>
            <span>姓名：admin</span>
          </div>
          <div>
            <i class="el-icon-coin"></i>
            <span>状态：正常</span>
          </div>
          <div class="exit" @click="exit">
            <i class="el-icon-bicycle"></i>
            <span>退出</span>
          </div>
        </div>
      </MyPopover>
    </MyHeader>
    <router-view class="content_mainAll"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '/guide/index',
      menus: {
        one: [
          {
            index: '/guide/index',
            name: '框架介绍',
            url: '/guide/index',
          },
          {
            index: '/guide/standard',
            name: '代码规范',
            url: '/guide/standard',
          },
          {
            index: '',
            name: '日志',
          },
        ],
        two: [
          {
            index: '/demo/button',
            name: '按钮案例',
            url: '/demo/button',
          },
          {
            index: '/demo/markdown',
            name: 'markdown案例',
            url: '/demo/markdown',
          },
          {
            index: '/demo/form',
            name: '表单案例',
            url: '/demo/form',
          },
          {
            index: '/demo/dialog',
            name: '弹窗案例',
            url: '/demo/dialog',
          },
          {
            index: '/demo/table',
            name: '表格案例',
            url: '/demo/table',
          },
          {
            index: '/demo/excel',
            name: '导入导出',
            url: '/demo/excel',
          },
          {
            index: '2.7',
            name: '树形控件',
          },
          {
            index: '2.8',
            name: '模糊匹配',
          },
          {
            index: '2.9',
            name: '多级联动',
          },
          {
            index: '2.10',
            name: 'echart',
          },
          {
            index: '2.11',
            name: 'newPage',
          },
          {
            index: '2.12',
            name: 'demo',
          },
          {
            index: '2.13',
            name: '文件上传',
          },
          {
            index: '2.14',
            name: '企业图谱',
          },
          {
            index: '2.15',
            name: '股权穿透图',
          },
          {
            index: '2.16',
            name: '穿梭框',
          },
        ],
        three: [
          {
            index: '/temple/theme',
            name: '主题切换',
            url: '/temple/theme',
          },
        ],
        five: [
          {
            index: '/original/notice',
            name: '原生弹窗',
            url: '/original/notice',
          },
        ],
      },
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    exit() {
      // 退出
      this.$store.commit('user/setToken', '')
      this.$router.push({ path: '/login' })
    },
  },
}
</script>
<style lang="scss" scoped>
.account {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  background-image: url('../../assets/img/account.jpg');
  border-radius: 50%;
  background-repeat: round;
  z-index: 999;
  cursor: pointer;
}
.hoverContent {
  line-height: 24px;
  span {
    margin-left: 10px;
  }
  .exit {
    cursor: pointer;
    border-top: 1px solid #ddd;
    margin-top: 10px;
    padding-top: 10px;
  }
}
</style>
