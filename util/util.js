/**
 * Created by hasee on 2017/5/4.
 */

const http = require('http')
const Encrypt = require('./crypto.js')
let wy_res = ''
const myMethod={
    createHttp:function (hostname,path,method,data,cookie,callback) {
        const cryptoreq = Encrypt(data)
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
            console.log(res)
            res.on('error',function (err) {
                console.log(err);
            })
            if (res.statusCode!=200){
                console.log(res.statusCode);
                console.log(res.error)
                return;
            }
            res.setEncoding('utf8')
            res.on('data',function (chunk) {
                console.log(chunk)
                wy_res += chunk;
            })
            res.on('end',function () {
                if (wy_res==''){
                    console.log('none')
                    return
                }
                if(res.headers['set-cookie']){
                    callback(wy_res,res.headers['set-cookie']);
                }else{
                    callback(wy_res);
                }

            })

        })
        http_client.write('params='+cryptoreq.params+'&encSecKey='+cryptoreq.encSecKey)
        http_client.end()
    }
}
module.exports=myMethod
