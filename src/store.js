import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);



const state = {
  questionList: [],
  questionIndex: 0,
  correctcount: 0,
  selectedanswer: null,
  playername: "",
  countdown: 100,
  loadingStatus: false,
  point: 0
};

const getters = {};

const mutations = {
  SET_LOADING(state, loadingStatus){
    state.loadingStatus = loadingStatus;
  },

  SET_POINT(state, point){
    state.point = point;
  },

  SET_QUESTION_LIST(state, questionList) {
    state.questionList = questionList;
  },

  SET_QUESTION_INDEX(state, questionIndex) {
    state.questionIndex = questionIndex;
  },

  SET_CORRECT_COUNT(state, correctcount) {
    state.correctcount = correctcount;
  },

  SET_SELECTED_ANSWER(state, selectedanswer) {
    state.selectedanswer = selectedanswer;
  },
  SET_PLAYER_NAME(state, playername) {
    state.playername = playername;
  },
  SET_COUNTDOWN(state, countdown) {
    state.countdown = countdown;
  }
};

const actions = {
  async fetchQuestionList({ commit }) {
    await Vue.axios
      .get("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
      .then(response => {
        commit("SET_QUESTION_LIST", response.data.results);
      });
  },

  questionIndexUpdate({ commit }, questionList) {
    commit("SET_QUESTION_INDEX", questionList);
    commit("SET_SELECTED_ANSWER", null);
  },

  correctCountUpdate({ commit }, correctcount) {
    commit("SET_CORRECT_COUNT", correctcount);
  },

  countDownUpdate({ commit }, countdown) {
    commit("SET_COUNTDOWN", countdown);
  },

  async loadingUpdate({ commit }, loadingStatus) {
    await commit("SET_LOADING", loadingStatus);
  },


  selectedAnswerUpdate({ commit, state }, selectedanswer) {
    commit("SET_SELECTED_ANSWER", (state.questionList[state.questionIndex].correct_answer === selectedanswer));
    
    if((state.questionList[state.questionIndex].correct_answer === selectedanswer)){
      commit("SET_CORRECT_COUNT", (state.correctcount+1));
      commit("SET_POINT", state.point + (state.correctcount*10+state.countdown));

    }
  },

  playerNameUpdate({ commit }, playername) {
    commit("SET_PLAYER_NAME", playername);
  },
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
