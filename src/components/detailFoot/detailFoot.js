import Toast from '@/assets/js/toast.js';

export default {
    name: "DetailFoot",
    data() {
        return {};
    },
    mounted() {},
    methods: {
        /* 页脚按钮事件 */
        toPage(index) {
            if (this.$router.currentRoute.path != index) {
                if (index == '') {
                    Toast.$emit('toastMsg', '敬请期待');
                } else {
                    this.$router.push({ path: index });
                }
            }
        },
    }
}