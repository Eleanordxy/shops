<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.ShowFoot"></FooterGuide>
  </div>
</template>

<script>
    import FooterGuide from './components/FooterGuide/FooterGuide'
    export default {
      components:{
        FooterGuide
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  // 整个应用组件的样式
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
