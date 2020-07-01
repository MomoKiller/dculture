<template>
    <div class="toast">
        {{message}}
    </div>
</template>

<script>
export default {
    name: "Toast",
    data() {
        return {
            message: '敬请期待'
        };
    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style scoped>
.toast {
    position: fixed;
    z-index: 2000;
    left: 30%;
    top: 36%;
    text-align: center;
    border-radius: 5px;
    color:#FFF;
    background: rgba(17, 17, 17, 0.7);
    height: 100px;
    width: 150px;
    line-height: 100px;
    padding: 0 15px;
    font-size: 2rem
}

</style>