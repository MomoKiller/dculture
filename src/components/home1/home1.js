export default {
    name: "Home1",
    data() {
        return {
            moveBoat: false,
            moveBoatTmp: false,
            runMusic: false
        };
    },
    mounted() {
        this.initBoat();
    },
    methods: {
        initBoat() {
            setTimeout(() => {
                this.moveBoatTmp = true;
            }, 4000);
            // setTimeout(() => {
            //     this.moveBoatTmp = true;
            // }, 6000);
            // setTimeout(() => {
            //     this.moveBoat = true;
            // }, 23000);
        },
        toMusic() {
            this.runMusic = !this.runMusic;
        },
        toEnter() {
            alert('Enter');
            this.$router.push({ path: '/bookList' });
        }
    }
};