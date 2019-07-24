<template>
  <div v-if="pageLoadStatus">  
      <h1>Good Luck {{playername}} !</h1>    
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
</style>
