<template>
  <div>
    
    <!--RADIO BUTTONS-->
    <div v-if="selectedanswer===null && countdown !== 0 && questionIndex + 1 < questionList.length + 1">
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

    <!--SELECT RESULT-->
    <div v-else-if="countdown > 0 && questionIndex+1 < questionList.length + 1 ">
      <h2 v-if="selectedanswer">CORRECT</h2>
      <div v-else>
        <h4 >WRONG</h4>
        <h4>Right Answer: {{this.questionList[this.questionIndex].correct_answer}}</h4>
      </div>
    </div>

    <!--RETRY-->
    <div v-if="(countdown === 0 || questionIndex+1 === questionList.length + 1) && !showScore ">
      <button @click="sendScore()"> Send Score </button>
      <br>

      </div>
    <br>
      <div v-if="showScore">
        <br>
      <label class="scoreRow" v-for="(scores, i) in scoreTable" :key="i">
        <h4>{{scores.name}} : {{scores.score}}</h4>
      </label>
      <br>
      <button onclick="window.location.href = './';">Retry</button>
      </div>
   
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import db from '@/firebase'

export default {
  name: "QuestionSelects",

  data() {
    return {
      answer: null,
      scoreTable: [],
      showScore: false
    };
  },

  computed: {
    ...mapState(["questionList", "questionIndex", "selectedanswer", "countdown", "playername", "correctcount"]),

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

      while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },

    setAnswer(){
      this.selectedAnswerUpdate(this.answer);
    },

    async sendScore(){
    var scorestring = (this.correctcount * 10) + "";
    const datas = {
      name: this.playername,
      score: scorestring
    }
      await db.collection('quizshow').add(datas);    
   
    db.collection("quizshow").orderBy("score", "desc").get().then((snapshot) =>{
      snapshot.docs.forEach(doc =>{
        this.scoreTable.push(doc.data());
        
      })
      this.showScore = true;
    })
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
.scoreRow{
  display: block;
}
</style>
