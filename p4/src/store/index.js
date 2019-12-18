import Vue from 'vue'
import Vuex from 'vuex'

import * as app from './../../app.js';
import { _ } from 'core-js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        mixes: null,
        favorites: null
    },
    // Mutations are used to change state
    // Mutations can not be directly called; you commit them, e.g. store.commit('setProducts')
    // Mutations receive the state as the first argument
    // Mutations can receive a second argument, the payload
    // Mutations must be synchronous
    mutations: {
        setFavorites(state, payload) {
            state.favorites = payload;
        },
        setMixes(state, payload) {
            state.mixes = payload;
        },
        addFavoriteById(state, trackId) {
            let favorites = new app.Favorites();
            favorites.add(trackId);
            state.favorites.push({ id: trackId.toString() });
        },
        removeFavoriteById(state, trackId) {
            let favorites = new app.Favorites();
            favorites.remove(trackId);
            state.favorites = state.favorites.filter(function (val) {
                return val.id != trackId;
            });
        }
    },
    // Actions will not mutate state; instead they will commit mutations to mutate the state
    // Actions can contain arbitrary asynchronous operations
    // Actions receive a context object which exposes the same set of methods/properties on the store instance
    //     e.g. context.commit, context.state, context.getters
    // Actions are triggered with the store.dispatch method
    //     See App.vue for where this is dispatched ala this.$store.dispatch('setProducts');
    actions: {
        setMixes(context) {
            app.axios.get(app.config.api + '/mixes').then(response => {
                context.commit('setMixes', response.data);
            });
        }
    },
    // Getters are used when we want to to compute derived state based on store state
    // "computed properties for stores"
    // A getter's result is cached based on its dependencies, and will only re-evaluate when 
    // some of its dependencies have changed.
    // Getters will receive the state as their 1st argument
    getters: {
        getMixById: state => {
            return function (id) {
                _.find(state.mixes, { 'id': id });
            }
        },
        getFavorites: state => {
            let favMixes = [];

            if (state.favorites === null) {
                return [];
            }

            state.favorites.forEach(function (fave) {
                let mix = _.find(state.mixes, function (o) { return o.id == fave.id; });
                if (mix !== null && mix !== undefined) {
                    favMixes.push(mix);
                }
            });

            return favMixes;
        },
        hasFavorites: (state, getters) => {
            return getters.getFavorites.length;
        },
        isFavoriteById: state => favoriteId => {
            if (state.favorites !== null) {
                return _.findIndex(state.favorites, { id: favoriteId.toString() }) != -1;
            }
            else {
                return false;
            }
        }
    }
});
