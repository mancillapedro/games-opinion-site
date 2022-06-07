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
  },
  actions: {
  },
})
