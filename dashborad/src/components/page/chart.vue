<template>
  <div>
    <div class="chart">
      <div class="chart_item" id="chart1">{{msg}}</div>
      <div class="chart_item">{{msg}}</div>
      <div class="chart_item">{{msg}}</div>
      <div class="chart_item">{{msg}}</div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import axios from 'axios';
  var qs = require('qs');
  export default{
      name:'chart',
      data(){
          return{
              msg:"test"
          }
      },
      mounted:function () {
          let chart_item = document.getElementsByClassName("chart_item");
//          console.log(chart_item.length)
          for(let i = 0; i < chart_item.length;i++){
              console.log(chart_item[i]);
          }
        this.chartInit();
      },
      methods:{
          chartInit:function () {
            let testData = qs.stringify({"org_id":1842,"menu_id":7});
            console.log(qs);
            axios.post('http://172.16.90.246:8080/telescope/category-list',testData)
              .then(response =>{
                // 指定图表的配置项和数据
                var option = {
                  tooltip: {},
                  legend: {
                    data:['销量']
                  },
                  xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                  },
                  yAxis: {},
                  series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                  }]
                };
                this.renderChart(option);
                // 使用刚指定的配置项和数据显示图表。

              })
          },
          renderChart:function (option) {
            var myChart = echarts.init(document.getElementById('chart1'));
            console.log(option);
            myChart.setOption(option);
          }
      }
  }
</script>

<style>
  .chart{
    width: 100%;
    height: 240px;
    background-color: purple;
  }
  .chart_item{
    width:calc(100% / 4 - 10px);
    background-color: #fff;
    height: 100%;
    float: left;
    margin: 0 5px;
  }
</style>
