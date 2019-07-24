import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

import Username from "./pages/Username.vue";
import Home from "./pages/Home.vue";
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "username",
      component: Username
    },
    {
      path: "/Play",
      name: "home",
      component: Home
    }
  ]
});
