export default {
    name: "List",
    data() {
        return {
            listObj: [],
            showBtnTop: false
        };
    },
    mounted() {
        this.initData();
        // 监听滚动
        window.addEventListener('scroll', this.getScrollPosition, true);
    },
    methods: {
        initData() {
            this.listObj = [{
                    id: '0',
                    imgSrc: require('../../assets/img/list/list-img-default.png'),
                    title: '富春山居图',
                    autho: '黄公望',
                    desc: ' 一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字'
                }, {
                    id: '1',
                    imgSrc: require('../../assets/img/list/list-img-default.png'),
                    title: '富春山居图',
                    autho: '黄公望',
                    desc: ' 一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字'
                },
                {
                    id: '2',
                    imgSrc: require('../../assets/img/list/list-img-default.png'),
                    title: '富春山居图',
                    autho: '黄公望',
                    desc: ' 一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字'
                },
                {
                    id: '3',
                    imgSrc: require('../../assets/img/list/list-img-default.png'),
                    title: '富春山居图',
                    autho: '黄公望',
                    desc: ' 一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字'
                }
            ];
        },
        // 列表查看详情
        toDetail(item) {
            alert('当前图片ID: ' + item.id);
            this.$router.push({ path: '/detail' });
        },
        // 回到顶部
        toTop() {
            var timer = setInterval(function() {
                let osTop = document.querySelector('.list').scrollTop;
                let ispeed = Math.floor(-osTop / 5);
                document.querySelector('.list').scrollTop = osTop + ispeed;

                this.isTop = true;
                if (osTop === 0) {
                    clearInterval(timer);
                }
            }, 30)
        },
        // 页脚按钮事件
        toPage(index) {
            alert('当前点击的第' + index + '个按钮！');
        },
        // 点击搜索按钮
        searchList() {
            alert('点击了搜索按钮');
        },
        // 点击分享
        share() {
            alert('点击分享');
        },
        // 滚动
        getScrollPosition() {
            let scrollH = document.querySelector('.list').scrollHeight;
            let osTop = document.querySelector('.list').scrollTop;
            let pageH = document.querySelector('.list').offsetHeight || document.querySelector('.list').clientHeight;
            if ((pageH + osTop) >= (scrollH - 70) && scrollH >= (pageH + 70)) {
                this.showBtnTop = true
            } else {
                this.showBtnTop = false;
            }
        }

    },
    destroyed() {
        window.removeEventListener('scroll', this.getScrollPosition, true);
    }
};