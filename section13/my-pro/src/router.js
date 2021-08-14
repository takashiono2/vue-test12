import Vue from "vue";//vueをインポート
import Router from "vue-router";//vueルーターをインポート
import Home from "./views/Home.vue";//コンポーネントを使うためインポート
import Users from "./views/Users.vue";//コンポーネントを使うためインポート

//プラグインしたルーターを使います宣言
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path:'/',component:Home},
    {path:'/users/:id',component:Users}
  ]
});





