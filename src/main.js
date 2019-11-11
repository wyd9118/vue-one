import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import axios from 'axios'
import qs from 'qs'
axios.interceptors.request.use(function(config){
    config.data = qs.stringify(config.data);
    return config;
});
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  el:'#app',
  render(h){
    return h(App);
  }
});
