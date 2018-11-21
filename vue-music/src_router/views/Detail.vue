<template>
  <div>
      id:{{$route.params.id}}===={{msg}}
    <ul>
      <li>{{messagedetail.id}}</li>
      <li>{{messagedetail.title}}</li>
      <li>{{messagedetail.conent}}</li>
    </ul>
  </div>
</template>

<script>

    export default {
      props:{msg:String},
        data(){
          return{
            messagedetail:{

            }
          }
        },
        mounted(){
          setTimeout(()=>{
            const alllist=[
              {
                id:1,
                title:"1111",
                content:"我是第一条数据"
              },
              {
                id:2,
                title:"2222",
                content:"我是第er条数据"
              },
              {
                id:5,
                title:"55555",
                content:"我是第wu条数据"
              }
            ]
            this.alllist = alllist
            const id = this.$route.params.id*1
            this.messagedetail=alllist.find(detail => detail.id===id)
          },1000)
        },
      watch:{
          $route:function(value){
            const id = value.params.id*1
            this.messagedetail=this.alllist.find(detail => detail.id===id)
          }
      }

    }
</script>
