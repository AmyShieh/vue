<template>
  <div class="hi">
    <h1>{{ msg }}</h1>
    <!--<p>{{$route.params.username}}</p>-->
    <!--<router-view></router-view>-->

  </div>
</template>

<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: " I'm aliveAmy "
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
  a{
    text-decoration: none;
    color:#333;
  }
  .router-link-exact-active{
    color:pink
  }
</style>
