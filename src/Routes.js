import Login from './components/Login.vue'
import Registration from './components/Registration.vue'
import HomePage from "@/components/HomePage";
import Dashboard from "@/components/Dashboard";
import UserList from "@/components/UserList";

function guardMyRoute(to, from, next) {
    let isAuth = false;
    isAuth = localStorage.getItem("token") !== null;
    isAuth ? next() : next('/login')
}

export default [
    {path: '*', component: Login},
    {path: '/login', name:'login', component: Login},
    {path: '/register', name:'register', component: Registration},
    {path: '/dashboard', beforeEnter: guardMyRoute, name:'dashboard', component: Dashboard},
    {path: '/homePage', beforeEnter: guardMyRoute, name:'homePage', component: HomePage},
    {path: '/user-list', beforeEnter: guardMyRoute, name:'userList', component: UserList}
]