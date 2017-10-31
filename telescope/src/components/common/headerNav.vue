<template>
  <div>
    <div>
      <ul>
        <li v-for="item in navList">
          <router-link :to="item.href" :data-value="JSON.stringify(item)" @click.native="addStatus">{{item.fieldMenu}}</router-link>
          <!--<a :href="item.href" :data-value="JSON.stringify(item)"></a>-->
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default{
      name:'headerNav',
      data(){
          return {
              msg:"test",
              navList:[],
              navHref:['performance','monitor','systemTool']
          }
      },
      created:function () {
        var self = this;
        axios.post("http://172.16.90.246:8080/telescope/menu-list")
          .then(response => {
              let data = response.data.content;
              self.renderNav(data)
          })
      },
      methods:{
          renderNav:function (navInfo) {
              var self = this;
              let navHref = self.navHref;
            for(let i in navInfo){
              navInfo[i].href = navHref[i];
              self.navList.push(navInfo[i]);
            }
          },
          addStatus:function () {
            console.log(1);
          }
      }
  }
</script>
