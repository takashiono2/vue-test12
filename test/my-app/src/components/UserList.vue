<template>
  <ul>
    <li 
    v-for="user in users" 
    :key="user.name"
    >{{ user.name }} ({{ user.email }})
    </li>
  </ul>
</template>

<script>
export default {
  computed:{
    users(){
      return this.$store.getters.users;
    }
  }
}
</script>
<!--コンポーネントの場合、親からpropsでデータを渡す-->
<!--子コンポーネント側ではpropsではなくcomputedプロパティを使ってVuexのstateのusersにアクセスを行う-->