import HttpUtil from './httpUtil'
import user from './auth'
import utils from './utils'
const baseAddress = 'https://116.62.137.199' + '/jd_app';
const sendIds = {
    'login': {
        method: 'POST',
        url: baseAddress + '/auth/login',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        succeed(json) {
            user.displayName = json.displayName;
            user.userId = json.userId;
            user.token = json.token;
            user.roles = json.roles;
            user.perms = json.perms;
            user.save();
            console.log(user);
        }
    },
}

// then.arrayBuffer()
// blob()
// json()
// text()
// formData()

class Requests {
    static send(sendId, body) {
        if (sendIds[sendId].method == 'POST') {
            return HttpUtil.post(sendIds[sendId].url, body, sendIds[sendId].headers).then((json) => {
                //处理 请求success  
                if (json.code === 0) {
                    sendIds[sendId].succeed(json.data);
                } else {
                    //处理自定义异常  
                    console.error(json.comment); 
                }
            }, (json) => {
                console.log('处理请求fail ', json);
            })
        } else if (sendIds[sendId].method == 'GET') {
            return HttpUtil.get(sendIds[sendId].url, body, sendIds[sendId].headers).then((json) => {
                if (json.code === 0) {
                    sendIds[sendId].succeed(json.data);
                } else {
                    this.doException(json);
                }
            }, (json) => {
                console.log('处理请求fail ', JSON.parse(json));
            })
        }
    }
}
export default Requests;

// fetch(url, {
//     method: sendIds[sendId].method,
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: JSON.stringify(body),
// }).then((response) => response.text())
//     .then((responseData) => {
//         console.log('responseData', responseData);
//         // json格式化  JSON.stringify(responseData)转字符串
//         console.log('json格式化', JSON.parse(responseData));
//         // alert(responseData);
//     })