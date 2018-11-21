<template>
  <div class="miste">
    <!--首页头部-->
    <HeadTop title="首页">
       <a class="header_search" slot="left" to="/search">
         <i class="iconfont icon-sousuo"></i>
       </a>
       <a class="header_login" slot="right" >
        <span class="header_login_text" >
          登录|注册
        </span>
         <span class="header_login_text">
          <i class="iconfont icon-yonghuming"></i>
        </span>
       </a>
     </HeadTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <!-- swiper的容器div -->
      <div class="swiper-container" >
        <!-- swiper的包裹层div -->
        <div class="swiper-wrapper">
          <!-- swiper的轮播div -->
          <div class="swiper-slide" >
            <a href="javascript:" class="link_to_food" >
              <div class="food_container">
                <img src="">
              </div>
              <span>11111</span>
            </a>
          </div>
          <div class="swiper-slide"><img src="./images/msite_back.svg" alt="back"></div>
          <div class="swiper-slide"><img src="./images/msite_back.svg" alt="back"></div>
        </div>
        <!-- swiper轮播图圆点 -->
        <div class="swiper-pagination"></div>
      </div>
      <!--<img src="./images/msite_back.svg" alt="back">-->
    </nav>
    <!--首页列表-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    import HeadTop from '../../components/HeadTop/HeadTop'
    import ShopList from '../../components/ShopList/ShopList'
    export default {
      components: {
        HeadTop,
        ShopList
      },
      mounted(){
        //swiper 方法
        var mySwiper = new Swiper ('.swiper-container', {
          direction: 'horizontal', // 垂直切换选项
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
          // 如果需要滚动条
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        })

      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite_nav
    padding-top 40px
  .swiper-container
    height 170px
</style>

