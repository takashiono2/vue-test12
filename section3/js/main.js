(function(){
  'use strict';
  // #45
  var app = new Vue({
    el: '#app',
    data: {
      fruits:['りんご','メロン','いちご']
    },
    methods:{
      remove: function(){
        this.fruits.shift();
      }
    }
  });

  // #44
  // var app = new Vue({
  //   el: '#app',
  //   data: {
  //     fruits:['りんご','メロン','いちご']
  //   }
  // });

  // #39
  // var app = new Vue({
  //   el: '#app',
  //   data: {
  //     ok: true
  //   }
  // });
})();