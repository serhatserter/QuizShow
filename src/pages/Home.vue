<template>
  <div id="app">      
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
    ...mapState(["questionList"]),
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
