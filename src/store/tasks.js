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
    addTask(state, data) {
      state.tasks.push(data);
    },
    removeTask(state, id) {
      state.tasks.splice(state.tasks.findIndex((el) => el.id === id), 1);
    },
    updateTitle(state, { id, val }) {
      state.tasks.find((el) => el.id === id).name = val;
    },
    updateDescription(state, { id, val }) {
      state.tasks.find((el) => el.id === id).description = val;
    },
    toggleCompleted(state, id) {
      const task = state.tasks.find((el) => el.id === id);
      task.completed = !task.completed;
    },
  },
  actions: {
    async fetchTasks({ commit }) {
      const tasks = await firebase.getTasks();
      commit('setTasks', tasks);
    },
    async addTask({ commit }, data) {
      const { key } = await firebase.addTask(data);
      commit('addTask', { id: key, ...data });
    },
    async removeTask({ commit }, id) {
      await firebase.removeTask(id);
      commit('removeTask', id);
    },
    async syncTitle({ getters }, id) {
      await firebase.taskUpdate(id, { name: getters.taskTitle(id) });
    },
    async syncDescription({ getters }, id) {
      await firebase.taskUpdate(id, { description: getters.taskDescription(id) });
    },
    async syncCompleted({ getters }, id) {
      await firebase.taskUpdate(id, { completed: getters.taskCompleted(id) });
    },
  },
  getters: {
    tasksAll: (state) => state.tasks.sort((el) => (el.completed ? 1 : -1)),
    countTasksAll: (state) => state.tasks.length,
    countTasksActive: (state) => state.tasks.filter((el) => !el.completed).length,
    taskInfo: (state) => (id) => state.tasks.find((el) => el.id === id),
    taskTitle: (state, getters) => (id) => getters.taskInfo(id).name,
    taskDescription: (state, getters) => (id) => getters.taskInfo(id).description,
    taskCompleted: (state, getters) => (id) => getters.taskInfo(id).completed,
  },
};
