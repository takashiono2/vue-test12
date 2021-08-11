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
