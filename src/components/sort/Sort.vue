<template>
    <div class="sort">

        <div class="sort-wrap">
            <a class="toHome" @click="toHomePage()"></a>
            
            <header>
                <div class="bg-bamboo"></div>
                <div class="theme"></div>
                <div class="title">{{title}}</div>
            </header>
            <div class="content">
                <div class="content-wrap">
                    <slider @titleName="getTitle"></slider>
                </div>
                <div class="tips">
                    << <a>左右轮播选择板块参观</a>>>
                </div>
            </div>
            <!-- 尾部 -->
            <!-- <footer>
                
            </footer> -->

            <div class="footer-wrap"></div>
            <div class="footer">
                <p><a>常熟市委宣传部出品</a></p>
                <p>苏州巨数技术支持</p>
            </div>
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