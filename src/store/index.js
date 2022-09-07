import { createStore } from 'vuex'

export default createStore({
  
  state: {
    userInfo:{
      id:'20191687310124',
      passWord:'123'
    }
  },
  getters: {
  },
  mutations: {
    getUserInfo(state,userInfo){
      state.userInfo=userInfo
      console.log(userInfo)
    }
  },
  actions: {
    getUserInfo({commit},userInfo){
        commit('getUserInfo',userInfo)
        console.log(userInfo)
    }
  },
  modules: {
  }
})
