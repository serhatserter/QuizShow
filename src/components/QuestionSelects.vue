<template>
  <div>



    <div v-if="selectedanswer===null && countdown !== 0 && questionIndex < 9">

      <b-form-radio v-model="answer" type="radio" name="select" :value="answers[0]"  @input="setAnswer">
        {{answers[0]}} </b-form-radio>
      <br />
      <b-form-radio v-model="answer" type="radio" name="select" :value="answers[1]" @input="setAnswer">
        {{answers[1]}} </b-form-radio>
      <br />
      <b-form-radio v-model="answer" type="radio" name="select" :value="answers[2]" @input="setAnswer">
        {{answers[2]}} </b-form-radio>
      <br />
      <b-form-radio v-model="answer" type="radio" name="select" :value="answers[3]" @input="setAnswer">
        {{answers[3]}} </b-form-radio>

      <br />
    </div>
    <div v-else-if="countdown < 0 || questionIndex > 9 ">
      <h2 v-if="selectedanswer"  >CORRECT</h2>
      <div v-else>
        <h4 >WRONG</h4>
        <h4>Right Answer: {{this.questionList[this.questionIndex].correct_answer}}</h4>
      </div>
    </div>
    <div v-else>RETRY</div>
    <br>


    
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "QuestionSelects",

  data() {
    return {
      answer: null
    };
  },

  computed: {
    ...mapState(["questionList", "questionIndex", "selectedanswer", "countdown"]),

    answers(){

      let answers = this.questionList[this.questionIndex].incorrect_answers;
      answers.push(this.questionList[this.questionIndex].correct_answer);
      return this.shuffle(answers);

    }

  },

  methods: {
    
    ...mapActions(["selectedAnswerUpdate"]),

    shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },

    setAnswer(){
      this.selectedAnswerUpdate(this.answer);
    }

  }
};
</script>

<style>
b-form-radio{
  padding: 5px;
  margin: 5px;
  background-color: gray;

}
</style>
