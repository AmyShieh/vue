<template>
  <div class="nav">
    <router-link to="/">首页</router-link>
    <router-link to="/chart">chart</router-link>
  </div>
</template>

<script>
  export default{
      name:'HeadNav',
      data(){
          return{
              msg:"test"
          }
      }
  }
</script>
<style>
  .nav{
    height: 50px;
    line-height:50px;
    background-color: pink;
  }
</style>
