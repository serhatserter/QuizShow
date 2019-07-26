<template>
  <div>
    <h2 class="countDown">{{ this.countdown }}</h2>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },

  computed: {
    ...mapState(["questionList", "questionIndex", "countdown"])
  },

  methods: {
    ...mapActions(["countDownUpdate"]),

    countDownTimer() {
      if (
        this.countdown !== 0 &&
        this.questionIndex < this.questionList.length &&
        window.location.pathname === "/Play"
      ) {
        setTimeout(() => {
          this.countDownUpdate(parseInt(this.countdown - 1));
          this.countDownTimer();
        }, 1000);
      }
    }
  },

  created() {
    this.countDownTimer();
  }
};
</script>
<style>
.countDown {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  background-color: darkred;
  color: whitesmoke;
  border-style: solid;
  border-radius: 50%;
  width: 90px;
  text-align: center;
}
</style>
