<template><!---->
  <div>
    <p v-border:solid.round="{width: '5px', color: 'red'}">Home</p>
    <!--<h2>{{ title | upperCase }}</h2>
    <p>{{ subTitle | upperCase }}</p>-->
    <h2>{{ title | lowerCase | upperCase }}</h2>
    <p>{{ subTitle | lowerCase | upperCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
    <CountNumber></CountNumber>
  </div>
</template>
<!--|をつけると、左から処理される。filterではthisは使えない-->
<script>
import CountNumber from "./CountNumber.vue";
import {tokyoNumber} from "@/tokyoNumber";
export default{
  mixins:[tokyoNumber],
  data(){
    return{
      tmpData: 'hello',
    };
  },
  components:{
    CountNumber
  },
  computed:{
    upperCaseTitle(){
      return this.title.toUpperCase
    }
  },
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