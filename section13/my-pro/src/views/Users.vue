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
    <router-link :to="{
      name: 'users-id-profile', 
      params:{id:(Number(id)+1)},
      query:{
        lang:'ja',
        page:(Number(id)+1)
      }
      }"
    >次へ</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default{
  props:['id'],
  watch:{
    $route(to,from){
      console.log(to);
      console.log(from);
      console.log('$routeが変わった');
    }
  }
}
</script>