<template>
    <p v-border:solid.round="{width: '5px', color: 'red'}">Home</p>
</template>

<script>
export default{
  directives:{
    border(el,binding){
      el.style.borderWidth= binding.value.width;
      el.style.borderColor= binding.value.color;
      el.style.borderStyle= binding.arg;
      if(binding.modifiers.round){
        el.style.borderRadius = "0.5rem";
        }
    }
  }
}
</script>

<!--
#140
<template>
    <p v-border:solid.round="{width: '5px', color: 'red'}">Home</p>
</template>
-->

<!--2つ以上のデータを渡す時はオブジェクトにする-->
<!--:dottedならドットの線、:solidなら実線。引数は1つしかとれない-->
<!--引数の後につける修飾子(例)round-->