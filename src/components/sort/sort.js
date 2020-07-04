import Slider from '@/components/slider/Slider.vue'

export default {
    name: 'Sort',
    components: { Slider },
    data() {
        return {
            finTimer: true
        }
    },
    mounted() {
        document.title = this.$router.currentRoute.name;
        setTimeout(() => {
            this.finTimer = false;
        }, 3000);
    },
    methods: {
        toHomePage() {
            this.$router.push({ path: '/' });
            // this.$router.push({ path: 'bookDetail', query: { pdfid: item.pdfid } });
        }
    }
}