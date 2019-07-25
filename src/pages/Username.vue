<template>
  <div>
    <input name="inputname" v-model="usernameInput" v-validate="'required|min:5'" @keyup.enter="clickButton()"/>
    <span>{{ errors.first('inputname') }}</span>
    <h1>Name: {{playername}}</h1>
    <br>
    <b-button @click="clickButton()">Play</b-button>
    
    
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Home from "./Home.vue"

import db from '@/firebase'

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
      
      async clickButton(){

          const validationResponse = await this.$validator.validateAll();

          console.log(validationResponse);

          if(!validationResponse){
            return false;
          }

          this.playerNameUpdate(this.usernameInput);

          this.$router.push({ name: 'home' });
      }
  },

  created(){
    /*
    const x = {
      name: 'deneme',
      score: '100'
    }
    db.collection('quizshow').add(x).then(() =>{
      console.log('eklendi');
    })
    */
    db.collection('quizshow').get().then((snapshot) =>{
      snapshot.docs.forEach(doc =>{
        console.log(doc.data());
      })
    })
  }


};
</script>

<style>
</style>
