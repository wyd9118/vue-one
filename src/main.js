import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import axios from 'axios'
import qs from 'qs'
import router from './router'
import commonConfig from './common-config.js'
Vue.prototype.$http = axios
Vue.prototype.$config = commonConfig

Vue.config.productionTip = false
Vue.use(ElementUI)
let _this = this;
axios.interceptors.request.use(function(config){ console.log(_this,commonConfig)
  config.companyCode = commonConfig.companyCode;
  let certificate = sessionStorage.getItem('certificate');
  if(certificate){
    config.certificate = certificate;
  }else{
    router.push('/login');
  }
  config.data = qs.stringify(config.data);
  return config;
});
new Vue({
  el:'#app',
  render(h){
    return h(App);
  },
  router
});
