<template>
  <div>
    <router-link :to="`/Play`">PLAY!</router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Home from "./Home.vue"

export default {
  name: "Username",
  components: { Home },


  data() {
    return {};
  },

  computed: {

  },

  methods: {

  },


};
</script>

<style>
</style>
