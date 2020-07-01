<template>
  <div class="share" v-show="shareState">
    <div class="mask" @click="shareClose()"></div>
    <div class="content" @click="savePicture()">
      <div v-if="!hasImg" class="content-wrap" ref="postref" ><!-- 长按事件 -->
        <div class="header" :class="postData.header"></div>
        <div class="work-img">
          <img v-lazy="postData.videopic" alt="..." />
        </div>
        <div class="autho-wrap">
          <p class="work-name">{{postData.videoname}}</p>
          <p class="autho">
            <a></a>{{postData.videoauthornames}}
          </p>
        </div>
        <div class="ercode-wrap">
          <div class="ercode">
            <canvas ref="ercode"></canvas>
          </div>
          <div class="tip"></div>
        </div>
      </div>
      <!-- @touchstart="gotouchstart($event)" @touchmove="gotouchmove($event)" @touchend="gotouchend($event)" -->
      <!-- <div v-show="showdiv" class="o-img" >
          <img class="o-img-img" :src="imgfordown" >
      </div> -->
      <img src="" class="content-img" ref="contentImg">
       <!-- <img class="o-img" src="http://www.xinzhimin.xyz/yijiazi.png"> -->
      <div class="label-tip">
        <p>长按保存到本地或者转发至好友</p>
      </div>
    </div>
    
  </div>
</template>

<script>
import share from "./share.js";
export default share;
</script>

<style scoped>
@import url(./share.css);
</style>