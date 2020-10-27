import Login from './components/Login.vue'
import Registration from './components/Registration.vue'
import HomePage from "./components/HomePage";

export default [
    {path: '/', component: Login},
    {path: '/registration', component: Registration},
    {path: '/dashboard', component: HomePage}

]