export default {
    name: "Home",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    mounted() {

    },
    methods: {
        toMusic() {
            alert('music');
        },
        toEnter() {
            alert('Enter');
            this.$router.push({ path: '/list' });
        }
    }
};