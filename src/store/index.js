import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games: [],
    opinions: [/* { game: String, name: String, opinion: String }, */]
  },
  getters: {
  },
  mutations: {
    GET_GAMES(state, json) { state.games = json },
    INITIALIZE_STORE(state) {
      if (localStorage.getItem('opinions')) {
        try { state.opinions = JSON.parse(localStorage.getItem('opinions')) }
        catch (e) { localStorage.removeItem('opinions') }
      }
    },
    ADD_OPINION({ opinions }, opinion) { opinions.unshift(opinion) },
    REMOVE_OPINION({ opinions }, index) { opinions.splice(index, 1) },
    UPDATE_OPINION({ opinions }, { index, opinion }) { opinions.splice(index, 1, opinion) },
  },
  actions: {
    async getGames({ commit }) {
      const mapGame = ({ id, name, rating, released, updated, background_image }) => ({ id, name, rating, released, updated, background_image })
      try {
        const response = await fetch('https://api.rawg.io/api/games?key=5ac5b5aaba034ae19e0d447a00b4203c')
        const games = (await response.json()).results.map(game => mapGame(game))
        commit('GET_GAMES', games)
      } catch (error) {
        alert(error)
      }
    },
    initializeStore({ commit }) { commit('INITIALIZE_STORE') },
    addOpinion({ commit }, opinion) { commit('ADD_OPINION', opinion) },
    removeOpinion({ commit }, index) { commit('REMOVE_OPINION', index) },
    updateOpinion({ commit }, params) { commit('UPDATE_OPINION', params) }
  },
})
