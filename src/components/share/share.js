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
            hasImg: false,
            imgfordown:"",
            showdiv:false,
            
        };
    },
    mounted() {
        this.useqrcode();
        // this.toPost();
    },
    methods: {
        // 生成海报
        toPost() {
            console.log("this is toPost.....")
            let self = this;
            let DomeW = self.$refs.postref.offsetWidth; //获取目标元素的宽高
            let DemoH = self.$refs.postref.offsetHeight; //获取目标元素的宽高
            console.log("this is toPost....."+DomeW+"==="+DemoH)
            html2canvas(self.$refs.postref, { useCORS: true, width: DomeW, height: DemoH }).then(function(canvas) {
                let imgUri = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // 获取生成的图片的url
                console.log("this is html2canvas")
                self.downloadIamge(imgUri, self.postData.videoname);
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
                self.toPost();
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
                var a = document.createElement("a"); // 生成一个a元素
                var event = new MouseEvent("click"); // 创建一个单击事件
                a.download = name || "photo"; // 设置图片名称
                a.href = url; // 将生成的URL设置为a.href属性
                a.dispatchEvent(event); // 触发a的单击事件
                that_.imgfordown = url;
                that_.showdiv = true;
                // self.$refs.contentImg.src = url;
                // self.hasImg = true;
                // self.savePicture(url);
                
            };
            image.src = imgsrc;
            console.log(imgsrc)
            //this.downloadFileByBase64(imgsrc, 'image/png', 'tupian.png');
        },
        // dataURLtoBlob(base64Str, mimeTypeStr) {
        //     console.log("1---this is dataURLtoBlob")
		// 	var bstr = atob(base64Str), n = bstr.length, u8arr = new Uint8Array(n);
		// 	while (n--) {
		// 		u8arr[n] = bstr.charCodeAt(n);
		// 	}
		// 	return new Blob([u8arr], { type: mimeTypeStr });
		// },
		/**创建一个a标签，并做下载点击事件*/
		// downloadFile(hrefUrl,fileName){
        //     console.log("2---this is downloadFile")
		// 	var a = document.createElement("a")
		// 	a.setAttribute("href",hrefUrl)
		// 	a.setAttribute("download",fileName)
		// 	a.setAttribute("target","_blank")
		// 	let clickEvent = document.createEvent("MouseEvents");
		// 	clickEvent.initEvent("click", true, true);  
		// 	a.dispatchEvent(clickEvent);
		// },
        // downloadFileByBase64(base64Str, mimeTypeStr, fileName){
        //     console.log("3---this is downloadFileByBase64")
		// 	var myBlob = this.dataURLtoBlob(base64Str, mimeTypeStr)
		// 	var myUrl = URL.createObjectURL(myBlob)
		// 	this.downloadFile(myUrl,fileName)
		// },
        /* 打开窗口 */
        shareOpen() {
            this.shareState = true;
            //this.toPost()
        },
        /* 关闭窗口 */
        shareClose() {
            this.shareState = false;
            this.hasImg = false;
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
        },
    },
     
}