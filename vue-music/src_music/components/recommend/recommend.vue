<template>
  <div class="recommend">
    <div class="recommend-content">
      <div v-if="recommends.length" class="slider-wrapper">
        <slider>
          <div v-for="item in recommends">
            <a :href="item.linkUrl" class="needsclick">
              <img v-lazy="item.picUrl"/>
            </a>
          </div>
        </slider>
      </div>
      <div class="loading-container" v-show="recommends.length==0">
        <loading></loading>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul>
          <!--<li v-for="item in disList" class="item">-->
            <!--<div class="icon"><img :src="item.imgurl"/></div>-->
            <!--<div class="text">-->
              <!--<h2 class="name" v-html="item.creator.name"></h2>-->
              <!--<p class="desc" v-html="item.dissname"></p>-->
            <!--</div>-->
          <!--</li>-->
          <li class="item">
            <div class="icon"><img width="60" height="60" src="./../../common/image/default.png"/></div>
            <div class="text">
              <h2 class="name" >sdasdasd</h2>
              <p class="desc" >asdasdas</p>
            </div>
          </li>
          <li class="item">
            <div class="icon"><img src=""/></div>
            <div class="text">
              <h2 class="name" >sdasdasd</h2>
              <p class="desc" >asdasdas</p>
            </div>
          </li>
          <li class="item">
            <div class="icon"><img src=""/></div>
            <div class="text">
              <h2 class="name" >sdasdasd</h2>
              <p class="desc" >asdasdas</p>
            </div>
          </li>
          <li class="item">
            <div class="icon"><img src=""/></div>
            <div class="text">
              <h2 class="name" >sdasdasd</h2>
              <p class="desc" >asdasdas</p>
            </div>
          </li>
          <li class="item">
            <div class="icon"><img src=""/></div>
            <div class="text">
              <h2 class="name" >sdasdasd</h2>
              <p class="desc" >asdasdas</p>
            </div>
          </li>
          <li class="item">
          <div class="icon"><img src=""/></div>
          <div class="text">
            <h2 class="name" >sdasdasd</h2>
            <p class="desc" >asdasdas</p>
          </div>
        </li>
          <li class="item">
          <div class="icon"><img src=""/></div>
          <div class="text">
            <h2 class="name" >sdasdasd</h2>
            <p class="desc" >asdasdas</p>
          </div>
        </li>
          <li class="item">
          <div class="icon"><img src=""/></div>
          <div class="text">
            <h2 class="name" >sdasdasd</h2>
            <p class="desc" >asdasdas</p>
          </div>
        </li>
          <li class="item">
            <div class="icon"><img src=""/></div>
            <div class="text">
              <h2 class="name" >sdasdasd</h2>
              <p class="desc" >asdasdas</p>
            </div>
          </li>
          <li class="item">
            <div class="icon"><img src=""/></div>
            <div class="text">
              <h2 class="name" >sdasdasd</h2>
              <p class="desc" >asdasdas</p>
            </div>
          </li>
          <li class="item">
            <div class="icon"><img src=""/></div>
            <div class="text">
              <h2 class="name" >sdasdasd</h2>
              <p class="desc" >asdasdas</p>
            </div>
          </li>
          <li class="item">
            <div class="icon"><img src=""/></div>
            <div class="text">
              <h2 class="name" >sdasdasd</h2>
              <p class="desc" >asdasdas</p>
            </div>
          </li>
          <li class="item">
            <div class="icon"><img src=""/></div>
            <div class="text">
              <h2 class="name" >sdasdasd</h2>
              <p class="desc" >asdasdas</p>
            </div>
          </li>


        </ul>
      </div>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
import {getRecommend,getDiscList} from './../../api/recommend'
import {ERR_OK} from './../../api/config'
import Slider from './../../base/slider/slider'
import Loading from './../../base/loading/loading'

export default {
  data() {
    return {
      recommends: [],
      disList: []
    }
  },
  created() {
    setTimeout(()=>{
      this._getRecommend()
    },2000)

  },
  methods: {
    _getRecommend(){
      getRecommend().then((res) =>{
      if (res.code === ERR_OK) {
        this.recommends = res.data.slider
        this.disList = res.data.list
      }
      })
    }
    // _getDiclist(){
    //   getDiscList().then((res) =>{
    //     if (res.code === ERR_OK) {
    //       this.disList = res.data.list
    //     }
    //   })
    // }

  },
  components: {
    Slider,
    Loading
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
