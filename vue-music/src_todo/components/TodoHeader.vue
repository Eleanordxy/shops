<template>
  <div class="todoheader">
   <label>添加选项：</label> <input type="text" v-model="title" @keyup.enter="addtitle"/>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          title:''
        }
      },
      props:{
        addtodo:Function
      },
      methods:{
        addtitle(){
          //1、检查验证
          const title = this.title.trim()
          if(!title){
            alert("请输入有效信息")
          }
          //2、声明一个对象
          const todo ={
            title,
            complete:false
          }
          //3、添加数据
          this.addtodo(todo)
          this.title=""
        }

      }
    }
</script>
<style>
  .todoheader{}
</style>
