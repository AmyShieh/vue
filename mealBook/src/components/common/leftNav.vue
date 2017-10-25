<template>
  <div class="leftNav">
    <ul>
      <li>
        <i class="fa fa-address-book"></i>
        <div>通讯</div>
      </li>
      <li>
        <i class="fa fa-calendar"></i>
        <div>日程表</div>
      </li>
      <li>
        <i class="fa fa-bullhorn"></i>
        <div>通知</div>
      </li>
      <li>
        <i class="fa fa-envelope"></i>
        <div>邮件</div>
      </li>
      <li>
        <i class="fa fa-gift"></i>
        <div>奖励</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
      name:'leftNav',
      data(){
          return{
              msg:'test'
          }
      }
  }
</script>

<style>
  ul,ol{
    list-style: none;
    padding: 0;
    margin:0;
  }
  .leftNav{
    width: 5%;
    background-color: pink;
    height: 100%;
  }
  .leftNav li{
    margin: 0;
    padding: 10px 0;
    text-align: center;
  }
</style>

