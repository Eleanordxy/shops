<template>
  <div id="app">
    <h2>Vuex基本方法</h2>
    <p>click {{count}} ,{{evenOrOdd}}</p>
    <button @click="add">+</button>
    <button @click="minus">-</button>
    <button @click="incrementOdd">偶数才增加</button>
    <button @click="ayson">异步加载</button>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          count:0
        }
      },
      computed:{
        evenOrOdd(){
          return this.count%2===0 ? "偶数":"奇数"
        }
      },
      methods:{
        add(){
          this.count = this.count +1
        },
        minus(){
          this.count = this.count -1
        },
        incrementOdd(){
          if(this.count%2==!0){
            this.count = this.count +1
          }
        },
        ayson(){
          setTimeout(()=>{
            this.count = this.count +1
          },1000)
        }
      }
    }
</script>

