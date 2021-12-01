import {
  getToken,
  setToken
} from '@/utils/auth'
import router,{resetRouter} from '@/router/index'
import Layout from '@/components/layout/index'
import userInfo from '@/assets/json/userInfo.js'

const state = {
  token: getToken(), //token
  menuList:[],
  name:''
}

const mutations = {
  setToken(state, token) {
    state.token = token;
    setToken(token)
  },
  setMenuList(state,menuList){
    state.menuList = menuList;
  },
  setName(state,name){
    state.name = name
  }
}

const actions = {
  // 获取权限菜单路径
  rolesChange(store, menu) {
    return new Promise((resolve) => {
      let asyncRoutes = [{
        path: "/",
        name: "index",
        component: Layout,
        redirect: '/guide/index',
        children: []
      }]
      resetRouter();
      asyncRoutes[0].children = menu
      router.addRoutes(asyncRoutes)
      resolve()
    }).catch(err => {
      console.log(err)
    })
  },
  getUserinfo({
    commit,
    dispatch
  }) {
    return new Promise((resolve, reject) => {
      try {
        let obj = {...userInfo};// 请求后台权限路由数据
        commit('setMenuList' , obj.menuList);// 存储权限路由
        commit('setToken', obj.token);
        dispatch('rolesChange', obj.menuList).then(()=>{
          resolve()
        })
      } catch (e) {
        reject(e)
      }
    })
  }
}

export default {
  state,
  mutations,
  actions,
  namespaced: true
}