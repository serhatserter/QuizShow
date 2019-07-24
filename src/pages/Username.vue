<template>
  <div>
    <input name="inputname" v-model="usernameInput" v-validate="'min:5'" @keyup.enter="clickButton()"/>
    <span>{{ errors.first('inputname') }}</span>
    <h1>Name: {{playername}}</h1>
    <br>
    <b-button @click="clickButton()">Play</b-button>
    
    
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
      
      clickButton(){
          this.playerNameUpdate(this.usernameInput);

          this.$router.push({ name: 'home' });
      }
  },


};
</script>

<style>
</style>
