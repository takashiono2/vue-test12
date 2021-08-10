<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>
<!--componentは毎回destroyされる（毎回インスタンスが生成される）-->
<script>
import LikeHeader from './components/LikeHeader.vue';
import About from './components/About.vue';
import Home from './components/Home.vue';

export default {
  data(){
    return {
      number: 14,
      currentComponent: "Home"
    };
  },
  components:{
    LikeHeader,
    About,
    Home
  },
  methods:{
    incrementNumber(value){
      this.number = value;
    }
  }
};
</script>

<style scoped>
div{
  border: 1px solid blue;
}
</style>

<!--#108
<template>
  <div>--><!-- v-solt:（引数名）でslotを指定できる。v-soltを使う時は、templateで区切る-->
    <!--<LikeHeader>-->
      <!-- <template v-slot:title="slotProps">のように、v-soltに命名すると、子からデータを引っ張れる -->
      <!--<template v-slot:title="slotProps">
        <h2>こんにちは</h2>
        <h2>{{ slotProps.user }}</h2>
        <h2>{{ slotProps.text }}</h2>
      </template>
      <template v-slot:number> 
        <p>{{number}}</p>
      </template> 
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="number=$event"></LikeNumber>-->
    <!-- <LikeNumber :totalNumber="number"></LikeNumber> -->
    <!-- <LikeNumber :total-number="number"></LikeNumber>-->
  <!--</div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue';

export default {
  data(){
    return {
      number: 14
    };
  },
  components:{
    LikeHeader
  }
};
</script>

<style scoped>
div{
  border: 1px solid blue;
}
/* 
h1{
  color:red;
} */

</style>-->
<!--slotの時、sytleは親、子どちらで指定してもいいが、sytle以外は書いた方に適用される-->
<!--sytleは親、子両方に記述した場合は、親が優先される-->
