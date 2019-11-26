import Vue from "vue";
import Vuex from "vuex";

import * as app from "./../app.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favoriteCount: 0,
    favorites: [],
  },
  // Mutations are used to change state
  // Mutations can not be directly called; you commit them, e.g. store.commit('setFavorites')
  // Mutations receive the state as the first argument
  // Mutations can receive a second argument, the payload
  // Mutations must be synchronous
  mutations: {
    setFavoriteCount(state, payload) {
      state.favoriteCount = payload;
    },
    updateFavoriteCount(state, payload) {
      state.favoriteCount += payload;
    },
    setFavorites(state, payload) {
      state.favorites = payload;
    }
  },
  // Actions will not mutate state; instead they will commit mutations to mutate the state
  // Actions can contain arbitrary asynchronous operations
  // Actions receive a context object which exposes the same set of methods/properties on the store instance
  //     e.g. context.commit, context.state, context.getters
  // Actions are triggered with the store.dispatch method
  //     See App.vue for where this is dispatched ala this.$store.dispatch('setFavorites');
  actions: {
    setFavorites(context) {
      app.axios.get(app.config.api + 'db.json').then(response => {
        // https://stackoverflow.com/questions/39156533/firebase-database-returns-null-at-beginning-of-each-new-node
        context.commit('setFavorites', response.data.splice(1))
      });
    }
  },
  getters: {
    // https://vuex.vuejs.org/guide/getters.html#method-style-access
    getFavoriteById(state) {
      return function (id) {
        return state.favorites.find(product => favorites.id == id);
      }
    }
  }
});
