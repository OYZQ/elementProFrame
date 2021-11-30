import {getToken,setToken} from '@/utils/auth'

const state = {
  token:getToken(),//token
}

const mutations = {
  setToken(state,token){
    state.token = token;
    setToken(token)
  }
}

const actions = {
  
}

export default {
  state,
  mutations,
  actions,
  namespaced: true
}