import Vue from 'vue'
import Vuex from 'vuex'
export const state = () => ({
  sidebar: false
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}

Vue.use(Vuex)

// Polyfill for window.fetch()
require('whatwg-fetch')

const store = () => new Vuex.Store({

  state: {
    authUser: null
  },

  mutations: {
    SET_USER: function (state, user) {
      state.authUser = user
    }
  },

  actions: {
    nuxtServerInit ({ commit }, { req }) {
      if (req.session && req.session.authUser) {
        commit('SET_USER', req.session.authUser)
      }
    },
    login ({ commit }, { username, password }) {
      return fetch('/api/login', {
        // Send the client cookies to the server
        credentials: 'same-origin',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      })
        .then((res) => {
          if (res.status === 401) {
            throw new Error('Bad credentials')
          } else {
            // eslint-disable-next-line
            // debugger;
            return res.body
          }
        })
        .then((authUser) => {
          commit('SET_USER', authUser)
        })
    },
    logout ({ commit }) {
      return fetch('/api/logout', {
        // Send the client cookies to the server
        credentials: 'same-origin',
        method: 'POST'
      })
        .then(() => {
          commit('SET_USER', null)
        })
      // eslint-disable-next-line
    } 
  }
})

export default store
