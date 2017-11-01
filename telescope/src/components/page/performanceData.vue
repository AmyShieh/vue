<template>
  <div>
    <el-select v-model="value" class="rootSel">
      <el-option v-for="opt in rootData" :value="opt.id" :label="opt.name" :key="opt.id">
        {{opt.name}}
      </el-option>
    </el-select>
  </div>
</template>
<script>
  import axios from 'axios';
  export default{
      name:'leftInfo',
      data(){
          return{
            rootData:[],
            value:'',
          }
      },
      mounted:function () {
        var self = this;
        self.renderRoot();
      },
      watch: {
        value: function(val) {
          console.log(val);
        }
      },
      methods:{
        renderRoot:function () {
          let self = this;
          axios.post("http://172.16.90.246:8080/telescope/root-org")
            .then(response =>{
              self.rootData = [];
              let rootType = response.data.content;
              for(let root in rootType){
                self.rootData.push(rootType[root]);
              }
              self.value = self.rootData[0].id;
            })
        }
      }
  }
</script>
