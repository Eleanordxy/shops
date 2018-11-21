<template>
  <div class="tab">
    <ul>
      <router-link tag="li" to="/recommend" >推荐</router-link>
      <router-link tag="li" to="/singer">歌手</router-link>
      <router-link tag="li" to="/rank">排行</router-link>
      <router-link tag="li" to="/search">搜索</router-link>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
</script>
<style lang='less' scoped>
  .tab{
    ul{
      display:-webkit-flex;display:flex;margin-bottom: 10px;
      li{text-align: center;height:40px;line-height: 40px;width:25%;}
      .router-link-active{border-bottom: 2px solid yellow}
    }
  }
</style>
