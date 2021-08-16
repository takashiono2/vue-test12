import Vue from 'vue';
import App from './App.vue';
import router from './router';//router.jsをインポートする

Vue.config.productionTip = false;

// router.beforeEach((to,form,next)=>{
//   if(to.path==="/users/1"){
//     next({path: "/"});
//   }
//   next();
// });
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app');
//routerモジュールを紐づけたい