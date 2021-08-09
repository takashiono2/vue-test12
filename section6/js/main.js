(function(){
  'use strict';
// #76
  //   // var data = { 
//   //   number : 12 
//   // }
// // 先にオブジェクトを宣言すると、個々が共有してしまう状態になる。コンポーネントの中で、dataオブジェクトを関数で返す。
// //コンポーネント内で関数で返すことで、別々のメモリを使ってdataを返す事をしている。  
// Vue.component('my-component',{
//     data: function(){
//       // return data
//       return {
//         number: 12
//       }
//     },
//     template:'<p>いいね({{number}})<button @click="increment">+1</button></p>',
//     methods: {
//       increment: function(){
//         this.number +=1;
//       }
//     }
//   });
   
//   var app = new Vue({
//     el: '#app',
//   });

//   #75
//   Vue.component('my-component',{
//     data: function(){
//       return {
//         number: 5
//       }
//     },
//     template:'<p>いいね({{number}})</p>'
//   });
// //Vueの「V」は、大文字。Vueのコンポーネントを使いますよ宣言。  
  
//   var app = new Vue({
//     el: '#app',
//   });
})();