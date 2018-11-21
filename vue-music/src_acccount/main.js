import "babel-polyfill"
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'


Vue.prototype.$axios = axios
  new Vue({
    el:"#app",

    components:{
      App
    },
    render: h => h(App)
  })
