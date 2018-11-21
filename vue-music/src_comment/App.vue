<template>
  <div id="app">
    <Left :addcomment="addcomment" ></Left>
    <Right :commentlist="commentlist" :delcomment="delcomment"></Right>
  </div>
</template>
<script type="text/ecmascript-6">
  import Left from './components/Left.vue'
  import Right from './components/Right.vue'
  export default {
    data(){
      return{
        commentlist:[ //数据在那个组件，更新的数据和方法就在当前组建立
          {"name":"11","comment":"11111"},
          {"name":"22","comment":"2222"},
          {"name":"33","comment":"3333"}
        ]
      }
    },
    components:{
      Left,
      Right
    },
    methods:{
      addcomment(comments){
        this.commentlist.unshift(comments)
      },
      delcomment(index){
        this.commentlist.splice(index,1)
      }
    }
  }
</script>
