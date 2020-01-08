import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import config from './config.js'
Vue.use(axios)
var base = {
    baseURL:config.baseUrl,
    companyCode:config.companyCode,
    transformRequest:[function(data){
        config.data = qs.stringify(config.data);
        return data;
    }],
    proxy: {
        host: '127.0.0.1',
        port: 9000,
        auth:  {
          username: 'mikeymike',
          password: 'rapunz3l'
        }
    },
};
const ajax = function(o){ 
    let obj = typeof o==='object'?o:{url:o};
    base.url = obj.url;
    base.method = obj.method||'get';
    base.timeout = obj.timeout||3000;
    if(obj.headers){
        base.headers = obj.headers;
    }
    return axios.create(base);
};
Vue.prototype.$axios = ajax;
export default {

}