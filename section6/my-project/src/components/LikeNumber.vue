<template>
  <div>
    <p>いいね{{number}}</p>
    <button @click="increment">+1</button>
  </div>
</template>

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
<style scoped>
div{
  border: 1px solid red;
}
</style>
<!--scopedをつけないと、全部のdivに反応してしまう-->

<!--#82#83
<template>
  <div>
    <p>いいね{{number}}</p>
    <button @click="increment">+1</button>
  </div>
</template>
-->
<!--templateは1つのルート要素でないといけない。だから、1つの要素でくくってあげる必要がある-->
<!--
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
-->