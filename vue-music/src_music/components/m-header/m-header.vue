<template>
  <div class="m-header">
    <div class="logo"></div>
    <div class="icon">Music Chicken</div>
  </div>
</template>
<style scoped>
 .logo{position:relative;top:5px;display: inline-block;background-image:url('./logo@2x.png');width:30px;height:32px;background-size: 30px 32px}
 @media screen and (-webkit-min-device-pixel-ratio: 2){
   .logo{background-image:url('./logo@3x.png');background-size: 30px 32px}
 }
.icon{display: inline-block;}
.m-header{height:44px;position:relative;line-height: 44px;text-align: center}
</style>
