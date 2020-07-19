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
        this.com.share(this, location.href);
        this.initBoat();
        this.toMusic()
        // audio.loop = true;
        // audio.src = this.backsound;
        // audio.play()//播放状态
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
            if(!this.runMusic){
                audio.pause();
            }else{
                audio.play();
            }
        },
        toEnter() {
            audio.pause();
            this.$router.push({ path: '/sort' });
        }
    }
};