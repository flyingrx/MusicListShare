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
    (res,cooki)=>{userInfo.id=res.account.id;userInfo.cookie=cooki;console.log(userInfo)}
)
cookie = userInfo.cooki
let playlist = '';
myMethod.createHttp(
    'music.163.com',
    '/weapi/user/playlist',
    'POST',
    data,
    cookie,
    (res,cooki)=>{
        playlist = res.
}
)
