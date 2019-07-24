<template>
  <div>

    <div v-if="selectedanswer===null">

      <b-form-radio v-model="selectedRadio" type="radio" name="select" value="false" >
        {{questionList[questionIndex].incorrect_answers[0]}} </b-form-radio>

      <br />

      <b-form-radio v-model="selectedRadio" type="radio" name="select" value="false" >
        {{questionList[questionIndex].incorrect_answers[1]}} </b-form-radio>

      <br />

      <b-form-radio v-model="selectedRadio" type="radio" name="select" value="false" >
        {{questionList[questionIndex].incorrect_answers[2]}} </b-form-radio>

      <br />

      <b-form-radio v-model="selectedRadio" type="radio" name="select" value="true" >
        {{questionList[questionIndex].correct_answer}} </b-form-radio>

      <br />
    </div>
    <div v-else>
      <h4 v-if="selectedanswer==='true'" >CORRECT</h4>
      <h4 v-else>WRONG</h4>
    </div>
    <br>

    
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "QuestionSelects",

  data() {
    return {};
  },

  computed: {
    ...mapState(["questionList", "questionIndex", "selectedanswer"]),

    selectedRadio: {
      get() {
        return this.selectedanswer;
      },
      set(value) {
        this.selectedAnswerUpdate(value);
      }
    }
  },

  methods: {
    ...mapActions(["selectedAnswerUpdate"])
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
