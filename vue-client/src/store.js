import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: '/api/',
    themes: [],
    theme: []
  },
  getters: {
    GET_THEMES (state) {
      return state.themes
    },
    GET_THEME (state) {
      return state.theme
    }
  },
  mutations: {
    FETCH_THEMES (state, themes) {
      state.themes = themes
    },
    GET_THEME (state, theme) {
      state.theme = theme
    }
  },
  actions: {
    FETCH_THEMES ({ commit, state }) {
      axios.get(state.apiUrl + 'home')
        .then(res => commit('FETCH_THEMES', res.data))
        .catch(err => console.log(err))
    },
    GET_THEME ({ commit, state }, id) {
      axios.get(state.apiUrl + 'theme/' + id)
        .then(themes => commit('GET_THEME', themes.data))
        .catch(err => console.log(err))
    }
  }
})
