<template>
  <div class="share" v-show="shareState">
    <div class="mask" @click="shareClose()"></div>
    <div class="content">
      <div v-if="!hasImg" class="content-wrap" ref="postref" @touchstart="gotouchstart($event)" @touchmove="gotouchmove($event)" @touchend="gotouchend($event)"><!-- 长按事件 -->
        <div class="header" :class="postData.header"></div>
        <div class="work-img">
          <img v-lazy="postData.videopic" alt="..." />
        </div>
        <div class="autho-wrap">
          <p class="work-name">{{postData.videoname}}</p>
          <p class="autho">
            <!-- <a>作者：</a>{{postData.videoauthornames}} -->
            <a></a>{{postData.videoauthornames}}
          </p>
        </div>
        <div class="ercode-wrap">
          <div class="ercode">
            <!-- <img v-lazy="ercode" alt="..." /> -->
            <canvas ref="ercode"></canvas>
          </div>
          <div class="tip"></div>
        </div>
      </div>
      <img class="testimg" :src="testimg">
      <img src="" class="content-img" ref="contentImg">
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