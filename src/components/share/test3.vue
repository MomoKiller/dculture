<template>
    <div>
        <section id="section">
　　<p>当前积分<span>365</span></p>
　　<p>参与项目数量<span>12</span></p>
　　<p>募捐金额<span>45678</span>元</p>
　　<p>荣誉等级<span>海绵宝宝</span></p>
　　<div id="qrcode">
　　</div>
    </section>
    <div id='photo'>
　　<span>长按图片保存和分享</span>
　　<img :src="url">
    </div>
　<button @click="saveImg">生成图片</button>
    </div>
</template>
<script>
import html2canvas from 'html2canvas';
　　export default{
　　　　data(){
　　　　　　return{
　　　　　　　　url:""
　　　　　　}
　　　　},　　　　
　　　　methods:{　
　　　　　　saveImg(){
　　　　　　　　var shareContent = document.getElementById("section");
　　　　　　　　html2canvas( shareContent,{onrendered: function(canvas){
　　　　　　　　　　this.url = canvas.toDataURL() ;　　　　
                console.log(this.url)
　　　　　　　　}
　　　　　　})
　　　　}
      }
}
</script>