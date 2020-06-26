import html2canvas from 'html2canvas';

export default {
    name: "Share",
    props: ['postData'],
    data() {
        return {
            shareState: false,
            timeOutEvent: 0, // 定时器
            ercode: 'http://www.xinzhimin.xyz/default.png'
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
                self.downloadIamge(imgUri, '富春山居图');
            })
        },
        gotouchstart() {
            let self = this;
            clearTimeout(this.timeOutEvent); //清除定时器
            this.timeOutEvent = 0;
            /* 长按触发事件 */
            this.timeOutEvent = setTimeout(function() {
                self.toPost();
            }, 600);
        },
        /* 移动触发事件 */
        gotouchmove() {
            clearTimeout(this.timeOutEvent);
            if (this.timeOutEvent != 0) {}
        },
        gotouchend() {
            clearTimeout(this.timeOutEvent); //清除定时器
            this.timeOutEvent = 0;
        },
        /* 图片下载 */
        downloadIamge(imgsrc, name) { //下载图片地址和图片名
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
                var a = document.createElement("a"); // 生成一个a元素
                var event = new MouseEvent("click"); // 创建一个单击事件
                a.download = name || "photo"; // 设置图片名称
                a.href = url; // 将生成的URL设置为a.href属性
                a.dispatchEvent(event); // 触发a的单击事件
            };
            image.src = imgsrc;
        },
        /* 打开窗口 */
        shareOpen() {
            this.shareState = true;
        },
        /* 关闭窗口 */
        shareClose() {
            this.shareState = false;
        }
    }
}