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
      const i = state.tasks.findIndex((el) => el.id === id);
      state.tasks.splice(i, 1);
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
  },
  getters: {
    tasksAll: (state) => state.tasks.sort((el) => (el.completed ? 1 : -1)),
    countTasksAll: (state) => state.tasks.length,
    countTasksActive: (state) => state.tasks.filter((el) => !el.completed).length,
    task: (state) => (id) => state.tasks.find((el) => el.id === id),
    taskTitle: (state, getters) => (id) => getters.task(id).name,
    taskDescription: (state, getters) => (id) => getters.task(id).description,
    taskCompleted: (state, getters) => (id) => getters.task(id).completed,
  },
};
