import Vue from 'vue';
import Vuex from 'vuex';
import layout from './layout';
import auth from './auth';
import info from './info';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    layout, auth, info,
  },
});
