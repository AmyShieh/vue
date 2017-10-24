<template>
  <div class="count">
    <h1>{{msg}}</h1>
    <hr>
    <h3>{{$store.state.count}}</h3>
    <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('reduce')">-</button>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  export default{
      data(){
          return{
              msg:"检测计数状态的改变,通过store的state来改变"
          }
      },
    store
  }
</script>

<style>
  .count{
    width: 100%;
    background-color: orange;
    height: 300px;
  }
</style>
