import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import ContentList from '../components/ContentList'
import EmployList from '../components/EmployList'
Vue.use(VueRouter)
const routes = [
    {
        path:'/',
        component:Home,
        meta:{
            showMenu:true
        }
    },
    {
        path:'/content-list',
        component:ContentList,
        meta:{
            showMenu:true
        }
    },
    {
        path:'/employ-list',
        component:EmployList,
        meta:{
            showMenu:true
        }
    },
    {
        path:'/login',
        component:Login,
        meta:{
            showMenu:false
        }
    }
];
const router = new VueRouter({
    module:'history',
    routes
});
router.beforeEach(function(to,from,next){
    let _token = sessionStorage.getItem('certificate');
    // let _token = localStorage.getItem('userToken');
    _token||to.path==='/login'?next():next('/login');
});
export default router