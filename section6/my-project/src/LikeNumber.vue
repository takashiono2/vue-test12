<template>
  <div>
    <p>いいね{{number}}</p>
    <button @click="increment">+1</button>
  </div>
</template>
<!--templateは1つのルート要素でないといけない。だから、1つの要素でくくってあげる必要がある-->
<script>
export default {
  data: function(){
    return {
      number: 5
    };
  },
  methods: {
    increment: function(){
      this.number +=1
    }
  }
}
</script>