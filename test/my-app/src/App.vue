<template>
  <div id="app">
    <h1>ユーザ一覧</h1>
    <div v-for="user in users" :key=user.id>
      {{ user.name }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  computed : {
    users : function(){
      return this.$store.state.users
    }
  },
  mounted(){
    this.$store.dispatch('getUsers')
  }
}
</script>
<!--コンポーネントの場合、親からpropsでデータを渡す-->
<!--子コンポーネント側ではpropsではなくcomputedプロパティを使ってVuexのstateのusersにアクセスを行う-->