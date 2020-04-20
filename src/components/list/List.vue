<template>
  <div class="list">
    <header>
      <a class="share" @click="share()"></a>
      <div class="bg-herder"></div>
      <div class="search-wrap">
        <div class="input-wrap">
          <i></i>
          <input type="text" placeholder="请输入作品名称或作者搜索"/>
          <a class="btn-search" @click="searchList()"></a>
        </div>
        <p>*作品以首字母排列，排名不分先后</p>
      </div>
    </header>
    <div class="content-wrap">
      <ul>
        <li v-for="(item, i) in listObj" :key="i">
          <div class="img-wrap">
            <img :src="item.imgSrc" alt="">
            <a></a>
          </div>
          <div class="detail">
            <p class="title">{{item.title}}</p>
            <p class="autho">作者：<a>{{item.autho}}</a></p>
            <p class="desc">{{item.desc}}</p>
            <div class="btn-wrap">
              <a @click="toDetail(item)"></a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <footer>
      <div class="footer">
        <p>
          <a>常熟市委宣传部出品</a>
        </p>
        <p>苏州巨数技术支持</p>
      </div>
      <ul>
        <li class="toBook" @click="toPage(1)"></li>
        <li class="toMusic" @click="toPage(2)"></li>
        <li class="toDance" @click="toPage(3)"></li>
        <li class="toPainting" @click="toPage(4)"></li>
        <li class="toClass">
          <i @click="toPage(5)"></i>
        </li>
        <li class="toOpera" @click="toPage(6)"></li>
        <li class="toQuyi" @click="toPage(7)"></li>
        <li class="toRecord" @click="toPage(8)"></li>
        <li class="toRadio" @click="toPage(9)"></li>
      </ul>
    </footer>
    <a class="btn-top" @click="toTop()" v-if="showBtnTop"></a>
  </div>
</template>

<script>
import list from "./list.js";
export default list;
</script>

<style scoped>
@import url(./list.css);
</style>