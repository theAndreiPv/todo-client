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
    taskUpdate(state, { id, newData }) {
      const i = state.tasks.findIndex((el) => el.id === id);
      state.tasks[i] = Object.assign(state.tasks[i], newData);
    },
    addTask(state, data) {
      state.tasks.push(data);
    },
    removeTask(state, id) {
      const i = state.tasks.findIndex((el) => el.id === id);
      state.tasks.splice(i, 1);
    },
  },
  actions: {
    async fetchTasks({ commit }) {
      const tasks = await firebase.getTasks();
      commit('setTasks', tasks);
    },
    async taskSaveUpdate(ctx, { id, newData }) {
      await firebase.taskUpdate(id, newData);
    },
    async addTask({ commit }, data) {
      const { key } = await firebase.addTask(data);
      commit('addTask', { id: key, ...data });
    },
    async removeTask({ commit }, id) {
      await firebase.removeTask(id);
      commit('removeTask', id);
    },
  },
  getters: {
    getTasks: (state) => state.tasks.sort((el) => (el.completed ? 1 : -1)),
    getTaskById: (state) => (id) => state.tasks.find((el) => el.id === id),
    getTasksLength: (state) => state.tasks.length,
    getTasksLengthActive: (state) => state.tasks.filter((el) => !el.completed).length,
  },
};
