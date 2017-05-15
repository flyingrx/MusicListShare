/**
 * Created by hasee on 2017/5/4.
 */
const myMethod = require('../util/util.js')
const crypto = require('crypto')

let userInfo={}
const handle = function (res) {

}
let cookie =''
let phone = '18792910209'
let password = '89128217'

let md5num = crypto.createHash('md5')
md5num.update(password);
let data = {
    'phone':phone,
    'password':md5num.digest('hex'),
    'rememberLogin':'true'
}
myMethod.createHttp(
    'music.163.com',
    '/weapi/login/cellphone',
    'POST',
    data,
    cookie,
    (res,cooki)=>{
        if(res.indexOf('高频')){
            console.log('访问过于频繁');
            return;
        }
        var dm = JSON.parse(res)
        userInfo.id=dm.account.id
        cookie=cooki
        // console.log('usr:',userInfo)
        data = {
            'id':userInfo.id,
            'offset':'0',
            'total':'true',
            "limit":"1000",
            "n":"1000",
            "csrf_token":""
        }
        let playlist;
        myMethod.createHttp(
            'music.163.com',
            '/weapi/v3/playlist/detail',
            'POST',
            data,
            cookie,
            (res,cooki)=>{
            dm = JSON.parse(res);
            playlist = res.playlist.tracks;
            console.log(playlist);
            }
        )
    }
)




