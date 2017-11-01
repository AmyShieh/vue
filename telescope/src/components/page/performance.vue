<template>
  <div class="fullBox pr">
    <div id="map"></div>
    <div class="component rootType">
      <performanceData></performanceData>
    </div>
    <!--<div class="component orgSel">-->
      <!--<orgSel></orgSel>-->
    <!--</div>-->
  </div>
</template>

<script>
  import performanceData from './performanceData.vue'
  import orgSel from '../common/orgSel.vue'
  import mapOption from '../../assets/js/common/mapOption';

  export default{
      name:'performance',
      data(){
          return{
            msg:"performance",
          }
      },
      components:{
        performanceData
      },
      mounted:function() {
        var self = this;
        self.renderMap();

      },
      methods:{
        renderMap:function () {
          var map = new BMap.Map("map");
          map.centerAndZoom("西安", 6);
          map.enableScrollWheelZoom(true);
          map.setMapStyle({styleJson: mapOption});
        }
      }
  }
</script>
