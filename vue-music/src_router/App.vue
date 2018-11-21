<template>
  <div id="app">
    <h2>基本路由</h2>
    <div class="left">
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>

    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>
<style>
  .left,.right{display: inline-block}
  .left{width:200px;margin-right: 100px;border: 1px solid #ccc}
  .right{width:500px;border: 1px solid pink}
  .router-link-active{color: red}
</style>
