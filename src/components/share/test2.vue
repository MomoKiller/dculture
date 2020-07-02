<template>
    <div>
        <canvas id="aa" width="170px" height="267px" style="display: none;"></canvas>
        <div class="box" id="box" style="background-color:red;width: 170px;height: 267px;"></div>
        <input type="button"  value="下载画报" style="margin-left: 150px;margin-top: 20px;" @click="downloadImg()"/>
        <input type="button"  value="测试准发" style="margin-left: 150px;margin-top: 20px;" @click="canvasimg()"/>
        <div class = "div-img" @click = " imgClick () " > 保存图片 </div >
 

        <p id="testp"></p>
        
        <div id="test">
            <img id= "testimg" alt="" :src="testimg">
        </div>
        <iframe v-show="showframe"  id="show-iframe"  
            frameborder=0 name="showHere" 
            scrolling=auto 
            src="http://localhost:8082/test2">
        </iframe>
        <img style="position:relative;" id= "testImg2" src="http://www.xinzhimin.xyz/6.jpg">
        <!-- <a href="http://www.xinzhimin.xyz/6.jpg">
            <img id= "testImg2" src="http://www.xinzhimin.xyz/6.jpg">
        </a> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            testimg:"",
            base64 :"",
            showframe:false
        }
    },
    mounted:function(){
        this.initimg();
    },
    methods:{
        imgClick () {
            var alink = document.createElement('a')
            alink.href = this.testimg
            alink.download = 'pic' // 图片名
            alink.click ()
        },
      downloadImg(){
        alert("sss")
       var img = document.getElementById('testImg2'); // 获取要下载的图片
        var url = img.src;                            // 获取图片地址
        var a = document.createElement('a');          // 创建一个a节点插入的document
        var event = new MouseEvent('click')           // 模拟鼠标click点击事件
        a.download = '图片名字'                  // 设置a节点的download属性值
        a.href = url;                                 // 将图片的src赋值给a节点的href
        a.dispatchEvent(event)                        // 触发鼠标点击事件
     },
        convertCanvasToImage(canvas) {

            var image = new Image();
            
            image.src = canvas.toDataURL("image/png");
            this.base64 = image.src
            return image;
        },
        //下载海报
        downloadimg2() {
           /*  var img = $('.box').children('img').attr("src");
            var alink = document.createElement("a");
            alink.href = img;
            alink.download = "新年快乐.png";
            alink.click(); */
           
            var URL = this.base64;
            var triggerEvent = "touchstart";  //指定下载方式
        		var blob = new Blob([''], { type: 'application/octet-stream' });
        		var url = URL.createObjectURL(blob);
        		var a = document.createElement('a');
        		a.href = Url;
        		a.download = Url.replace(/(.*\/)*([^.]+.*)/ig, "$2").split("?")[0];
        		var e = document.createEvent('MouseEvents');
        		e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        		a.dispatchEvent(e);
        		URL.revokeObjectURL(url);
        
        },
        canvasimg(){
            alert("canvasimg")
             this.testimg = this.base64;
//this.showframe = true;
           // document.getElementById("testimg")
        	//$("#testimg").attr("src",base64)
        	//$("#testp").html(base64)
        },
        initimg:function(){
            console.log(",,,,,,,,,,")
            var aa = document.getElementById('aa');
            var bb = aa.getContext('2d');
            //var base64="";
            var imgone = new Image;
            imgone.src = 'http://www.xinzhimin.xyz/6.jpg';
            imgone.crossOrigin = 'Anonymous';
            imgone.onload = function () {
                bb.drawImage(imgone, 0,0,170,267);
                
                bb.fillStyle = '#fff';   // 文字填充颜色
                bb.font = '30px Adobe Ming Std';
                bb.fillText('猪年快乐！',20,100);
                
                bb.fillStyle = '#fff';
                bb.font = '40px Adobe Ming Std';
                bb.fillText('2019年',20,70);
                
                bb.fillStyle = '#fff';
                bb.font = '26px Adobe Ming Std';
                bb.fillText('Bug也会一直陪在你身边',40,320);
                
                bb.fillStyle = 'yellow';
                bb.font = '26px Adobe Ming Std';
                bb.lineWidth=1; 
                var str = "哈哈啊哈哈哈哈哈啊哈哈哈哈哈啊哈哈哈哈哈啊哈哈哈哈哈啊哈哈哈哈哈啊哈哈哈哈哈啊哈哈哈"
    //            bb.fillText(str,65,750);
                var lineWidth = 0;
                var canvasWidth = aa.width-50;//计算canvas的宽度
                var initHeight=400;//绘制字体距离canvas顶部初始的高度
                var lastSubStrIndex= 0; //每次开始截取的字符串的索引
                for(let i=0;i<str.length;i++){ 
                    lineWidth+=bb.measureText(str[i]).width; 
                    if(lineWidth>canvasWidth){  
                        bb.fillText(str.substring(lastSubStrIndex,i),25,initHeight);//绘制截取部分
                        initHeight+=40;//40为字体的高度
                        lineWidth=25;
                        lastSubStrIndex=i;
                    } 
                    if(i==str.length-1){//绘制剩余部分
                        bb.fillText(str.substring(lastSubStrIndex,i+1),25,initHeight);
                    }
                }
                
            }
            var that_ = this;
            window.onload=function(){
                var img = new Image();
            
                img.src = aa.toDataURL("image/png");
                this.base64 = img.src
                //var img = that_.convertCanvasToImage(aa);
                img.crossOrigin = 'Anonymous';
                document.getElementById('box').append(img);
                console.log(img.src);
               var str = img.src;
               var img2 = str.split("data:image/png;base64,");
               console.log(img2.length)
                console.log(img2[1])
            //    var img3 = str.indexOf("data:image/png;base64,");
            //    console.log(img3)
               // that_.base64 = img2[1]
               that_.base64 =str;
            }
        }
    }
}
</script>
<style scoped>
body {
    -webkit-touch-callout: none;
}
</style>


