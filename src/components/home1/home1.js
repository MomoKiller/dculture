import wx from 'weixin-js-sdk';
var audio = new Audio();
export default {
    name: "Home1",
    data() {
        return {
            moveBoat: false,
            moveBoatTmp: false,
            runMusic: false,
            backsound:"http://www.xinzhimin.xyz/huaxuyin.mp3"
        };
    },
    mounted() {
        document.title = this.$router.currentRoute.name;
        this.initBoat();
        audio.loop = true;
        audio.src = this.backsound;
        console.log("ss222s")
        audio.addEventListener("playing", function(){		//播放状态
            audio.play()//播放状态
        });
        audio.addEventListener("pause", function(){
            audio.pause();
        });
       // this.toMusic()   
        // setTimeout(() => {
        // }, 200);
    },
    methods: {
        initBoat() {
            setTimeout(() => {
                this.moveBoatTmp = true;
            }, 4000);
            // setTimeout(() => {
            //     this.moveBoatTmp = true;
            // }, 6000);
            // setTimeout(() => {
            //     this.moveBoat = true;
            // }, 23000);
        },
        toMusic() {
           
            this.runMusic = !this.runMusic;
            audio.loop = true;
            audio.src = this.backsound;
            if (audio.paused) { //判读是否播放
                audio.play(); //没有就播放
            }
           
            // if(!this.runMusic){
            //     audio.pause();
            // }else{
            //     audio.play();
            // }
        },
        toEnter() {
            this.$router.push({ path: '/sort' });
        }
    }
};