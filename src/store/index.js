import Vue from 'vue'
import Vuex from 'vuex'

const games = require('./games.json')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games: games,
    opinions: [
      { game: 'elgtaX', name: 'pedro', opinion: 'weno el juego' },
      { game: 'portal', name: 'elpablo', opinion: 'no se no lo e juago' }
    ]
  },
  getters: {
  },
  mutations: {
    ADD_OPINION({ opinions }, opinion) { opinions.unshift(opinion) },
    REMOVE_OPINION({ opinions }, index) { opinions.splice(index, 1) },
    UPDATE_OPINION({ opinions }, {index, opinion}) { opinions.splice(index, 1, opinion) },
  },
  actions: {
    addOpinion({commit}, opinion ){ commit('ADD_OPINION', opinion)},
    removeOpinion({commit}, index ){ commit('REMOVE_OPINION', index)},
    updateOpinion({commit}, params ){ commit('UPDATE_OPINION', params)}
  },
})
