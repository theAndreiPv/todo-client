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
  },
  getters: {
    getTasks: (state) => Object.keys(state.tasks).map((key) => ({ ...state.tasks[key], id: key })),
    getTaskById: (state) => (id) => state.tasks[id] || {},
  },
};
