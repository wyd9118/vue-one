import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import axios from 'axios'
import qs from 'qs'
import router from './router'
// import './common.js'
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
axios.interceptors.request.use(function(config){
    console.log(config);
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
