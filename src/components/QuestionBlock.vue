<template>
  <div class="questionElements">
    <div
      v-if="
        this.countdown > 0 && this.questionIndex + 1 < questionList.length + 1
      "
    >
      <!--COUNTDOWN-->
      <h3><countdown></countdown></h3>
      <!--CORRECT POINT-->
      <h4>Correct Count: {{ correctcount }}</h4>
      <h4>Point: {{ point }}</h4>
      <br />
      <!--TITLE-->
      <h4 class="questions">
        <div
          v-html="
            questionIndex + 1 + ': ' + questionList[questionIndex].question
          "
        ></div>
      </h4>
      <!--NEXT QUESTIONS BUTTON-->
      <br />
      <div v-if="this.questionIndex + 1 !== questionList.length">
        <b-button
          variant="info"
          @click="questionIndexUpdate(parseInt(questionIndex) + 1)"
          >Next Question</b-button
        >
      </div>
      <div v-else>
        <b-button
          variant="info"
          @click="questionIndexUpdate(parseInt(questionIndex) + 1)"
          >Finish</b-button
        >
      </div>
    </div>

    <!--LAST SCORE-->
    <h2
      v-else-if="
        countdown === 0 || this.questionIndex + 1 === questionList.length + 1
      "
    >
      Your Score: {{ point + countdown }}
    </h2>
    <!--ANSWERS-->
    <answer-block></answer-block>
    <br />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AnswerBlock from "../components/AnswerBlock.vue";
import Countdown from "../components/Countdown.vue";

export default {
  name: "QuestionBlock",
  components: { AnswerBlock, Countdown },

  data() {
    return {};
  },

  computed: {
    ...mapState([
      "questionList",
      "questionIndex",
      "correctcount",
      "countdown",
      "point"
    ])
  },

  methods: {
    ...mapActions(["questionIndexUpdate", "correctCountUpdate"])
  }
};
</script>

<style>
.questions {
  border-radius: 10px;
  background-color: whitesmoke;
  border-color: lightgray;
  color: black;
  padding: 30px;
}

</style>
