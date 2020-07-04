import Slider from '@/components/slider/Slider.vue'

export default {
    name: 'Sort',
    components: { Slider },
    data() {
        return {

        }
    },
    mounted() {
        document.title = this.$router.currentRoute.name;
    },
    methods: {
        toHomePage() {
            this.$router.push({ path: '/' });
            // this.$router.push({ path: 'bookDetail', query: { pdfid: item.pdfid } });
        }
    }
}