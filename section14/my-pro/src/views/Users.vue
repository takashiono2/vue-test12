<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">users1</router-link>
    <router-link to="/users/2">users2</router-link>
    <hr>
    <!-- <h1>User No.{{ $route.params.id }}</h1> -->
    <h1>User No.{{ id }}</h1>
    <!-- <router-link :to="'/users/'+(Number(id)+1)+'/profile'">次へ</router-link> -->
    <!-- <router-link :to="{name: 'users-id-profile', params:{id:(Number(id)+1) }}">次へ</router-link> -->
    <router-link :to="'/users/'+(Number(id)+1)+'/profile'">次へ</router-link>
    <router-view></router-view>
    <div style="height: 1400px;"></div>
    <router-link 
      id="next-user"
      :to="{
        name: 'users-id-profile', 
        params:{id:(Number(id)+1)},
        query:{
          lang:'ja',
          page:(Number(id)+1)
        },
        hash: '#next-user'
      }"
    >次へ</router-link>
    
  </div>
</template>

<script>
export default{
  props:['id'],
  beforeRouteEnter(to,from,next){
    console.log("beforeRouteEnter");
    next(vm=>{
      console.log(vm.id);
    });
  },
  beforeRouteUpdate(to,from,next){
    console.log("beforRouteUpdate");
    next();
  },
  beforeRouteleave(to,from,next){
    console.log("beforRouteleave");
    const isLeave = window.confirm("このページを離れますか？");
    if(isLeave){
      next();
    }else{ 
      next(false) ;
    }
  }
};
</script>