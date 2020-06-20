import Share from '@/components/share/share.vue'

export default {
    name: "Detail",
    components: { Share },
    data() {
        return {
            works: {}
        };
    },
    mounted() {
        this.initData();
    },
    methods: {
        initData() {
            this.works = {
                img: 'http://www.xinzhimin.xyz/detail-img-default.png',
                name: '黄梅戏',
                author: 'XXXX团体',
                interpretation: '黄梅戏与京剧、越剧、评剧、豫剧并称“中国五大戏曲剧种”，也是安徽省的主要地方戏曲剧种，湖北、江西、福建、浙江、江苏、香港、台湾等地亦有黄梅戏的专业或业余的演出团体，受到广泛的欢迎。黄梅戏是由山歌、秧歌、茶歌、采茶灯、花鼓调，先于农村，后入城市，逐步形成发展起来的一个剧种。它吸收了汉剧、楚剧、高腔、采茶戏、京剧等众多剧种的因素，逐渐形成了自己的艺术特点。黄梅戏唱腔淳朴流畅，以明快抒情见长，具有丰富的表现力；一曲《天仙配》让黄梅戏流行于大江南北，在海外亦有较高的声誉。',
                teamInfo: '黄梅戏是中国五大戏曲剧种之一，影响十分深远。黄梅戏流行区域正在萎缩，各级黄梅戏剧团特别是县级剧团的生存日益艰难，需要政府和全社会的关心与扶植。',
                thumbsNumber: 196
            };
        },
        // 分享海报
        toPost() {
            this.$refs.share.shareOpen();
        },
        toShare() {
            alert('分享');
        },
        toHomePage() {
            this.$router.push({ path: '/home1' });
        },
        toList() {
            this.$router.push({ path: '/list' });
        }
    }
};