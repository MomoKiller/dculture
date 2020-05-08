import Share from '@/components/share/share.vue'

export default {
    name: "Detail",
    components: { Share },
    data() {
        return {
            showPost: false
        };
    },
    mounted() {

    },
    methods: {
        // 分享海报
        toPost() {
            this.showPost = true;
        }
    }
};