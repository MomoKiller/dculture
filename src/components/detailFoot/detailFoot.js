export default {
    name: "DetailFoot",
    data() {
        return {

        };
    },
    mounted() {

    },
    methods: {
        // 页脚按钮事件
        toPage(index) {
            if (this.$router.currentRoute.path != index) {
                if (index == '') {
                    alert('敬请期待');
                } else {
                    this.$router.push({ path: index });
                }
            }
        },
    }
}