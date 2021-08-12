<template><!---->
  <div>
    <h2>{{ title | lowerCase | upperCase }}</h2>
    <p>{{ subTitle | lowerCase | upperCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
  </div>
</template>
<!--|をつけると、左から処理される。filterではthisは使えない-->
<!--@/はsrcの相対パス記号-->
<script>
import {tokyoNumber} from "@/tokyoNumber";

export default{
  mixins:[tokyoNumber],
  created: function(){
    console.log("created in Component");
  }
};
</script>
<!--2つともライフサイクルフックがある場合、先にmixinsの実行され、次にcomponentが実行される-->