<template lang="pug">
VScrollContainer(v-if='countTasksAll' class='flex-grow')
  div(class='px-4')
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
div(v-else class='flex items-center justify-center flex-grow px-6 pb-16')
  VInfoBox(icon='loupe' title='Список задач пуст' text='Чтобы добавить новую задачу, нажмите на поле ввода')
</template>

<script>
import VInfoBox from '@/components/VInfoBox.vue';
import VTask from '@/components/VTask.vue';
import { debounce } from 'debounce';

export default {
  name: 'TheMainbarBody',
  components: {
    VInfoBox, VTask,
  },
  computed: {
    countTasksAll() {
      return this.$store.getters.getTasksLength;
    },
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
