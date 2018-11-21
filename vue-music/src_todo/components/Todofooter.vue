<template>
  <div class="todofooter">
    <input type="checkbox" v-model="isallcheck"/>
    <label>已选{{completesize}}/全部{{todos.length}}</label>
    <input type="button" v-show="completesize==todos.length" value="全部删除" @click="deltodolist"/>
  </div>
</template>

<script>
    export default {
      props:{
        todos:Array,
        deltodolist:Function,
        selall:Function
      },
      data(){
        return{
          //isallcheck:true
        }
      },
      computed:{
        completesize(){
          return this.todos.reduce((perTotal,todo) => perTotal + (todo.complete?1:0),0)
        },
        isallcheck:{
          get(){
            return this.completesize === this.todos.length && this.completesize>0
          },
          set(value){ ///是当前isallcheck的最新值
            this.selall(value)

          }
        }
      }
    }
</script>
