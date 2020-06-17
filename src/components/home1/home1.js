export default {
    name: "Home1",
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