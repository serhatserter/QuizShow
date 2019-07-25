<template>
  <div>
    <div v-if="this.countdown > 0  && this.questionIndex+1 < questionList.length + 1">
      <!--TITLE-->
      <h3><div v-html="(questionIndex+1)+ ': ' + questionList[questionIndex].question"></div> </h3>
      <br />
      <!--COUNTDOWN-->
      <h2 ><countdown></countdown></h2>
      <br>
      <!--CORRECT POINT-->
      <h2>Correct Point: {{correctcount * 10}}</h2>
      <br>
      <!--NEXT QUESTIONS BUTTON-->
      <div v-if="this.questionIndex+1 !== questionList.length">
        <button @click="(questionIndexUpdate(parseInt(questionIndex)+1))">Next Question</button>
      </div>
      <div v-else>
        <button @click="(questionIndexUpdate(parseInt(questionIndex)+1))">Finish</button>
      </div>
    </div>

    <!--LAST SCORE-->
    <h2 v-else-if="countdown === 0 || this.questionIndex+1 === questionList.length + 1 ">
      <!--Your Score: {{parseInt(countdown) + parseInt(correctcount) * 10}} -->
      Your Score: {{parseInt(correctcount) * 10}} 
      </h2>
    <br />

    <!--SELECTS-->
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
