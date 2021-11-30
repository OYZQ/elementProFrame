import {
  getToken,
  setToken
} from '@/utils/auth'
import router from '@/router/index'
import Layout from '@/components/layout/index'

const state = {
  token: getToken(), //token
}

const mutations = {
  setToken(state, token) {
    state.token = token;
    setToken(token)
  },

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
      asyncRoutes[0].children = menu
      router.addRoutes(asyncRoutes)
      resolve()
    }).catch(err => {
      console.log(err)
    })
  },
  userinfo({
    commit,
    dispatch
  }, obj) {
    return new Promise((resolve, reject) => {
      try {
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