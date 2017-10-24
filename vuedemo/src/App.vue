<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div>
      <!--<router-link to="/">首页</router-link> 丨-->
      <!--<router-link :to="{name:'hi',params:{username:'这个是传的参数'}}">intro</router-link>-->
      <router-link to="/">首页</router-link> |
      <router-link to="/hi">Hi页面</router-link> 丨
      <router-link to="/params/719/aliveAmy is a brand">新闻列表</router-link> 丨
      <router-link to="/goNews/611/Amy is a girl">返回新闻（代有参数）</router-link> 丨
      <router-link to="/amy">返回Hi页面（利用alias）</router-link> 丨
      <router-link to="/goback">返回首页</router-link> 丨
      <router-link to="/count">计数</router-link>
      <hr>
      <br>
      <button @click="goback">返回按钮</button>
      <button @click="gohome">返回首页</button>
    </div>
     <!--<p>{{$route.params.username}}</p>-->

    <router-view></router-view>
    <transition name="fade">
      <router-view name="t2" style="float:right;width:50%;background-color:pink;height:300px;"></router-view>
    </transition>
    <router-view name="t1" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    <router-view name="t3" style="float:right;width:100%;background-color:pink;height:300px;"></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  methods:{
    goback(){
      this.$router.go(-1);
    },
    gohome(){
      this.$router.push('/');
    }
  }
}
</script>

<style>
  /**{*/
    /*margin: 0;*/
    /*padding: 0;*/
  /*}*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .fade-enter {
    opacity:0;
  }
  .fade-leave{
    opacity:1;
  }
  .fade-enter-active{
    transition:opacity .5s;
  }
  .fade-leave-active{
    opacity:0;
    transition:opacity .5s;
  }
</style>
