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
    }
}