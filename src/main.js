import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Routes from "./Routes";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: "history",
});
new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
