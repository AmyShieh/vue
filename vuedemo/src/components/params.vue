<template>
  <div>
    <h1>{{msg}}</h1>
    <p>{{$route.params.newsId}} - {{$route.params.newTitle}}</p>
  </div>
</template>


<script>
  export default{
      name:'params',
      data(){
          return{
              msg:"这是新闻列表页"
          }
      },
      beforeRouteEnter:(to,from,next) =>{
        console.log("准备进入路由模板");
        console.log(to);
          console.log(from);
          next();
      },
      beforeRouteLeave:(to,from,next) => {
          console.log("准备离开路由模板");
          next();
      }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
