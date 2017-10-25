<template>
  <div id="app">
    test
    <leftNav></leftNav>
    <router-view/>
  </div>
</template>

<script>
  import leftNav from '@/component/common/leftNav'
export default {
  name: 'app',
  components: {
    leftNav
  }
}
</script>

<style>
  html,body,#app {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
