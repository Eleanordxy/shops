import "babel-polyfill"
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store'


Vue.prototype.$axios = axios
  new Vue({
    el:"#app",
    store,
    components:{
      App
    },
    render: h => h(App)
  })
