<template>
    <div class="toast" v-if="showMsg">
        {{message}}
    </div>
</template>

<script>
import Toast from '@/assets/js/toast.js';

export default {
    name: "Toast",
    data() {
        return {
            message: '敬请期待',
            showMsg: false,
            timer: null     // 定时器
        };
    },
    mounted() {
        let self = this;
        Toast.$on("toastMsg", (msg) => {
            if(self.timer){
                clearTimeout(self.timer);
                self.timer = null;
                self.showMsg = false;
            }
            self.showMsg = true;
            self.message = msg;
            self.timer = setTimeout(()=>{
                clearTimeout(self.timer);
                self.timer = null;
                self.showMsg = false;
            }, 3000);
        });
    },
    methods: {}
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