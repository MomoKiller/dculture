<template>
    <div class="detail">
        <header>
            <div class="bg-header"></div>
            <div class="bg-over"></div>
        </header>
        <div class="content-wrap">
            <ul>
                <li class="cover">
                    <!-- <img v-lazy="works.videopic" alt="..."> -->
                    <div class="player" id="player"></div>
                </li>
                <li class="autho">
                    <p class="name">
                        <a v-for="(item, i) in works.videoList" :key="i" :class="{active: i == videoIndex}" @click="switchPlayer(i)">{{item.videoname}}</a>
                    </p>
                    <!-- <a class="autho"><span>作者：</span>{{works.videoauthornames}}</a> -->
                    <a class="autho"><span></span>{{works.videoauthornames}}</a>
                </li>

                <!--
                <li class="cover">
                    <img v-lazy="works.videopic" alt="...">
                </li>
                <li class="autho">
                    <p class="name">{{works.videoname}}</p>
                    <a><span>作者：</span>{{works.videoauthornames}}</a>
                </li>
                -->
                <li class="info">
                    <p class="name">作品释义</p>
                    <p class="info">{{works.videodec}}</p>
                </li>
                <li class="teams">
                    <p class="name">团队简介</p>
                    <p class="info">{{works.groupdec}}</p>
                </li>
            </ul>
            <div class="welcome">
                <div class="wrap">
                    <p class="title">欢迎进入曲艺作品展区</p>
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
    </div>
</template>

<script>
import bookDetail from './detail.js';
export default bookDetail;
</script>

<style scoped>
@import url(./detail.css);
</style>