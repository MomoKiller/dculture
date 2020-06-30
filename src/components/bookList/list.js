import DetailFoot from '@/components/detailFoot/DetailFoot.vue'

export default {
    name: "BookList",
    components: { DetailFoot },
    data() {
        return {
            listObj: [],
            showBtnTop: false,
            seachParams: {
                // videotype: 0,
                currentPage: 1,
                pageSize: 5,
                keyword: ''
            },
            totleNum: 0,
            scrollTime: null // 节流
        };
    },
    mounted() {
        document.title = this.$router.currentRoute.name;

        // 监听滚动
        window.addEventListener('scroll', this.getScrollPosition, true);

        // 使用 mokedata
        this.getListData();
    },
    methods: {
        // 调接口查询数据
        getListData() {
            let params = '?currentPage=' + this.seachParams.currentPage + '&pageSize=' + this.seachParams.pageSize + '&keyword=' + this.seachParams.keyword;
            let listUrl = 'http://xinzhimin.xyz/book/selectByParam' + params;
            this.com.getData(this, listUrl, {}, (res) => {
                console.log('接口返回的数据', res);
                if (res && res.list) {
                    this.totleNum = res.lastPage;
                    this.listObj = [
                        ...this.listObj,
                        ...res.list
                    ];
                    this.seachParams.currentPage++;
                }
            });
        },
        // 列表查看详情
        toDetail(item) {
            this.$router.push({ path: 'bookDetail', query: { pdfid: item.pdfid } });
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
            // 重置条件
            this.seachParams.videotype = 0;
            this.seachParams.currentPage = 1;
            this.seachParams.pageSize = 5;
            this.listObj = [];
            this.getListData();
        },
        // 点击分享
        share() {
            alert('点击分享');
        },
        // 滚动
        getScrollPosition() {
            let self = this;
            let scrollH = document.querySelector('.list').scrollHeight;
            let osTop = document.querySelector('.list').scrollTop;
            let pageH = document.querySelector('.list').offsetHeight || document.querySelector('.list').clientHeight;
            // 是否出现返回顶部按钮
            if ((pageH + osTop) >= (scrollH - 70) && scrollH >= (pageH + 70)) {
                // alert((pageH + osTop) + '++' + scrollH)
                this.showBtnTop = true
            } else {
                this.showBtnTop = false;
            }
            // 是否加载下一页
            if ((pageH + osTop) >= (scrollH - 1)) {
                if (self.seachParams.currentPage > self.totleNum) {
                    return;
                } else {
                    self.getListData();
                }
            }

        }

    },
    destroyed() {
        window.removeEventListener('scroll', this.getScrollPosition, true);
    }
};