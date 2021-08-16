<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default{
  computed: {
    ...mapGetters(["doubleCount","tripleCount"])
  },
  methods:{
    toUsers: function(){
      // this.$router.push({path:'users'});
      this.$router.push({
        name: 'users-id-profile', 
        params:{
          id: 1
        }
      });
    }
  }
}
</script>