<template>
  <div id="app">
    <Search></Search>
    <MainList></MainList>
  </div>
</template>

<script>
    import Search from './commponents/searce.vue'
    import MainList from './commponents/mainList.vue'
    export default {
      components:{
        Search,
        MainList
      }
    }
</script>
