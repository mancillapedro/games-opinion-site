import Vue from 'vue'
import Vuex from 'vuex'

const games = require('./games.json')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games: games
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
})
