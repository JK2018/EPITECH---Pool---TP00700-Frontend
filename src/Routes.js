import Login from "./components/Login.vue";
import Registration from "./components/Registration.vue";
import Dashboard from "@/components/Dashboard/Dashboard";
import UserList from "@/components/UserList";
import HomePage from "@/components/HomePage";
import Profil from "./components/Profil";

function guardMyRoute(to, from, next) {
  let isAuth = false;
  isAuth = localStorage.getItem("token") !== null;
  isAuth ? next() : next("/login");
}

export default [
  { path: "/login", name: "login", component: Login },
  { path: "/register", name: "register", component: Registration },
  {
    path: "/app",
    beforeEnter: guardMyRoute,
    component: HomePage,
    children: [
      { path: "dashboard", name: "dashboard", component: Dashboard },
      { path: "user-list", name: "userList", component: UserList },
      { path: "profil", name: "profil", component: Profil },
    ],
  },
  { path: "*", redirect: "/app/dashboard" },
];
