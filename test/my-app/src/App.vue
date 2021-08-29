<template>
  <div id="app">
    <UserList></UserList>
  </div>
</template>

<script>
import UserList from './components/UserList.vue'
export default {
  name: 'app',
  // data : function(){
  //   return {
  //   }
  // },
  components:{
      UserList
  }
}
</script>