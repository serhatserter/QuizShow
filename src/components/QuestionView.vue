<template>
  <div>
    <h3>
      <div v-html="(questionIndex+1)+ ': ' + questionList[questionIndex].question"></div>
    </h3>
    <br />

    <div>
      <h2><countdown></countdown></h2>
      <br>
      <h2 v-if="countdown > 0">Correct Point: {{correctcount * 10}}</h2>
    </div>
    <br />

    <button
      v-if="questionIndex < questionList.length-1 && countdown > 0 "
      @click="(questionIndexUpdate(parseInt(questionIndex)+1))"
    >Next Question</button>
    <h2 v-else>Your Score: {{parseInt(countdown) + parseInt(correctcount) * 10}} </h2>
    <br />
    <br />

    <question-selects></question-selects>
    <br>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import QuestionSelects from "../components/QuestionSelects.vue";
import Countdown from "../components/Countdown.vue";

export default {
  name: "QuestionView",
  components: { QuestionSelects, Countdown },

  data() {
    return {};
  },

  computed: {
    ...mapState(["questionList", "questionIndex", "correctcount", "countdown"])
  },

  methods: {
    ...mapActions(["questionIndexUpdate", "correctCountUpdate"]),
    
  }
};
</script>

<style>
</style>
