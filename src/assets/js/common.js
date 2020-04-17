let _com = {
    getJosn: function(that, url, d, call) {
        that.$http
            .jsonp(url, { params: d })
            .then(res => {
                call(res.body);
            }).catch(error => {
                console.log(error);
            })
    }
}


export {
    _com
}