<template>
    <div class="shareTip" v-if="tipState">
        <div class="mask" @click="closeTip()"></div>
        <div class="content"></div>
    </div>
</template>

<script>
export default {
    name: "ShareTip",
    data() {
        return {
            tipState: false
        };
    },
    mounted() {},
    methods: {
        openTip(){
            this.tipState = true;
        },
        closeTip(){
            this.tipState = false;
        }
    }
}
</script>

<style scoped>
.shareTip {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
}


/* 遮罩层 */

.shareTip .mask {
    height: 100%;
    width: 100%;
    background-color: #000;
    opacity: 0.6;
    filter: Alpha(opacity=60);
    position: absolute;
    top: 0;
    left: 0;
}

.shareTip .content {
    width: 57%;
    overflow: hidden;
    position: absolute;
    top: 3%;
    right: 8%;
    padding-bottom: 39.3%;
    background: url(http://www.xinzhimin.xyz/shareTip-bg.png) no-repeat;
    background-position: center top;
    background-size: 100%;
}
</style>