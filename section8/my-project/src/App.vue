<template>
  <div><!-- v-solt:（引数名）でslotを指定できる。v-soltを使う時は、templateで区切る-->
    <LikeHeader>
      <template v-slot:title>
        <h2>こんにちは</h2>
      </template>
      <template v-slot:number> 
        <p>{{number}}</p>
      </template> 
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="number=$event"></LikeNumber>
    <!-- <LikeNumber :totalNumber="number"></LikeNumber> -->
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
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

</style>
<!--slotの時、sytleは親、子どちらで指定してもいいが、sytle以外は書いた方に適用される-->
<!--sytleは親、子両方に記述した場合は、親が優先される-->