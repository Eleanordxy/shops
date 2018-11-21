<template>
  <div id="app">
    <Todohead :addtodo="addtodo"></Todohead>
    <Todolist :todos="todos" :deltodo="deltodo"></Todolist>
    <Todofoot :todos="todos" :deltodolist="deltodolist" :selall="selall"></Todofoot>
  </div>
</template>
<script type="text/ecmascript-6">
  import Todohead from './components/TodoHeader.vue'
  import Todolist from './components/Todolist.vue'
  import Todofoot from './components/Todofooter.vue'
  export default {
    data(){
      return{
        todos:[
          {"title":"吃饭","complete":false},
          {"title":"睡觉","complete":false},
          {"title":"完","complete":false}
        ]
      }
    },
    components:{
      Todohead,
      Todolist,
      Todofoot
    },
    methods:{
      addtodo(todo){
        this.todos.unshift(todo)
      },
      deltodo(index){
        this.todos.splice(index,1)
      },
      //已经选好要删除的
      deltodolist(){
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      //全部选择
      selall(check){
          this.todos.forEach(todo=> todo.complete=check)
      }
    }
  }
</script>
