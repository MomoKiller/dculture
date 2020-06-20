<template>
    <div class="detail">
        <header></header>
        <div class="content-wrap">
            <ul>
                <li class="cover">
                    <img v-lazy="works.img" alt="...">
                </li>
                <li class="autho">
                    <p class="name">{{works.name}}</p>
                    <a><span>作者：</span>{{works.author}}</a>
                </li>
                <li class="info">
                    <p class="name">作品释义</p>
                    <p class="info">{{works.interpretation}}</p>
                </li>
                <li class="teams">
                    <p class="name">团队简介</p>
                    <p class="info">{{works.teamInfo}}</p>
                </li>
            </ul>
            <div class="welcome">
                <div class="wrap">
                    <p class="title">欢迎进入戏曲作品展区</p>
                    <p class="likes">已有<a>{{works.thumbsNumber}}</a>人为此作品点赞</p>
                    <a class="btn-like"></a>
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
        <share ref="share"></share>
    </div>
</template>

<script>
import detail from './detail.js';
export default detail;
</script>

<style scoped>
@import url(./detail.css);
</style>