<template>
    <div class="detail">
        <header>
            <div class="bg-header"></div>
            <div class="bg-over"></div>
        </header>
        <div class="content-wrap">
            <ul>
                <li class="cover">
                    <img v-lazy="works.pdfpic" alt="...">
                </li>
                <li class="autho">
                    <p class="name">{{works.pdfname}}</p>
                    <!-- <a><span>作者：</span>{{works.videoauthornames}}</a> -->
                    <a><span></span>{{works.pdftempname}}</a>
                </li>
                <li class="info">
                    <p class="name">作品简介</p>
                    <p class="info">{{works.pdfdec}}</p>
                </li>
            </ul>
            <div class="welcome">
                <div class="wrap">
                    <p class="title">欢迎进入图书作品展区</p>
                    <p class="likes">已有<a>{{works.likecount || 0}}</a>人为此作品点赞</p>
                    <a class="btn-like" @click="lickCount('add')" v-if="!isLikeClick"></a>
                    <a class="btn-cancle" @click="lickCount('cut')" v-if="isLikeClick"></a>
                </div>
            </div>
        </div>
        <footer>
            <ul>
                <li>
                    <a class="btn-poster" @click="toPost()"></a>
                </li>
                <li>
                    <a class="btn-share" @click="toShare()"></a>
                </li>
                <li>
                    <a class="btn-back" @click="toHomePage()"></a>
                </li>
                <li>
                    <a class="btn-continue" @click="toList()"></a>
                </li>
            </ul>
        </footer>
        <!-- 分享海报 -->
        <share ref="share" :postData="postData"></share>
        <!-- 分享朋友圈 -->
        <share-tip ref="tip"></share-tip>
    </div>
</template>

<script>
import bookDetail from './detail.js';
export default bookDetail;
</script>

<style scoped>
@import url(./detail.css);
</style>