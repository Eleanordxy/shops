<template>
  <div>
    message
    <ul>
      <li v-for="(item,index) in message" :key="index">
        <router-link :to="`/home/message/detail/${item.id}`">{{item.id}}-----{{item.title}}</router-link>
        <button @click="push(item.id)">push路由方法</button>
        <button @click="replace(item.id)">replace路由方法</button>
      </li>
    </ul>
    <button @click="$router.back()">返回上一部</button>
    <router-view :msg="text"></router-view>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          text:"1233",
          message:[
            {
              id:1,
              title:"1111"
            },
            {
              id:2,
              title:"2222"
            },
            {
              id:5,
              title:"55555"
            }
          ]
        }
      },
      methods:{
        push(id){
          this.$router.push(`/home/message/detail/${id}`)
        },
        replace(id){
          this.$router.replace(`/home/message/detail/${id}`)
        }
      }

    }
</script>
