# dculture

> czszwhzst

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).





## ########################   以下是备注信息     ################################


## videotype [ 0:舞蹈，1:戏剧，2:曲艺，3:纪录片 ] 


## Toast 已经封装成公共组件
# Toast 弹框使用方法  1.引用 toast.js;  2.通过$emit 将提示信息抛到最外层， 由 Toast 组件接收
# 
# import Toast from '@/assets/js/toast.js';
# Toast.$emit('toastMsg', '敬请期待');


## html2canvas 兼容 IOS 做法
# 
# npm uninstall html2canvas
# npm i html2canvas@1.0.0-rc.4


## 微信图片长按保存兼容 IOS 设备
# 
# 添加 img{ pointer-events:auto };  img 放在图层最顶层



