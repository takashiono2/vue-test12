<template>
  <div>
    <p>About</p>
    <input>
  </div>
</template>

<script>
export default{
  destroy() {
    console.log('destroyed');
  },
    deactivated() {
      console.log('deactivated');
  },
    activated() {
      console.log('activated');
  }
};
</script>