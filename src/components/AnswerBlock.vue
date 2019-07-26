<template>
  <div class="playElements" v-if="!loadingStatus">
    <!--RADIO BUTTONS-->
    <div
      v-if="selectedanswer===null && countdown !== 0 && questionIndex + 1 < questionList.length + 1"
    >
      <b-form-radio
        v-model="answer"
        type="radio"
        name="select"
        :value="answers[0]"
        @input="setAnswer"
        button
        button-variant="light"
      >
        <div class="selectRow" v-html="answers[0]"></div>
      </b-form-radio>
      <br />
      <b-form-radio
        v-model="answer"
        type="radio"
        name="select"
        :value="answers[1]"
        @input="setAnswer"
        button
        button-variant="light"
      >
        <div class="selectRow" v-html="answers[1]"></div>
      </b-form-radio>
      <br />
      <b-form-radio
        v-model="answer"
        type="radio"
        name="select"
        :value="answers[2]"
        @input="setAnswer"
        button
        button-variant="light"
      >
        <div class="selectRow" v-html="answers[2]"></div>
      </b-form-radio>
      <br />
      <b-form-radio
        v-model="answer"
        type="radio"
        name="select"
        :value="answers[3]"
        @input="setAnswer"
        button
        button-variant="light"
      >
        <div class="selectRow" v-html="answers[3]"></div>
      </b-form-radio>
      <br />
    </div>

    <!--SELECT RESULT-->
    <div v-else-if="countdown > 0 && questionIndex+1 < questionList.length + 1 ">
      <h2 v-if="selectedanswer">CORRECT</h2>
      <div v-else>
        <h4>WRONG</h4>
        <h4>
          <div v-html="'Right Answer: ' + this.questionList[this.questionIndex].correct_answer"></div>
        </h4>
      </div>
    </div>

    <!--RETRY-->
    <div v-if="(countdown === 0 || questionIndex+1 === questionList.length + 1) && !showScore ">
      <b-button variant="info" @click="sendScore()">Send Score</b-button>
      <br />
      <br />
      <b-button :to="`/`">RETRY</b-button>
      <br />
    </div>
    <div v-if="showScore">
      <b-button :to="`/`">RETRY</b-button>
      <br />
      <br />
      <div class= "table">
      <b-table striped hover :items="scoreTable"></b-table>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import db from "@/firebase";
import Loading from "../components/Loading.vue";

export default {
  name: "AnswerBlock",
  components: { Loading },

  data() {
    return {
      answer: null,
      scoreTable: [],
      showScore: false
    };
  },

  computed: {
    ...mapState([
      "questionList",
      "questionIndex",
      "selectedanswer",
      "countdown",
      "playername",
      "correctcount",
      "loadingStatus",
      "point"
    ]),

    answers() {
      let answers = this.questionList[this.questionIndex].incorrect_answers;
      answers.push(this.questionList[this.questionIndex].correct_answer);
      return this.shuffle(answers);
    }
  },

  methods: {
    ...mapActions(["selectedAnswerUpdate", "loadingUpdate"]),

    shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },

    setAnswer() {
      this.selectedAnswerUpdate(this.answer);
    },

    async sendScore() {
      var scorestring = this.point ;

      const datas = {
        name: this.playername,
        score: scorestring
      };

      db.collection("quizshow").add(datas);
      db.collection("quizshow")
        .orderBy("score", "desc")
        .get()
        .then(snapshot => {
          snapshot.docs.forEach(doc => {
            this.scoreTable.push(doc.data());
          });
          this.showScore = true;
        });
    }
  }
};
</script>

<style>

.scoreRow {
  display: block;
}
.selectRow {
  cursor: pointer;
  width: 400px;
  height: 15px;
  margin-bottom: 5px;
}
.table{
  background-color: white;
  padding:10px;
  border-radius: 10px;
}
</style>
