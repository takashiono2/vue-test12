<template>
  <div><!-- v-slot:（名前）の名前の部分をname属性で指定する-->
    <slot name="title"></slot>
    <hr>
    <p>いいねの数</p>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default{
  props:["headerText"]
};
</script>

<style scoped>
h1{
  color:red;
}
</style>