import api from '@/firebase';

export default {
  mutations: {
    setInfo(err) {
      console.log(err);
    },
  },
  actions: {
    async registration({ commit }, data) {
      try {
        await api.registration(data);
      } catch (err) {
        commit('setInfo', err);
      }
    },
  },
};
