import firebase from '@/firebase';

export default {
  state: {
    tasks: [],
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    clearTasks(state) {
      state.tasks = [];
    },
  },
  actions: {
    async fetchTasks({ commit }) {
      const tasks = await firebase.getTasks();
      commit('setTasks', Object.keys(tasks).map((key) => ({ ...tasks[key], id: key })));
    },
    async taskUpdate({ dispatch, getters }, { id, newData }) {
      const data = { ...getters.getTaskById(id), ...newData };
      await firebase.taskUpdate(id, data);
      dispatch('fetchTasks');
    },
    async addTask({ dispatch }, { name }) {
      await firebase.addTask({ name });
      dispatch('fetchTasks');
    },
    async removeTask({ dispatch }, id) {
      await firebase.removeTask(id);
      dispatch('fetchTasks');
    },
  },
  getters: {
    getTasks: (state) => state.tasks.sort((a) => (a.completed ? 1 : -1)),
    getTaskById: (state) => (id) => state.tasks.find((a) => a.id === id) || {},
    getTasksLength: (state) => state.tasks.length,
  },
};
