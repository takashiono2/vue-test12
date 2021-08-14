import Vue from 'vue'
import App from './App.vue'
//router.jsをインポートする

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
//routerモジュールを紐づけたい