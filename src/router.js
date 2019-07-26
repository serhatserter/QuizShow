import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Home from "./pages/Home.vue";
import Play from "./pages/Play.vue";
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Play",
      name: "play",
      component: Play
    }
  ]
});
