<template>
  <div>
    <input v-model="usernameInput" @keyup.enter="playerNameUpdate(usernameInput)"/>
    <b-button  @click="playerNameUpdate(usernameInput)">Okay</b-button>
    <h1>Name: {{playername}}</h1>
    <br>
    <b-button :to="`/Play`">Play</b-button>
    
    
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Home from "./Home.vue"

export default {
  name: "Name",
  components: { Home },


  data() {
    return {};
  },

  computed: {
      ...mapState(["playername"]),


    usernameInput: {
      get() {
        return this.playername;
      },
      set(value) {
        this.playerNameUpdate(value);
      }
    }
  },

  methods: {
      ...mapActions(["playerNameUpdate"]),

  },


};
</script>

<style>
</style>
