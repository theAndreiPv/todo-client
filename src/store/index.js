import Vue from 'vue';
import Vuex from 'vuex';
import layout from './layout';
import auth from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
  },
  actions: {
  },
  getters: {
    error: (state) => state.error,
  },
  modules: {
    layout, auth,
  },
});
