<template>
  <div class="slider">
    <div class="window" @mouseover="stop" @mouseleave="play">
      <ul class="container" :style="containerStyle">
        <li>
          <img :style="{width:(imgWidth-40)+'px'}" :src="sliders[sliders.length - 1].img" alt="">
        </li>
        <li v-for="(item, index) in sliders" :key="index" :class="{'active': currentIndex == (index+1)}" @click.prevent="goPage(index)">
          <!-- <img :style="{width:imgWidth+'px'}" :src="item.img" alt=""> -->
          <img :style="{width: (currentIndex != (index+1) ? imgWidth - 40 : imgWidth) +'px'}" :src="item.img" alt="">
        </li>
        <li>
          <img :style="{width:(imgWidth - 40)+'px'}" :src="sliders[0].img" alt="">
        </li>
      </ul>
    </div>
    <!-- <ul class="direction">
      <li class="left" @click="move(pageW, 1, speed)">
        <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"  />
        </svg>
      </li>
      <li class="right" @click="move(pageW, -1, speed)">
        <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"  />
        </svg>
      </li>
    </ul> -->
      <!-- <ul class="dots">
        <li v-for="(dot, i) in sliders" :key="i" :class="{dotted: i === (currentIndex-1)}" @click = jump(i+1)>
        </li>
      </ul> -->
  </div>
</template>

<script>
  export default {
    name: 'Slider',
    props: {
      initialSpeed: {
        type: Number,
        default: 30
      },
      initialInterval: {
        type: Number,
        default: 3
      }
    },
    data() {
      return {
        sliders: [
          {
            img: 'http://www.xinzhimin.xyz/sort-class-book.png',
            page: 'bookList'
          },
          {
            img: 'http://www.xinzhimin.xyz/sort-class-quyi.png',
            page: 'quyiList'
          },
          {
            img: 'http://www.xinzhimin.xyz/sort-class-dance.png',
            page: 'danceList'
          },
          // {
          //   img: 'http://www.xinzhimin.xyz/sort-class-painting.png',
          //   page: 'paintingList'
          // }
        ],
        imgWidth: 300,
        currentIndex: 1,
        distance: -300,
        transitionEnd: true,
        speed: this.initialSpeed,
        pageW: 300 
      }
    },
    computed: {
      containerStyle() {
        return {
          transform: `translate3d(${this.distance}px, 0, 0)`
        }
      },
      interval() {
        return this.initialInterval * 1000
      }
    },
    mounted() {
        this.pageW = (document.querySelector('.slider').offsetWidth || document.querySelector('.slider').clientWidth) * 0.55;
        this.imgWidth = this.pageW;
        this.distance = - this.pageW;
        this.init();
        let self = this;
        this.EventUtil.listenTouchDirection(document.querySelector('.slider'), true, ()=>{
          // 上滑
        }, ()=>{
          // 右滑
          self.move(self.pageW, 1, self.speed);
        }, ()=>{
          // 下滑
        }, ()=>{
          // 左滑
          self.move(self.pageW, -1, self.speed);
        });
      
    },
    methods: {
      goPage(index){
        this.$router.push({ path: this.sliders[index].page });
      },
      init() {
        this.play()
        window.onblur = function() { this.stop() }.bind(this)
        window.onfocus = function() { this.play() }.bind(this)
      },
      move(offset, direction, speed) {
          let self = this;
        console.log(speed)
        if (!this.transitionEnd) return
        this.transitionEnd = false
        direction === -1 ? this.currentIndex += offset / self.pageW : this.currentIndex -= offset / self.pageW
        // if (this.currentIndex > 5) this.currentIndex = 1
        // if (this.currentIndex < 1) this.currentIndex = 5
        if (this.currentIndex > this.sliders.length) this.currentIndex = 1
        if (this.currentIndex < 1) this.currentIndex = this.sliders.length

        const destination = this.distance + offset * direction
        this.animate(destination, direction, speed)
      },
      animate(des, direc, speed) {
          let self = this;
        if (this.temp) {
          window.clearInterval(this.temp)
          this.temp = null
        }
        
        this.temp = window.setInterval(() => {
          if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
            this.distance += speed * direc
          } else {
            this.transitionEnd = true
            window.clearInterval(this.temp)
            this.distance = des
            if (des < -(self.sliders.length) * self.pageW) this.distance = -self.pageW
            if (des > -self.pageW) this.distance = -(self.sliders.length) * self.pageW
          }
        }, 20)
      },
      jump(index) {
          let self = this;
        const direction = index - this.currentIndex >= 0 ? -1 : 1
        const offset = Math.abs(index - this.currentIndex) * self.pageW
        const jumpSpeed = Math.abs(index - this.currentIndex) === 0 ? this.speed : Math.abs(index - this.currentIndex) * this.speed
        this.move(offset, direction, jumpSpeed)
      },
      play() {
          let self = this;
        if (this.timer) {
          window.clearInterval(this.timer)
          this.timer = null
        }
        // this.timer = window.setInterval(() => {
        //   this.move(self.pageW, -1, this.speed)
        // }, this.interval)
      },
      stop() {
        window.clearInterval(this.timer)
        this.timer = null
      }
    }
  }
</script>

<style scoped>
  *{
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
  ol,ul{
    list-style: none;
  }
  .slider{
    text-align: center;
    position: relative;
  }
  .window{
    position:relative;
    width: 55%;
    /* height:300px; */
    margin:0 auto;
    /* overflow:hidden; */
    padding-bottom: 80%;
  }
 
 
  
  img{
    user-select: none;
  }
  .dots{
    position:absolute;
    bottom:10px;
    left:50%;
    transform:translateX(-50%);
  }
  .dots li{
    display:inline-block;
    width:15px;
    height:15px;
    margin:0 3px;
    border:1px solid white;
    border-radius:50%;
    background-color:#333;
    cursor:pointer;
  }
  .dots .dotted{
    background-color:orange;
  }

  /**/
  .direction {
    position: absolute;
    overflow: hidden;
    height: 100%;
    width: 100%;
    top: 0;
  }

  

   .direction li.left, 
   .direction li.right{
    position:absolute;
    /* top:50%;
    transform:translateY(-50%);
    width:50px;
    height:50px; */
    /* background-color:rgba(0,0,0,.3); */
    /* border-radius:50%; */
    cursor:pointer;
  }
  .direction li{
    width: 20%;
    height: 100%;
  }
  .direction li.left{
    left:0;
  }
  .direction li.right{
    right:0;
  }
  

   .container{
    display:flex;
    position:absolute;
    /* margin-left: -30px; */
  }
  svg {
    margin-top: 8px;
  }
  li img{
    margin-top: 10px;
  }
  li.active{
    /* margin: 0 40px; */
  }
  li img{ 
    margin: 30px 20px;
  }
  li.active img{ 
    margin: 0;
  }
 
</style>