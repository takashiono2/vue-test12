<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <HelloVuex></HelloVuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex.vue'
export default {
  name: 'app',
  computed:{
    message(){
      return this.$store.state.message
    }
  },
  components:{
      HelloVuex
  }
}
</script>