<template>
  <div class="test2">
    <h1>{{ msg }}</h1>
    <p>{{$route.params.username}}</p>
  </div>
</template>

<script>
export default {
  name: 'test2',
  data () {
    return {
      msg: " 测试页面2"
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
