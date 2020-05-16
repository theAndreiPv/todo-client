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
    updateTask(state, { id, data }) {
      state.tasks[id] = data;
    },
  },
  actions: {
    async fetchTasks({ commit }) {
      const tasks = await firebase.getTasks();
      commit('setTasks', tasks);
    },
    async taskUpdate({ commit, getters }, { id, newData }) {
      const data = { ...getters.getTaskById(id), ...newData };
      await firebase.taskUpdate(id, data);
      commit('updateTask', { id, data });
    },
    async addTask({ dispatch }, { name }) {
      await firebase.addTask({ name });
      dispatch('fetchTasks');
    },
  },
  getters: {
    getTasks: (state) => Object.keys(state.tasks).map((key) => ({ ...state.tasks[key], id: key })),
    getTaskById: (state) => (id) => state.tasks[id] || {},
  },
};
