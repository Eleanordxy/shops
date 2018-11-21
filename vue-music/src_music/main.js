// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill"
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import store from './store'
import './common/stylus/index.styl'
Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  loading: require('./common/image/default.png')
})

Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
