import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import axios from 'axios'
import commonConfig from './common-config.js'
Vue.prototype.$http = axios
Vue.prototype.$config = commonConfig
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  el:'#app',
  render(h){
    return h(App);
  }
});
