new Vue({
  el: '#app',
  data: {
    name: 'Amy',
    age: 24,
    website: "<a href='https://github.com/AmyShieh'>amy Shieh</a>"
  },
  methods: {
    greeting: function (time) {
      return `good ${time}, ${this.name} !`
    },
    addAge: function () {
      this.age++;
    }
  },
  computed: {
    calculateTime: function() {
      console.log("time");
      return new Date()
    },
    calculateNum: function() {
      console.log("num");
      return this.age;
    }
  }
})