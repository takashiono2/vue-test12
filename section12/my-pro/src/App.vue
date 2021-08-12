<template>
  <div class="main">
    <button @click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">Fade</button>
    <p>{{ myAnimation }}</p>
    <button @click="show=!show">切り替え</button>
    <transition 
      name="fade" 
      mode="out-in"
    >
      <p v-if="show" key="bye">さよなら</p>
      <p v-if="!show" key="hello">こんにちは</p>
    </transition><!--同じタグがある時、keyをつけて判別するようにする-->
    <transition 
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__shakeY"
      appear
    >
      <p v-if="show">hello</p>
    </transition>
    <transition 
      :name="myAnimation" 
      
      appear
    ><!--type="animation"-->
      <p v-show="show">bye</p>
    </transition>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        show: true,
        myAnimation :'slide'
      };
    }
  };
</script>

<style scoped>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 0.5s;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition: opacity 0.5s;
}
.fade-leave-to{
  opacity: 0;
}

.slide-enter,
.slide-leave-to{
  opacity:0;
}

.slide-enter-active{
  animation: slide-in 0.5s;
  transition: opacity 1s;
}

.slide-leave-active{
  animation: slide-in 0.5s reverse;
  transition: opacity 1s;
}

@keyframes slide-in{
  from{
    transform: translateX(100px);
  }
  to{
    transform: translateX(0);
  }
}

.main{
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>

<!--#163
<template>
  <div class="main">
    <button @click="show=!show">切り替え</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <transition name="slide">
    <div v-if="show">
      <p>bye</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
    </div>
  </transition>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        show: true
      };
    }
  };
</script>

<style scoped>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 0.5s;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition: opacity 0.5s;
}
.fade-leave-to{
  opacity: 0;
}

.slide-enter-active{
  animation: slide-in 0.5s;
}

.slide-leave-active{
  animation: slide-in 0.5s reverse;
}

@keyframes slide-in{
  from{
    transform: translateX(100px);
  }
  to{
    transform: translateX(0);
  }
}

.main{
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>
-->