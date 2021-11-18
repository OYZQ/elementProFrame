import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入elementUi
import "@/components/elementUi/index";
// 公共scss
import "@/styles/base/index.scss";
// 基础组件
import MyBase from './components/base/index'
Vue.use(MyBase)
// 代码预览高亮
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'
Vue.use(VueHighlightJS)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");