import Login from './components/Login.vue'
import Registration from './components/Registration.vue'
import Dashboard from "./components/Dashboard";
import UserList from "./components/UserList";

export default [
    {path: '/login', component: Login, name: 'login'},
    {path: '/register', component: Registration},
    {path: '/dashboard', component: Dashboard, name: 'user-dashboard'},
    {path: '/user-list', component: UserList},
    {path: '*', redirect: '/login'}

]