<template>
  <div class="playElements" v-if="pageLoadStatus">  
      <h2>Good Luck {{playername}} !</h2>
      <br>    
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
    return {
      pageLoadStatus: false
    };
  },

  computed: {
    ...mapState(["questionList", "playername"]),
  },

  methods: {
    ...mapActions(["fetchQuestionList"])
  },

  async created() {
    await this.fetchQuestionList();
    this.pageLoadStatus = true;
  }
};
</script>

<style>

  .playElements{
    align-items: center;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center
  }
</style>
