<template>
  <div>
    <h2>home</h2>
    <router-link to="/home/message">message</router-link>
    <router-link to="/home/news">news</router-link>
    <div>
      show
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
    export default {}
</script>
