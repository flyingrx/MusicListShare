/**
 * Created by hasee on 2017/5/4.
 */

const http = require('http')
let wy_res = ''
const myMethod={
    createHttp:function (hostname,path,method,cookie,callback) {
        let http_client = http.request({
            hostname:hostname,
            path:path,
            method:method,
            headers: {
                'Accept': '*/*',
                'Accept-Language': 'zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4',
                'Connection': 'keep-alive',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Referer': 'http://music.163.com',
                'Host': 'music.163.com',
                'Cookie': cookie,
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36',

            }
        },function (res) {
            res.on('error',function (err) {
                console.log(err);
            })
            if (res.status!=200){
                console.log('status!=200')
                return;
            }
            res.setEncoding('utf8')
            res.on('data',function (chunk) {})

        })
    }
}
