<template>
  <div>
    <footer class="footer_guide border-1px">
      <!-- <a href="javascript:;" class="guide_item on">
      <span class="item_icon">
      <i class="iconfont icon-food"></i>
      </span>
      <span>外卖</span>
      </a> -->
      <router-link class="guide_item" to="/msite" :class="{on:'/msite'===$route.path}">
        <span class="item_icon">
        <i class="iconfont icon-food"></i>
        </span>
        <span>首页</span>
      </router-link>
      <router-link class="guide_item" to="/search" :class="{on:'/search'===$route.path}">
        <span class="item_icon">
        <i class="iconfont icon-search"></i>
        </span>
        <span>搜索</span>
      </router-link>
      <router-link class="guide_item" to="/order" :class="{on:'/order'===$route.path}">
        <span class="item_icon">
        <i class="iconfont icon-single"></i>
        </span>
        <span>订单</span>
      </router-link>
      <router-link class="guide_item" to="/profile" :class="{on:'/profile'===$route.path}">
        <span class="item_icon">
        <i class="iconfont icon-user"></i>
        </span>
        <span>我的</span>
      </router-link>
    </footer>
  </div>
</template>

<script>
    export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  /*引入公共样式*/
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    // 顶部有白色的边框
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
