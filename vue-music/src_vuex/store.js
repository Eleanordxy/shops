import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count:0
}

const mutations= {
  ADD(state){
    state.count = state.count +1
  },
  MINUS(state){
    state.count = state.count -1
  },
  INCREMENTODD(state){
    if(state.count%2==!0){
      state.count = state.count +1
    }
  },
  AYSON(state){
    setTimeout(()=>{
      state.count = state.count +1
    },1000)
  }
}

const actions = {
  add({commit}){
    commit('ADD')
  },
  minus({commit}){
    commit('MINUS')
  },
  incrementOdd({commit}){
    commit('INCREMENTODD')

  },
  ayson({commit}){
    commit('AYSON')

  }
}

const getters = {
  evenOrOdd(state){
    return state.count%2===0 ? "偶数":"奇数"
  }

}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

