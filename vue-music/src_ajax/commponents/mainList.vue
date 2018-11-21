<template>
  <div class="mainlist">
    <h2 v-if="first">输入搜索名称</h2>
    <h2 v-if="loading">加载中</h2>
    <h2 v-if="error">{{error}}</h2>
    <ul>
      <li v-for="(item,index) in user" :key="index">
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import Pubsub from 'pubsub-js'
    export default {
      data(){
        return{
          first:true,
          loading:false,
          error:'',
          user:''
        }
      },
      mounted(){
        Pubsub.subscribe("send",(mes,message)=>{
          const url = `https://api.github.com/search/uesrs?q=${message}`
          //更新状态（请求中）初始化
        // alert(text)
          this.first=false
          this.loading=true
          this.user=""
          this.error=""
          //发送请求
          this.$axios.get(url).then(res=>{
            //成功
            this.user = res.data.items
            this.loading=false
          }).catch(error=>{
            this.loading=false
            this.error="假造失败"
          })
        })
      }


    }
</script>
<style>
  li{display:inline-block;width:200px;border: 1px solid #ccc; margin: 0 20px 20px 0}
</style>
