<template lang="pug">
div
  VTask(
    v-for='task in tasks'
    :key='task.id'
    :to='task.to'
    :active='task.active'
    :completed.sync='task.completed'
    :title.sync='task.name'
    @update:completed='updateCompleted(task.id, $event)'
    @update:title='updateTitle(task.id, $event)'
    @click.native.stop='showMobileSidebar')
</template>

<script>
import VTask from '@/components/VTask.vue';
import { debounce } from 'debounce';

export default {
  name: 'TheTaskList',
  components: {
    VTask,
  },
  computed: {
    tasks() {
      return this.$store.getters.getTasks.map((task) => ({
        id: task.id,
        name: task.name,
        completed: task.completed,
        active: this.$route.query.task === task.id,
        to: { query: { task: task.id } },
      }));
    },
  },
  methods: {
    async updateCompleted(id, completed) {
      await this.$store.dispatch('taskSaveUpdate', {
        id, newData: { completed },
      });
    },
    async updateTitle(id, name) {
      await this.$store.dispatch('taskSaveUpdate', {
        id, newData: { name },
      });
    },
    showMobileSidebar() {
      this.$store.commit('showMobileSidebar');
    },
  },
  created() {
    this.updateTitle = debounce(this.updateTaskTitle, 200);
  },
};
</script>
