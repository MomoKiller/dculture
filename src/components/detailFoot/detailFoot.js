import toast from '@/components/toast/toast.vue'
export default {
    name: "DetailFoot",
    components: { toast},
    data() {
        return {
            isshowToast:false
        };
    },
    mounted() {

    },
    methods: {
        // toastalert() {
        //     // alert('点击分享');
        //     this.$refs.toast.message="敬请期待"
        // },
        // 页脚按钮事件
        toPage(index) {
            if (this.$router.currentRoute.path != index) {
                if (index == '') {
                    this.isshowToast = true;
                    var that_ = this;
                    setTimeout(
                        function(){
                            that_.isshowToast = false;
                        }, 3000);
                    console.log('敬请期待');
                } else {
                    this.$router.push({ path: index });
                }
            }
        },
    }
}