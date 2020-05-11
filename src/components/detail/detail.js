import Share from '@/components/share/share.vue'

export default {
    name: "Detail",
    components: { Share },
    data() {
        return {
        };
    },
    mounted() {

    },
    methods: {
        // 分享海报
        toPost() {
            this.$refs.share.shareOpen();
        }
    }
};