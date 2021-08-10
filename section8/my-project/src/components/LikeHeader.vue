<template>
  <div>
    <slot name="title" :user="user" text="text"></slot>
    <hr>
    <p>いいねの数</p>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default{
  data: function(){
    return {
      user:{
        firstName: "Jack",
        lastname: "Donald"
      }
    }
  }
};
</script>

<style scoped>
h1{
  color:red;
}
</style>

<!--#108--><!-- v-slot:（名前）の名前の部分をname属性で指定する-->
<!--<template>-->
  <!--<div>-->
    <!--<slot name="title" :user="user" text="text"></slot>--><!-- dataにあるuserをv-bindするとデータ子から親へ送れる-->
    <!--<hr>-->
    <!--<p>いいねの数</p>-->
    <!--<slot name="number"></slot>
  </div>
</template>-->
<!--
<script>
export default{
  data: function(){
    return {
      user:{
        firstName: "Jack",
        lastname: "Donald"
      }
    }
  }
};
</script>

<style scoped>
h1{
  color:red;
}
</style>
-->