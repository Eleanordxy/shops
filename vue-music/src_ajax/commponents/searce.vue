<template>
  <div class="search">
    <input type="text" v-model="message"/><button @click="sendvalue">搜索</button>
  </div>
</template>

<script>
    import Pubsub from 'pubsub-js'
    export default {
      data(){
        return{
          message:"123"
        }
      },
      methods:{
        sendvalue(){
          const message =this.message.trim()
          if(message){
            Pubsub.publish("send",message)
          }
        }

      }

    }
</script>
