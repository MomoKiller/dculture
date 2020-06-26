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
                this.$router.push({ path: index });
            }
        },
    }
}