const host = window.location.host
const urlCondition = host.indexOf('localhost') > -1 || host.indexOf('127.0.0.1') > -1;
const baseUrl = urlCondition ? 'http://www.xinzhimin.xyz/' : 'http://' + host + '/'
    // 接口
const apis = {
    // login 
    'login': baseUrl + 'login', // 登录
    'listdata': baseUrl + 'listData'
}

// 浏览器参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var result, n;
    if (location.search != '') { // history 模式获取参数
        result = window.location.search.substr(1).match(reg);
    } else { // hash 模式获取参数
        n = location.hash.indexOf('params');
        result = location.hash.substr(n).replace('#/', '').match(reg);
    }
    return result ? decodeURIComponent(result[2]) : null;
}

/* 微信插件 */
import wx from 'weixin-js-sdk';
import qs from 'qs';

export default {
    // 获取完整 api 接口
    getApi: function(key) {
        let apiUrl = apis[key];
        return apiUrl;
    },
    // 获取 baseUrl
    getUrl: function() {
        return baseUrl;
    },
    // GET 接口获取数据;
    getData: function(that, url, d, call) {
        let previousRequest = null;
        let isResult = false;
        d = {
            emulateJSON: false,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'X-Requested-With': 'XMLHttpRequest',
                // 'Authorization': urlToken
            },
            before(request) {
                previousRequest = request;
            }
        };
        that.$http.get(url, d)
            .then(res => {
                isResult = true;
                call(res.body);
            }).catch(error => {
                console.log(error);
            });
        setTimeout(() => {
            if (!isResult) {
                previousRequest.abort();
                that.com.getData(that, url, d, call);
            }
        }, 5000);
    },
    // JSONP-GET 接口获取数据;
    jsonpData: function(that, url, d, call) {
        let previousRequest = null;
        let isResult = false;
        d = {
            emulateJSON: false,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'X-Requested-With': 'XMLHttpRequest',
                // 'Authorization': urlToken
            },
            before(request) {
                previousRequest = request;
            }
        };
        that.$http.jsonp(url, { params: d })
            .then(res => {
                isResult = true;
                call(res.body);
            }).catch(error => {
                console.log(error);
            });
        setTimeout(() => {
            if (!isResult) {
                previousRequest.abort();
                that.com.jsonpData(that, url, d, call);
            }
        }, 5000);
    },
    // POST 接口提交数据; 参数保留原有格式
    postData: function(that, url, d, call) {
        let previousRequest = null;
        let isResult = false;
        that.$http.post(url, d, {
            emulateJSON: false,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'X-Requested-With': 'XMLHttpRequest',
                // 'Authorization': urlToken
            },
            before(request) {
                previousRequest = request;
            }
        }).then(res => {
            isResult = true;
            call(res.body);
        }).catch(error => {
            console.log(error);
        });
        setTimeout(() => {
            if (!isResult) {
                previousRequest.abort();
                that.com.postData(that, url, d, call);
            }
        }, 5000);
    },
    // post 接口提交; 参数 stringify
    postStringfy: function(that, url, d, call) {
        let previousRequest = null;
        let isResult = false;
        that.$http.post(url, JSON.stringify(d), {
            emulateJSON: false,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'Authorization': urlToken
            },
            before(request) {
                previousRequest = request;
            }
        }).then(res => {
            isResult = true;
            call(res.body);
        }).catch(error => {
            console.log(error);
        });
        setTimeout(() => {
            if (!isResult) {
                previousRequest.abort();
                that.com.postStringfy(that, url, d, call);
            }
        }, 5000);
    },
    // POST 接口提交数据; 参数转formData
    postForm: function(that, url, d, call) {
        let previousRequest = null;
        let isResult = false;
        const resd = new FormData();
        Object.keys(d).forEach((key) => {
            resd.append(key, d[key]);
        });
        that.$http.post(url, resd, {
            emulateJSON: false,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'Authorization': urlToken
            },
            before(request) {
                previousRequest = request;
            }
        }).then(res => {
            isResult = true;
            call(res.body);
        }).catch(error => {
            console.log(error);
        });
        setTimeout(() => {
            if (!isResult) {
                previousRequest.abort();
                that.com.postForm(that, url, d, call);
            }
        }, 5000);
    },
    // 获取浏览器参数
    getUrlParam: function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var result, n;
        if (location.search != '') { // history 模式获取参数
            result = window.location.search.substr(1).match(reg);
        } else { // hash 模式获取参数
            n = location.hash.indexOf('params');
            result = location.hash.substr(n).replace('#/', '').match(reg);
        }
        return result ? decodeURIComponent(result[2]) : null;
    },
    // 手机设备验证
    isMobile: function() {
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
        return flag;
    },
    // 分享事件
    share: function(that) {
        var url = "http://xinzhimin.xyz"; //项目域名
        var nowlocation = "http://xinzhimin.xyz/vue/quyiList"; //当前页面的url
        wx.ready(() => { //需在用户可能点击分享按钮前就先调用
            console.log("updateAppMessageShareData & updateTimelineShareData")
                /* 聊天 */
            wx.updateAppMessageShareData({
                title: '常熟市精品文化数字展厅', // 分享标题
                desc: '我在常熟市精品文化数字展厅参观作品，大家快和我一起来参观吧！', // 分享描述
                link: nowlocation, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致 
                imgUrl: url + '/logo.png', // 分享图标
                success: function() {
                    console.log("分享成功")
                }
            });
            /* 朋友圈 */
            wx.updateTimelineShareData({
                title: '我在常熟市精品文化数字展厅参观作品，大家快和我一起来参观吧！', // 分享标题
                link: nowlocation, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: url + '/logo.png', // 分享图标
                success: function() {
                    console.log("分享成功")
                }
            })
        });

        let postData = qs.stringify({
            "url": nowlocation,
            "nonceStr": "abc",
        });

        that.com.postData(that, url + "/wx/getSignature", postData, (response) => {
            var signature = response.data.signature;
            var timestamp = response.data.timestamp;
            console.log(signature)
            console.log(timestamp)
            var appId = "wx1c753decf0a896a9";
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: appId, // 必填，公众号的唯一标识
                timestamp: timestamp, // 必填，生成签名的时间戳
                nonceStr: 'abc', // 必填，生成签名的随机串
                signature: signature, // 必填，签名
                jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表
            });
        });
    }
}