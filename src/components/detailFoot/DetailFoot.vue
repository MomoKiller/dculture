<template>
    <footer>
      <div class="footer">
        <p>
          <a>常熟市委宣传部出品</a>
        </p>
        <p>苏州巨数技术支持</p>
      </div>
      <ul>
        <li class="toBook" @click="toPage('/bookList')"></li>
        <li class="toMusic" @click="toPage('/musicList')"></li>
        <li class="toDance" @click="toPage('/danceList')"></li>
        <li class="toPainting" @click="toPage('pictureList')"></li>
        <li class="toClass">
          <i @click="toPage(5)"></i>
        </li>
        <li class="toOpera" @click="toPage('/operaList')"></li>
        <li class="toQuyi" @click="toPage('/quyiList')"></li>
        <li class="toRecord" @click="toPage('/recordList')"></li>
        <li class="toRadio" @click="toPage('/radioList')"></li>
      </ul>
    </footer>
</template>

<script>
import detailFoot from './detailFoot.js';
export default detailFoot;
</script>

<style scoped>
@import url(./detailFoot.css);
</style>