<template>
  <div class="todolist">
    <ul>
      <li @mouseenter="enter(index)" @mouseleave="enter()"  v-for="(todo,index) in todos" :key="index"  >
        <input type="checkbox" v-model="todo.complete"/>
        <label>{{todo.title}}</label>
        <input type="button" value="删除" v-show="isshow===index"   @click="del(todo.title,todo.complete,index)"/>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      props:{
        todos:Array,
        deltodo:Function
      },
      data(){
        return{
          isshow:-1,
        }
      },
      methods: {
        enter(index){
          this.isshow = index
        },
        del(alt,check,index){
          const {deltodo} = this
          if(check){
            if(window.confirm(`是否删除${alt}`)){
              deltodo(index)
            }
          }else {
            alert("请勾选要删除的选项")
          }
        }

      }

    }
</script>
<style>
  .todolist{border: 2px solid #ccc;margin: 20px 0}
  .todolist li:hover{background: #ccc}
</style>
