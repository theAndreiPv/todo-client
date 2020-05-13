import firebase from '@/firebase';

export default {
  actions: {
    async registration(ctx, data) {
      await firebase.registration(data);
    },
    async login(ctx, data) {
      await firebase.login(data);
    },
    async logout({ commit }) {
      await firebase.logout();
      commit('clearInfo');
    },
  },
};