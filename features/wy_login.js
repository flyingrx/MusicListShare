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
    'params':phone,
    'encSecKey':md5num.digest('hex'),
    'rememberLogin':'true'
}
myMethod.createHttp(
    'music.163.com',
    'weapi/login/cellphone',
    'POST',
    data,
    cookie,
    (res)=>{userInfo.id=res.id;userInfo.cookie=res.cookie}
)
console.log(userInfo)
