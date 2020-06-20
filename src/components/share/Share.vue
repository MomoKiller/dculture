<template>
  <div class="share" v-if="shareState">
    <div class="mask" @click="shareClose()"></div>
    <div class="content">
      <div class="content-wrap" @touchstart="gotouchstart" @touchmove="gotouchmove" @touchend="gotouchend" ref="postref"><!-- 长按事件 -->
        <div class="header"></div>
        <div class="work-img">
          <img v-lazy="works.img" alt="..." />
        </div>
        <div class="autho-wrap">
          <p class="work-name">{{works.name}}</p>
          <p class="autho">
            <a>作者：</a>{{works.author}}
          </p>
        </div>
        <div class="ercode-wrap">
          <div class="ercode">
            <img v-lazy="works.ercode" alt="..." />
          </div>
          <div class="tip"></div>
        </div>
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