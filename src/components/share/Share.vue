<template>
  <div class="share" v-if="shareState">
    <div class="mask" @click="shareClose()"></div>
    <div class="content">
      <div class="content-wrap" @touchstart="gotouchstart" @touchmove="gotouchmove" @touchend="gotouchend" ref="postref"><!-- 长按事件 -->
        <div class="header"></div>
        <div class="work-img">
          <img src="../../assets/img/share/share-img-default.png" alt="..." />
        </div>
        <div class="autho-wrap">
          <p class="work-name">富春山居图</p>
          <p class="autho">
            <a>作者：</a>黄公望
          </p>
        </div>
        <div class="ercode-wrap">
          <div class="ercode">
            <img src="../../assets/img/share/share-img-ercode.png" alt="..." />
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