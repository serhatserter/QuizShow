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

Vue.use(BootstrapVue);
Vue.use(VeeValidate, { fieldsBagName: 'veeFields',  inject: true });

export default {
  name: 'app',
  components: { Home },
  
}

</script>

<style>
  body{
      font-family: 'Times New Roman', Times, serif;
      background-color: rgb(37, 37, 37);
      color: whitesmoke;
  }
</style>
