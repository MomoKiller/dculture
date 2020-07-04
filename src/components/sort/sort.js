import Slider from '@/components/slider/Slider.vue'

export default {
    name: 'Sort',
    components: { Slider },
    data() {
        return {
            finTimer: false
        }
    },
    mounted() {
        document.title = this.$router.currentRoute.name;
        let isSortPageShowed = JSON.parse(localStorage.getItem('SortPageShowed')) || false;
        if (!isSortPageShowed) {
            this.finTimer = true;
        }
        setTimeout(() => {
            this.finTimer = false;
            localStorage.setItem('SortPageShowed', true);
        }, 3000);
    },
    methods: {
        toHomePage() {
            this.$router.push({ path: '/' });
            // this.$router.push({ path: 'bookDetail', query: { pdfid: item.pdfid } });
        }
    }
}