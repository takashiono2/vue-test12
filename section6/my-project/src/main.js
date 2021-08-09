import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './LikeNumber.vue'

Vue.config.productionTip = false;
Vue.component('LikeNumber',LikeNumber);
//main.jsでグローバル登録

new Vue({
  render: h => h(App),
}).$mount('#app')
