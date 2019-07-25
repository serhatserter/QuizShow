<template>
  <div>{{ this.countdown }}</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {

    };
  },

computed: {
    ...mapState(["questionList", "questionIndex", "countdown"])
  },

  methods: {
    ...mapActions(["countDownUpdate"]),

    countDownTimer() {
      if (this.countdown !== 0  && this.questionIndex < this.questionList.length-1) {
        setTimeout(() => { this.countDownUpdate(parseInt(this.countdown-1)); this.countDownTimer(); }, 1000);
      }
    },

  },

created() {
     this.countDownTimer();
  }
};
</script>