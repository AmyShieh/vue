<template>
  <div class="count">
    <h1>{{msg}}</h1>
    <hr>
    <h3>通过store获取：{{$store.state.count}}。</h3>
    <h3>通过computed处理数据来获取(有三种获取方式)：{{count}}</h3>
    <button @click="$store.commit('add',10)">+</button>
    <button @click="reduce">-</button>
    <!--<div>test</div>-->
    <hr>
    <h3>通过action进行异步操作</h3>
    <button @click="addAction">+</button>
    <button @click="reduceAction">-</button>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
  export default{
      data(){
          return{
              msg:"检测计数状态的改变,通过store的state来改变"
          }
      },
//    方式1
//      computed:{
//        count(){
//            return this.$store.state.count
//        }
//      },
//    方式2 最常用的方法
//    computed:mapState(['count']),
//    方式3
    computed:{
//      ...mapState({count:state => state.count}),
//      方式一
//      count:function () {
//        return store.getters.count;
//      }
//      ...mapGetters(['count'])
      count:function () {
        return this.$store.state.count
      }
    },
    methods: {
      ...mapMutations(['add','reduce']),
      ...mapActions(['addAction','reduceAction'])
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
