<template>
  <div id="app">
    <headerNav class="nav"></headerNav>
    <div class="mainCon">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import headerNav from '@/components/common/headerNav';
  export default {
    name: 'app',
    components: {
        headerNav,
    }
  }
</script>

<style lang="scss">
  @import "assets/css/app.scss";
</style>
