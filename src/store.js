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
  playername: ""
};

const getters = {


};

const mutations = {
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
  }
};

const actions = {
  fetchQuestionList({ commit }) {
    Vue.axios
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

  selectedAnswerUpdate({ commit }, selectedanswer) {
    commit("SET_SELECTED_ANSWER", selectedanswer);
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
