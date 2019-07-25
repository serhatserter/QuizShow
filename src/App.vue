<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Home from "./pages/Home.vue"
import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VeeValidate from 'vee-validate';
import underscore from 'vue-underscore';
Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.use(underscore);

export default {
  name: 'app',
  components: { Home },
  
}

</script>

<style>
body{
 margin: 10px;
}
</style>
