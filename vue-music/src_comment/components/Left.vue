<template>
  <div class="left">
    <label>姓名：</label><input type="text" v-model="name"/>
    <label>评论：</label><input type="text" v-model="comment"/>
    <button @click="add">添加</button>
  </div>
</template>

<script>
    export default {
      props:{addcomment:Function},
      data(){
        return{
          name:"",
          comment:""
        }
      },
      methods:{
        add(){
          //0、检查输入的合法性
          const name = this.name.trim()
          const comment = this.comment.trim()
          if(!name || !comment){
            alert("姓名和内容不能为空")
          }
         //1、根据输入的数据封装成一个对象
          const comments = {
            name,
            comment
          }
         //2、添加到commentlist中
          this.addcomment(comments)
          this.name=""
          this.comment=""
        }
      }
    }
</script>
