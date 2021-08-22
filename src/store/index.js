import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sum: 0,
    lastTeam: '',
  },
  mutations: {
    addSumMutation(state) {
      state.sum++;
    },
    setTeamNameMutation(state, name) {
      state.lastTeam = name;
    }
  }
})
