(function(){
  'use strict';
  var data = {
    message: 'こんにちは',
    name: 'よしぴー'
  }
  
  var vm = new Vue({
    // el: '#app',
    data: data,
    computed: {
      myData: function(){
        return this.$data;
      }
    }
  });
  vm.$mount('#app');
  //$mountはeleの代わりに付け足せる。

  //#52
  // var vm1 = new Vue({
  //   el: '#app1',
  //   data: {
  //     message: 'インスタンス1'
  //   }
  // });
  // var vm2 = new Vue({
  //   el: '#app2',
  //   data: {
  //     message: 'インスタンス2'
  //   },
  //   methods: {
  //     changeMessage1: function(){
  //       vm1.message = 'インスタンス2から変えました。'
  //     }//外部からの処理は、thisではなく、変数に代入して処理する。
  //   }
  // });
 
})();