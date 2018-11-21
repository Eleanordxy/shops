<template>
  <transition name="slide">
    <div class="singer-detail">
      <div class="back" @click="back">返回上一级</div>
      {{singer_detail.Pother_name}}---------{{singer_detail.Pinder}}
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        singer_detail: {}
      }
    },
    computed: {
      ...mapGetters([
        'singer'
      ])
    },
    created() {
      //console.log(this.singer)
      this._getdetail()
    },
    methods: {
      _getdetail() {
        if(!this.singer.id) {
          this.$router.push('/singer')
          return
        }
        let self = this
        self.$axios.get('./../../../static/singer_detail.json').then(res => {
            this.singer_detail = res.data.list[this.singer.id]
            console.log(this.singer_detail)
        })
      },
      back() {
        this.$router.back()
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
.singer-detail
  position:absolute
  top:0
  bottom :0
  left:0
  right:0
  background:black

  .slide-enter-active,.silde-leave-active
    transition :all 0.3
  .slide-enter,.slide-leave-to
    transform:translate3d(100%,0,0)
</style>
