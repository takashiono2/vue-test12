<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number }}</h2>
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
</style>
<!--scopedをつけないと、全部のdivに反応してしまう-->

<!--#82#83
<template>
  <div>
    <like-header></like-header>
    <LikeNumber></LikeNumber>
  </div>
</template>
-->
<!--表示したいtemplateをApp.vueに-->
<!--templateでは1つのルーティングのためdiv要素で囲う-->
<!--like-headerはケバブケースでもパスカルケースのどちらでもいい-->
<!--HTMLには、パスカルケースはなく、ケバブケースなので、パスカルケースの方が管理しやすい-->
<!--ブラウザは大文字と小文字の区別がつかないからケバブケースが用意されている。-->
<!--
<script>
import LikeHeader from './components/LikeHeader.vue'
export default {
  components: {
    LikeHeader: LikeHeader
  }
};
</script>
-->
<!--scriptにはimportとexport defaultで登録する-->
<!--componentsのvalueにあたる部分は、importされたオブジェクトをあてる-->
<!--componentsのkyeの部分のLikeHeaderは、パスカルケース-->