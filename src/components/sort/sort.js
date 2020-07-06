import Slider from '@/components/slider/Slider.vue'

export default {
    name: 'Sort',
    components: { Slider },
    data() {
        return {
            title: '书画'
        }
    },
    mounted() {
        document.title = this.$router.currentRoute.name;
    },
    methods: {
        toHomePage() {
            this.$router.push({ path: '/' });
            // this.$router.push({ path: 'bookDetail', query: { pdfid: item.pdfid } });
        },
        getTitle(name) {
            this.title = name;
        }
    }
}