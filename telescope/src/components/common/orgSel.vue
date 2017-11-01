<template>
  <div>
    <el-select placeholder="请选择" v-model="msg">
      <el-option :value="msg">
      </el-option>
    </el-select>
  </div>
</template>

<script>
  export default{
      name:"orgSel",
      data(){
          return {
              msg:"test"
          }
      }
  }
</script>
