<template>
  <div class="share" v-show="shareState">
      <!-- <p @click="go2page">dddddddddd</p> -->
      <img src="http://www.xinzhimin.xyz/6.jpg"/>
       <!-- <a download="test.png" href="http://www.xinzhimin.xyz/6.jpg">ceshishishishshsh</a> -->
      <!-- <a href="http://localhost:8082/test3">球球去求去i</a> -->
  </div>
</template>
<script>

import html2canvas from 'html2canvas';
import QRCode from 'qrcode';
import wx from 'weixin-js-sdk';
export default {
    name: "Share",
    props: ['postData'],
    data() {
        return {
            shareState: true,
            timeOutEvent: 0, // 定时器
            ercode: '',
            imgfordown: "",
            showdiv: true,
            imgHref: '',
            imgName: '',
            contentshow:true,
            postUri:""

        };
    },
    mounted() {
        // this.useqrcode();
        // this.toPost();
    },
    methods: {
      go2page:function(){
        alert("got");
        window.location.href ="http://xinzhimin.xyz/base64imgPG?timesqu=1593709243573";
       // window.location.href="http://localhost:8082/test3"
         // window.location.href="http://www.baidu.com"
        //window.open("http://www.baidu.com", '_blank')
      },
    }

}
</script>
<style scoped>
@import url(./share.css);
.content-img{
    width: 100%;
    height: 100px;
}
img {
    -webkit-touch-callout: none;
     /* pointer-events:auto */
  }
</style>

