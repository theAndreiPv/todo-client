import firebase from '@/firebase';

export default {
  state: {
    tasks: {},
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    clearTasks(state) {
      state.tasks = {};
    },
  },
  actions: {
    async fetchTasks({ commit }) {
      const tasks = await firebase.getTasks();
      commit('setTasks', tasks);
    },
    // async createTasks({ dispatch, commit }, record) {
    // },
    // async fetchTaskById({ dispatch, commit }, id) {
    // },
  },
  getters: {
    getTasks: (state) => state.tasks,
  },
};
