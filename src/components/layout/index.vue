<template>
  <div>
    <MyHeader>
      <MyMenu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <MySubmenu index="1">
          <template slot="title">使用指南</template>
          <template v-for="v in menus.one">
            <MyMenuItem :key="v.index" :index="v.index" @click="openPage(v.url)">{{ v.name }}</MyMenuItem>
          </template>
        </MySubmenu>
        <MySubmenu index="2">
          <template slot="title">公共元素</template>
          <template v-for="v in menus.two">
            <MyMenuItem :key="v.index" :index="v.index" @click="openPage(v.url)">{{ v.name }}</MyMenuItem>
          </template>
        </MySubmenu>
        <MyMenuItem index="3">模板页面</MyMenuItem>
        <MyMenuItem index="4">页面模块</MyMenuItem>
      </MyMenu>
    </MyHeader>
    <router-view class="content_main"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1.1',
      menus: {
        one: [
          {
            index: '1.1',
            name: '框架介绍',
            url: '/guide/index',
          },
          {
            index: '1.2',
            name: '代码规范',
            url: '/demo/button',
          },
          {
            index: '1.3',
            name: '日志',
            url: '/demo/button',
          },
        ],
        two: [
          {
            index: '2.1',
            name: '按钮案例',
            url: '/demo/button',
          },
          {
            index: '2.2',
            name: 'icon案例',
          },
          {
            index: '2.3',
            name: '表单案例',
          },
          {
            index: '2.4',
            name: '弹窗案例',
          },
          {
            index: '2.5',
            name: '表格案例',
          },
          {
            index: '2.6',
            name: '导入导出',
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
      },
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    openPage(url) {
      this.$router.push({
        path: url,
      })
    },
  },
}
</script>
