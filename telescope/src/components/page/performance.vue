<template>
  <div>
    <div>{{msg}}</div>
    <!--<b-map-component></b-map-component>-->
  </div>
</template>

<script>

  export default{
      name:'performance',
      data(){
          return{
            msg:"performance"
          }
      },
      mounted:function () {
        var map = new BMap.Map("allmap");
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
        map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);
      }
  }
</script>
