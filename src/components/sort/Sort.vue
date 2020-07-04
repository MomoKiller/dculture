<template>
    <div class="sort">
        <a class="toHome" @click="toHomePage()"></a>
        <a class="finger" v-if="finTimer"></a>
        <header>
            <div class="bg-bamboo"></div>
            <div class="theme"></div>
            <div class="title"></div>
        </header>
        <div class="content">
            <div class="content-wrap">
                <slider></slider>
            </div>
            <div class="tips">
                << <a>左右轮播选择板块参观</a>>>
            </div>
        </div>
        <footer></footer>
        <!-- 尾部 -->
        <div class="footer">
            <p><a>常熟市委宣传部出品</a></p>
            <p>苏州巨数技术支持</p>
        </div>
    </div>
</template>

<script>
import sort from './sort.js';
export default sort;
</script>

<style scoped>
@import url(./sort.css);
</style>