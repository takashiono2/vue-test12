import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false;
Vue.component('LikeNumber',LikeNumber);
Vue.filter('upperCase',function(value){
  return value.toUpperCase();
});
Vue.mixin({
  created: function(){
    console.log("global.mixin");
  }
});
//mixinをglobal登録すると全部のvueに関わってくるので、使用は、pluginなどに使う場合にする。
new Vue({
  render: h => h(App),
}).$mount('#app');