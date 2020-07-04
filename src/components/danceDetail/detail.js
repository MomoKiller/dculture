import Share from '@/components/share/share.vue'
import ShareTip from '@/components/shareTip/ShareTip.vue'

export default {
    name: "BookDetail",
    components: { Share, ShareTip },
    data() {
        return {
            works: {},
            isLikeClick: JSON.parse(localStorage.getItem(this.$route.query.videoid)) || false,
            player: null, // 定义播放器
            playerParam: {},
            videoIndex: 0,
            palyContainer: null,
            postData: {} // 分享海报数据
        };
    },
    mounted() {
        this.palyContainer = document.getElementById("player");
        this.initData();
        this.com.share(this, location.href);
    },
    methods: {
        initData() {
            let self = this;

            let listUrl = 'http://xinzhimin.xyz/video/selectById?videoid=' + this.$route.query.videoid;
            this.com.getData(this, listUrl, {}, (res) => {
                console.log('接口返回的数据', res);
                if (res) {
                    this.works = res;
                    this.works.videoList = [];
                    if (res.memo1 === '0') { // 不分集
                        self.works.videoList = [{
                            videoname: res.videoname,
                            videopic: res.videopic,
                            videourl: res.videourl
                        }]
                    } else {
                        const nameList = res.memo2.split(';');
                        const videoList = res.videourl.split(';');
                        for (let i = 0, r = videoList.length; i < r; i++) {
                            self.works.videoList.push({
                                videoname: nameList[i],
                                videopic: res.videopic,
                                videourl: videoList[i]
                            });
                        }
                    }

                    self.playerParam = {
                        url: self.works.videoList[0].videourl,
                        container: this.palyContainer,
                        autoplay: false,
                        // poster: this.works.videopic
                    };
                    self.showPlayer();
                    // 分享海报数据
                    self.postData = self.works;
                    self.postData.videoauthornames = res.memo3;
                    self.postData.header = 'dance';
                }
            })

        },
        // 分享海报
        toPost() {
            this.$refs.share.shareOpen();
        },
        toShare() {
            // alert('点击分享');
            this.$refs.tip.openTip();
        },
        toHomePage() {
            this.$router.push({ path: '/home1' });
        },
        toList() {
            // this.$router.push({ path: '/list' });
            this.$router.push({ path: this.$router.currentRoute.path.replace('Detail', 'List') });
        },
        // 点赞
        lickCount(type) {
            let self = this;
            let listUrl = 'http://xinzhimin.xyz/video/addorcutlike?videoid=' + this.$route.query.videoid + '&operate=' + type;
            this.com.getData(this, listUrl, {}, (res) => {
                console.log('接口返回的数据', res);
                // 更新点赞人数
                self.works.likecount = res.likecount;
                self.isLikeClick = (type == 'add') ? true : false;
                localStorage.setItem(this.$route.query.videoid, self.isLikeClick);
            });
        },
        // 视频组件
        showPlayer() {
            console.log(this.works.videoList);
            this.player = new QPlayer(this.playerParam);
        },
        // 视频切换
        switchPlayer(index) {
            let self = this;
            this.videoIndex = index;
            this.player.destroy();
            this.playerParam = {
                url: self.works.videoList[index].videourl,
                container: this.palyContainer,
                autoplay: false,
                // poster: this.works.videopic
            }
            this.showPlayer();
        }

    },
    destroyed() {
        // 释放播放器
        this.player.destroy();
    }
};