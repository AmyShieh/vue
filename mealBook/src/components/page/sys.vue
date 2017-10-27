<template>
  <div class="content">
    <el-row>
      <el-col :span='10' class="order" id="order">
        <el-tabs>
          <el-tab-pane label="点餐">
            <template>
              <el-table :data="tabelData" border style="width: 100%" class="orderList">
                <el-table-column prop="name" label="商品"></el-table-column>
                <el-table-column prop="count" label="数量" width="70"></el-table-column>
                <el-table-column prop="price" label="价格" width="70"></el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                  <template scope="scope">
                    <el-button type="text" size="small">增加</el-button>
                    <el-button type="text" size="small">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div>
                <el-button type="warning">挂单</el-button>
                <el-button type="danger">删除</el-button>
                <el-button type="success">结账</el-button>
              </div>
            </template>
          </el-tab-pane>
          <el-tab-pane label="外卖">外卖</el-tab-pane>
          <el-tab-pane label="挂单">挂单</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span='14' class="goods" id="goods">
        <div>
          <div class="title">常用商品</div>
          <div class="goodsList">
            <ul>
              <li v-for="goods in goodList">
                <span>{{goods.goodsName}}</span>
                <span>￥{{goods.price}}</span>
              </li>
              <div class="clearBoth"></div>
            </ul>
          </div>
          <div class="goodsPic">
            <el-tabs>
              <el-tab-pane label="汉堡">
                <div class="foodItem">
                  <el-row>
                    <el-col :span="6" v-for="goods in hambergerList" class="foods">
                      <img :src="goods.goodsImg" alt="">
                      <div class="hamberger">{{goods.goodsName}}</div>
                      <div class="hamberger">￥{{goods.price}}</div>
                    </el-col>
                  </el-row>
                </div>
              </el-tab-pane>
              <el-tab-pane label="零食">
                <div class="foodItem">
                  <el-row>
                    <el-col :span="6" v-for="goods in snacksList" class="foods">
                      <img :src="goods.goodsImg" alt="">
                      <div class="hamberger">{{goods.goodsName}}</div>
                      <div class="hamberger">￥{{goods.price}}</div>
                    </el-col>
                  </el-row>
                </div>
              </el-tab-pane>
              <el-tab-pane label="饮料">
                <div class="foodItem">
                  <el-row>
                    <el-col :span="6" v-for="goods in drinkList" class="foods">
                      <img :src="goods.goodsImg" alt="">
                      <div class="hamberger">{{goods.goodsName}}</div>
                      <div class="hamberger">￥{{goods.price}}</div>
                    </el-col>
                  </el-row>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios';
  export default{
    name:'sys',
    data(){
          return{
            msg:'这里是router改变内容',
            tabelData:[],
            goodList:[],
            hambergerList:[],
            snacksList:[],
            drinkList:[]
          }
    },
    created:function () {
      axios.get('http://jspang.com/DemoApi/oftenGoods.php')
        .then(response=>{
            console.log(response);
            this.goodList =response
        })
      axios.get('http://jspang.com/DemoApi/typeGoods.php')
        .then(response => {
            console.log(response);
            this.hambergerList = response.data[0];
            this.snacksList = response.data[1];
            this.drinkList = response.data[2];
        })
        .catch(error => {
            alert(error)
        })
    },
    mounted:function () {
      var cH = document.body.clientHeight;
      document.getElementById('order').style.height = cH + 'px';
      document.getElementById('goods').style.height = cH + 'px';
    }
  }
</script>
<style>
  .content{
    width: 95%;
    height: 100%;
    background-color: skyblue;
    float: right;
  }
  .el-table th>.cell{
    text-align: center;
  }
  .goods{
    background-color: orange;
  }
  .goodsList,.goodsPic,.clearBoth{
    clear: both;
  }
  .goodsList li,.hamberger li{
    float: left;
    background-color: pink;
    margin: 10px;
    padding: 5px;
  }
  .foodItem img{
    width: 100%;
  }
  .foods{
    margin:2px 5px;
  }
</style>
