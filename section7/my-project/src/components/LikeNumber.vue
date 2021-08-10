<template>
  <div>
    <p>いいね{{ halfNumber }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    totalNumber:{
      type: Number,
      //required :true,
      default: 5
      }
  },
  computed: {
    halfNumber(){
      return this.totalNumber/2;
    }
  },
  methods: {
    increment: function(){
      this.$emit('my-click',this.totalNumber+1)
    }//$emitでカスタムイベントを作れる$emit('送り先のイベント名',送る内容（任意）)
  }
};
</script>

<style scoped>
div{
  border: 1px solid red;
}
</style>

<!-- #92
<script>
//dataの代わりになるpropsがバリデーションの役割をする。複数使用する場合は、オブジェクトで渡す
//requiredは、バリデーションが必要かどうか、値がないとエラーになる。defaultにすれば、指定しなかった時の設定になる。
//配列は関数でオブジェクトで返してあげる
// export default {
//   props: {
//     totalNumber:{
//       type: Number,
//       //required :true,
//       default: 5
//       }
//   },
//   computed: {
//     halfNumber(){
//       return this.totalNumber/2;
//     }
//   },
//   methods: {
//     increment: function(){
//       this.number +=1
//     }
//   }
// };
// </script>

// <style scoped>
// div{
//   border: 1px solid red;
// }
// </style>-->