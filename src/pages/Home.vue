<template>
  <div id="app">  
      <h1>Good Luck {{playername}} !</h1>    
      <question-view></question-view>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import QuestionView from "../components/QuestionView.vue"

export default {
  name: "Home",
  components: { QuestionView },


  data() {
    return {};
  },

  computed: {
    ...mapState(["questionList", "playername"]),
  },

  methods: {
    ...mapActions(["fetchQuestionList"])
  },

  created() {
    
    this.fetchQuestionList();
  }
};
</script>

<style>
</style>
