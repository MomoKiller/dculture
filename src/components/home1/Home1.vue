<template>
  <div class="home">
    <audio style="display:none" id="musicBox" preload="metadata" controls autoplay='false'></audio>
    <a class="music" @click="toMusic()" :class="{'runMusic': runMusic}"></a>
    <!-- 头部 -->
    <header></header>
    <!-- 中心 -->
    <div class="content-wrap">
      <div class="bg-part-1"></div>
      <div class="bg-part-2" v-bind:class="{'moveBoat': moveBoat, 'moveBoatTmp': moveBoatTmp}"></div>
      <div class="bg-part-3"></div>
    </div>
    <div class="flower"></div>
    <div class="theme"></div>
    <div class="enter-wrap">
      <i></i>
      <a class="enter" @click="toEnter()"></a>
    </div>
    <!-- 尾部 -->
    <div class="footer">
      <p>
        <a>常熟市委宣传部出品</a>
      </p>
      <p>苏州巨数技术支持</p>
    </div>
  </div>
</template>

<script>
import home1 from "./home1.js";
export default home1;
</script>

<style scoped>
@import url(./home1.css);
</style>