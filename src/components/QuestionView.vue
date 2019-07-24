<template>
  <div>

    <h3>{{questionIndex+1}}: {{questionList[questionIndex].question}}</h3>
    <br>
    <button v-if="questionIndex < questionList.length-1 " @click="(questionIndexUpdate(parseInt(questionIndex)+1))">Next Question</button>
    <button v-else>See Your Point!</button>
    <br><br>
    <question-selects></question-selects>

    

  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import QuestionSelects from "../components/QuestionSelects.vue"

export default {
  name: "QuestionView",
  components: { QuestionSelects },


  data() {
    return {};
  },

  computed: {
    ...mapState(["questionList", "questionIndex"]),

    
  },

  methods: {
      ...mapActions(["questionIndexUpdate"]),
  },

};
</script>

<style>
</style>
