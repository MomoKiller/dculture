<template>
  <div class="share" v-show="shareState">
    <div class="mask" @click="shareClose()"></div>
    <div class="content">
      <div  class="content-wrap" ref="postref"><!-- 长按事件 -->
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
          <!-- <div class="tip"></div> -->
          <img class="tipimg" v-lazy="tipimg" alt="..." />
        </div>
          <img :src="imgHref" class="content-img" ref="contentImg">
        <!-- <a class="down" :href="imgHref" :download="imgName">
        </a> -->

      </div>
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