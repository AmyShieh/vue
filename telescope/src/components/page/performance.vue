<template>
  <div class="fullBox pr">
    <div id="map"></div>
    <div id="orgSel">test</div>
  </div>
</template>

<script>
  import BMap from 'BMap';
  export default{
      name:'performance',
      data(){
          return{
            msg:"performance"
          }
      },
      mounted() {
        var map = new BMap.Map("map");
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        map.setCurrentCity("北京");
      }
  }
</script>
