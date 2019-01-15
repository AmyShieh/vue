Vue.component("greeting", {
  template: "<div><p>{{ name }}</p><button @click='changeName'> keep alive </button></div>",
  data: function () {
    return {
      name: "amy"
    }
  },
  methods: {
    changeName: function () {
      this.name = "alive Amy"
    }
  }
})


new Vue({
  el: '#app',
  data: {
    name: 'Amy',
    age: 24,
    website: "<a href='https://github.com/AmyShieh'>amy Shieh</a>",
    inputValue: "input value"
  },
  methods: {
    greeting: function (time) {
      return `good ${time}, ${this.name} !`
    },
    addAge: function () {
      this.age++;
    },
    getInputValue: function () {
      this.inputValue = this.$refs["input-value"].value;
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