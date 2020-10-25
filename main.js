var app = new Vue({
  el: '#vue',
  data: {
    step: 0
  },
  methods: {
    next: function(event) {
      this.step += this.step == 2 ? -2 : 1;
    }

  }

})
