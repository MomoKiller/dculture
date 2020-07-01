import html2canvas from 'html2canvas';
import QRCode from 'qrcode';

export default {
    name: "Share",
    props: ['postData'],
    data() {
        return {
            shareState: false,
            timeOutEvent: 0, // 定时器
            ercode: '',
            imgfordown: "",
            showdiv: false,
            imgHref: '',
            imgName: ''
        };
    },
    mounted() {
        // this.useqrcode();
        // this.toPost();
    },
    methods: {
        // 生成海报
        toPost() {
            console.log("this is toPost.....")
            let self = this;
            let DomeW = self.$refs.postref.offsetWidth; //获取目标元素的宽高
            let DemoH = self.$refs.postref.offsetHeight; //获取目标元素的宽高
            console.log("this is toPost....." + DomeW + "===" + DemoH)
            html2canvas(self.$refs.postref, { useCORS: true, width: DomeW, height: DemoH }).then(function(canvas) {
                let imgUri = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // 获取生成的图片的url

                // self.downloadIamge(imgUri, self.postData.videoname);

                self.$refs.contentImg.src = imgUri;

                self.imgName = self.postData.videoname + '.png';
                self.imgHref = imgUri;

            })

        },
        gotouchstart(e) {
            // 阻止默认事件
            // e.preventDefault();
            let self = this;
            clearTimeout(this.timeOutEvent); //清除定时器
            this.timeOutEvent = 0;
            /* 长按触发事件 */
            this.timeOutEvent = setTimeout(function() {
                // self.toPost();
                self.savePicture();
                // self.downloadIamge(self.$refs.contentImg.src, self.postData.videoname);
                // self.savePicture();

            }, 600);
        },
        /* 移动触发事件 */
        gotouchmove(e) {
            // 阻止默认事件
            // e.preventDefault();
            clearTimeout(this.timeOutEvent);
            if (this.timeOutEvent != 0) {}
        },
        gotouchend(e) {
            // 阻止默认事件
            // e.preventDefault();
            clearTimeout(this.timeOutEvent); //清除定时器
            this.timeOutEvent = 0;
        },
        /* 图片下载 */
        downloadIamge(imgsrc, name) { //下载图片地址和图片名
            let self = this;
            var image = new Image();
            // 解决跨域 Canvas 污染问题
            image.setAttribute("crossOrigin", "anonymous");
            var imgurl = '';
            var that_ = this;
            image.onload = function() {
                var canvas = document.createElement("canvas");
                // var canvas = document.getElementById('aa');
                canvas.width = image.width;
                canvas.height = image.height;
                var context = canvas.getContext("2d");
                context.drawImage(image, 0, 0, image.width, image.height);
                var url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
                // var a = document.createElement("a"); // 生成一个a元素
                // var event = new MouseEvent("click"); // 创建一个单击事件
                // a.download = name || "photo"; // 设置图片名称
                // a.href = url; // 将生成的URL设置为a.href属性
                // a.dispatchEvent(event); // 触发a的单击事件



                // that_.imgfordown = url;
                // that_.showdiv = true;

                self.$refs.contentImg.src = url;
                // self.savePicture(url);

            };
            image.src = imgsrc;
        },
        /* 打开窗口 */
        shareOpen() {
            this.shareState = true;
            // 生成海报
            setTimeout(this.useqrcode, 0);
            setTimeout(this.toPost, 10);
            // this.toPost()
        },
        /* 关闭窗口 */
        shareClose() {
            this.shareState = false;
        },
        /* 生成的二维码 */
        useqrcode() {　　
            console.log("useqrcode")　;　
            var canvas = this.$refs.ercode;
            this.ercode = location.href;
            QRCode.toCanvas(canvas, this.ercode, function(error) {
                if (error) console.error(error)
                console.log('success!');
            })
        },
        /* 保存图片 */
        savePicture() {
            let Url = this.$refs.contentImg.src;
            var blob = new Blob([''], { type: 'application/octet-stream' });
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = Url;
            a.download = this.postData.videoname + '.png';
            var e = document.createEvent('MouseEvents');
            e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
            URL.revokeObjectURL(url);


            // let self = this;
            // let DomeW = self.$refs.contentImg.offsetWidth; //获取目标元素的宽高
            // let DemoH = self.$refs.contentImg.offsetHeight; //获取目标元素的宽高
            // html2canvas(self.$refs.contentImg, { useCORS: true, width: DomeW, height: DemoH }).then(function(canvas) {
            //     var imgUri = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // 获取生成的图片的url
            //     window.location.href = imgUri; // 下载图片
            // });


        }
    },

}