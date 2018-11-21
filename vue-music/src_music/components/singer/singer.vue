<template>
  <div class="singerlist">
    <ul>
        <div class="singer_list" v-for="list in newsingerlist" >
          <h2>{{list.title}}</h2>
          <li v-for="item in list.items" @click="getId(item)">{{item.name}}</li>
        </div>
    </ul>
    <div>
      <span v-for="title in shortlist">{{title}}</span>
    </div>
    <router-view></router-view>
  </div>

</template>
<script type="text/ecmascript-6">
import {mapMutations} from 'vuex'

  const HOT_NAME = '热门'
  const HOT_SINGER_LEN = 5
  export default {
    data() {
      return{
        singerList: [],
        newsingerlist: []
      }
    },
    mounted() {
      this.getData()
    },
    computed: {
      shortlist() {
        return this.newsingerlist.map((group) => {
          return group.title.substr(0,1)
        })
      }
    },
    methods: {
      getData() {
        let self = this
        self.$axios.get('./../../../static/singer.json').then(res => {
            this.singerList = res.data.list
            this.newsingerlist = this._normalizeSinger (this.singerList)
            //this.singerlist (this.newsingerlist)
           //console.log(this._normalizeSinger (this.singerList))

        }).catch({})
      },
      _normalizeSinger (list) {
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        }
        list.forEach((item, index) => {
          if (index < HOT_SINGER_LEN) {
            map.hot.items.push({
              name: item.Psinger_name,
              id: item.Psinger_mid
            })
          }
          const key = item.Pinder
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push({
            name: item.Psinger_name,
            id: item.Psinger_mid
          })
        })
        // 为了得到有序列表，我们需要处理 map
        let ret = []
        let hot = []
        for (let key in map) {
          let val = map[key]
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val)
          } else if (val.title === HOT_NAME) {
            hot.push(val)
          }
        }
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        return hot.concat(ret)

        /*let hotlist = []
        let ranklist = []
        let alllist = []
        for (let i = 0; i < list.length; i++) {
          //list[i]
          if(list[i].Pinder === HOT_NAME) {
              hotlist.push(list[i])
          }else {
            ranklist.push(list[i])
            ranklist.sort((a, b) => {
              return a.Pinder.charCodeAt(0) - b.Pinder.charCodeAt(0)
            })
          }
        }
      return alllist = hotlist.concat(ranklist)
     */
      },
      getId(singer) {
        this.$router.push({
          path: `/singer/${singer.id}`
        })
        this.setSinger(singer)
      },
      ...mapMutations({
        setSinger: 'SET_SINGER'
      })

    }

  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
  h2
    padding-left 20px
    line-height:20px
    background :#ccc
  li
    padding-left :30px
    line-height :30px

</style>
