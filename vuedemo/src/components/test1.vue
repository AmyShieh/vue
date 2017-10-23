<template>
  <div class="test1">
    <h1>{{ msg }}</h1>
    <p>{{$route.params.username}}</p>
  </div>
</template>

<script>
export default {
  name: 'test1',
  data () {
    return {
      msg: " 测试页面1 "
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
