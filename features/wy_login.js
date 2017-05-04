/**
 * Created by hasee on 2017/5/4.
 */
const myMethod = require('util/util.js')
let userInfo={}
const handle = function (res) {
    
}
myMethod.createHttp(
    'music.163.com',
    'weapi/login/cellphone',
    'POST',
    cookie,
    (res)=>{userInfo.id=res.id;userInfo.cookie=res.cookie}
)
