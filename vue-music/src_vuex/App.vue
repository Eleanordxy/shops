<template>
  <div id="app">
    <h2>Vuex基本方法</h2>
    <p>click {{count}} ,{{evenOrOdd}}</p>
    <button @click="add">+</button>
    <button @click="minus">-</button>
    <button @click="incrementOdd">奇数才增加</button>
    <button @click="ayson">异步加载</button>
  </div>
</template>

<script>
    import {mapState,mapGetters,mapActions} from 'vuex'
    export default {
      computed:{
        ...mapState(['count']), //this.$store.state.count
        ...mapGetters(['evenOrOdd'])  // this.$store.getters.evenOrOdd
      },
      methods:{

          ...mapActions([
            'add',   //add(){this.$store.actions.add }
            'minus',
            'incrementOdd',
            'ayson'

          ])
      }
    }
</script>

