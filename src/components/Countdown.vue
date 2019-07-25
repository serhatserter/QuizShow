<template>
  <div class="playElements" >
     
     <h2 class="countDown"> {{ this.countdown }}</h2>
    
</div>
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
      if (this.countdown !== 0  && this.questionIndex < this.questionList.length) {
        setTimeout(() => { this.countDownUpdate(parseInt(this.countdown-1)); this.countDownTimer(); }, 1000);
      }
    },

  },

created() {
     this.countDownTimer();
  }
};
</script>
<style>
    .countDown{
        display: block;
        align-items: center;
        justify-content: center;
        padding: 30px;
        background-color: darkslategrey;
        color: whitesmoke;
        border-style: solid;
        border-radius: 50%;
        width: 110px;
        text-align: center;
    }
</style>