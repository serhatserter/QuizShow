<template>
  <div class="playElements" v-if="!loadingStatus">  
      <h2 >Good Luck {{playername}} !</h2>  
      <question-block></question-block>
    <router-view />
  </div>
  <div class="playElements" v-else>
    <loading></loading>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import QuestionBlock from "../components/QuestionBlock.vue"
import Loading from "../components/Loading.vue"

export default {
  name: "Play",
  components: { QuestionBlock, Loading },


  data() {
    return {

    };
  },

  computed: {
    ...mapState(["questionList", "playername", "loadingStatus"]),
  },

  methods: {
    ...mapActions(["fetchQuestionList", "countDownUpdate", "questionIndexUpdate", "loadingUpdate", "correctCountUpdate"])
  },

  async created() {
    this.loadingUpdate(true);
    
    await this.fetchQuestionList();
    this.countDownUpdate(parseInt(100));
    this.questionIndexUpdate(parseInt(0));
    this.correctCountUpdate(parseInt(0));
    this.loadingUpdate(false);
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
    text-align: center;
    padding: 30px;
  }

</style>
