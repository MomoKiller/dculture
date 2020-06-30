import html2canvas from 'html2canvas';
import QRCode from 'qrcode';

export default {
    name: "Share",
    props: ['postData'],
    data() {
        return {
            shareState: false,
            timeOutEvent: 0, // 定时器
            ercode: ''
        };
    },
    mounted() {},
    methods: {
        // 生成海报
        toPost() {
            let self = this;
            let DomeW = self.$refs.postref.offsetWidth; //获取目标元素的宽高
            let DemoH = self.$refs.postref.offsetHeight; //获取目标元素的宽高
            html2canvas(self.$refs.postref, { useCORS: true, width: DomeW, height: DemoH }).then(function(canvas) {
                let imgUri = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // 获取生成的图片的url

                self.downloadIamge(imgUri, self.postData.videoname);
                // self.savePicture('http://www.xinzhimin.xyz/detail-bg-header.png');
                // self.downloadIamge('http://www.xinzhimin.xyz/detail-bg-header.png', self.postData.videoname);
            })
        },
        gotouchstart(e) {
            // 阻止默认事件
            e.preventDefault();
            let self = this;
            clearTimeout(this.timeOutEvent); //清除定时器
            this.timeOutEvent = 0;
            /* 长按触发事件 */
            this.timeOutEvent = setTimeout(function() {
                self.toPost();
            }, 600);
        },
        /* 移动触发事件 */
        gotouchmove(e) {
            // 阻止默认事件
            e.preventDefault();
            clearTimeout(this.timeOutEvent);
            if (this.timeOutEvent != 0) {}
        },
        gotouchend(e) {
            // 阻止默认事件
            e.preventDefault();
            clearTimeout(this.timeOutEvent); //清除定时器
            this.timeOutEvent = 0;
        },
        /* 图片下载 */
        downloadIamge(imgsrc, name) { //下载图片地址和图片名
            let self = this;
            var image = new Image();
            // 解决跨域 Canvas 污染问题
            image.setAttribute("crossOrigin", "anonymous");
            image.onload = function() {
                var canvas = document.createElement("canvas");
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

                self.$refs.contentImg.src = url;

            };
            image.src = imgsrc;


        },
        /* 打开窗口 */
        shareOpen() {
            this.shareState = true;
            setTimeout(this.useqrcode, 0);
        },
        /* 关闭窗口 */
        shareClose() {
            this.shareState = false;
        },
        /* 生成的二维码 */
        useqrcode() {　　　　
            var canvas = this.$refs.ercode;
            this.ercode = location.href;
            QRCode.toCanvas(canvas, this.ercode, function(error) {
                if (error) console.error(error)
                console.log('success!');
            })
        },
        /* 保存图片 */
        savePicture(Url) {
            var blob = new Blob([''], { type: 'application/octet-stream' });
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = Url;
            a.download = Url.replace(/(.*\/)*([^.]+.*)/ig, "$2").split("?")[0];
            var e = document.createEvent('MouseEvents');
            e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
            URL.revokeObjectURL(url);
        }

    }
}