(function(){
  'use strict';
  var app = new Vue({
    el: '#app',
    data: {
      styleObject:{
        color: 'red', 
        'background-color': 'blue'
      },
      baseStyles:{
        fontSize: '60px'
      }
    }
  });
})();

// #32
//   var app = new Vue({
//     el: '#app',
//     data: {
//       styleObject:{
//         color: 'red', 
//         'background-color': 'blue'
//       }
//     }
//   });
// })();
// //'red''blue'のように、文字列判別のため’’をつけるのを注意

// #31
//   var app = new Vue({
//     el: '#app',
//     data: {
//       textColor: 'red',
//       bgColor: 'blue'
//     }
//   });
// })();

// #30
//   var app = new Vue({
//     el: '#app',
//     data: {
//       isActive: true,
//       color: 'red',
//       bg: 'bg-blue'
//     },
//     computed: {
//       classObject: function(){
//         return {
//           red: this.isActive,
//           'bg-blue':!this.isActive
//         }
//       }
//     }
//   });
// })();

// #29
//   var app = new Vue({
//     el: '#app',
//     data: {
//       isActive: true
//     },
//     computed: {
//       classObject: function(){
//         return {
//           red: this.isActive,
//           'bg-blue':!this.isActive
//         }
//       }
//     }
//   });
// })();

//#28
//   var app = new Vue({
//     el: '#app',
//     data: {
//       counter: 0
//     },
//     computed:{
//       doubleCouneterComputed: function(){
//         return this.counter * 2;
//       }
//     },
//     methods:{
//       countUp: function(){
//         this.counter += 1;
//       },
//       doubleCouneterMethod:function(){
//         return this.counter * 2;
//       }
//     }
//   });
// })();

//#27
// (function(){
//   'use strict';
//   var app = new Vue({
//     el: '#app',
//     data:{
//       counter: 0
//     },
//     computed:{
//       lessThanThree: function(){
//         return this.counter > 3 ? '3より上' :'3より下';
//       }
//     },
//     watch: {//coumputed処理しつつ、非同期処理が働く
//       counter: function(){
//         var vm = this;  
//         setTimeout(function(){
//             vm.counter = 0;
//         },3000);
//       }
//     }
//   });
// })();
// computedとwatchは似ている。が、computedでは、処理しきれないことがある。watchは特定の処理をする時に使う。
// watchは「非同期処理」の時に使う。また、「非同期処理」の時は、returnが使えない。