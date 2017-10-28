<template>
  <div id="app">
    <HeadNav></HeadNav>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import HeadNav from '@/components/common/HeadNav';
export default {
  name: 'app',
  components:{
    HeadNav
  }
}
</script>

<style>
  html,body{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  .content{
    height: calc(100% - 50px);
    background-color: skyblue;
  }
</style>
