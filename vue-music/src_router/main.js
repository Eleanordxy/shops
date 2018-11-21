import "babel-polyfill"
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

Vue.prototype.$axios = axios
  new Vue({
    el:"#app",
    router,
    components:{
      App
    },
    render: h => h(App)
  })
