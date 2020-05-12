import firebase from '@/firebase';

export default {
  actions: {
    async registration({ commit }, data) {
      try {
        await firebase.registration(data);
      } catch (err) {
        commit('setError', err);
        throw err;
      }
    },
    async logout() {
      await firebase.logout();
    },
  },
};
