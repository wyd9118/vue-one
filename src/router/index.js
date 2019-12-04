import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import ContentList from '../components/ContentList'
Vue.use(VueRouter)
const routes = [
    {
        path:'/',
        component:Home,
        meta:{
            keepAlive:true
        }
    },
    {
        path:'/content-list',
        component:ContentList,
        meta:{
            keepAlive:true
        }
    },
    {
        path:'/login',
        component:Login,
        meta:{
            keepAlive:false
        }
    }
];
const router = new VueRouter({
    module:'history',
    routes
});
router.beforeEach(function(to,from,next){ console.log(to,localStorage.getItem('userToken'))
    let _token = localStorage.getItem('certificate');
    // let _token = localStorage.getItem('userToken');
    _token||to.path==='/login'?next():next('/login');
});
export default router