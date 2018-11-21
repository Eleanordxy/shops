<template>
  <div class="right">
    <ul>
      <li v-for="(item,index) in commentlist" :key="index">
        <p>{{item.name}}</p>
        <p>{{item.comment}}</p>
        <p @click="del">删除</p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      props:{commentlist:Array,
        delcomment:Function
      },
      methods:{
        del(){
          const {index} = this
          if(window.confirm(`确定删除词条的评论吗?`)){
            this.delcomment(index)
          }
        }
      }
    }
</script>
