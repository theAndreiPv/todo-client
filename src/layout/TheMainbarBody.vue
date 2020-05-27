<template lang="pug">
VScrollContainer(v-if='countTasksAll' class='flex-grow')
  div(class='px-4')
    VTask(
      v-for='task in tasksAll'
      :key='task.id'
      :to='{ query: { task: task.id } }'
      :active='$route.query.task === task.id'
      :completed.sync='task.completed'
      :title.sync='task.name'
      @update:completed=''
      @update:title=''
      @click.native.stop='showMobileSidebar')
div(v-else class='flex items-center justify-center flex-grow px-6 pb-16')
  VInfoBox(icon='loupe' title='Список задач пуст' text='Чтобы добавить новую задачу, нажмите на поле ввода')
</template>

<script>
import VInfoBox from '@/components/VInfoBox.vue';
import VTask from '@/components/VTask.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'TheMainbarBody',
  components: {
    VInfoBox, VTask,
  },
  computed: mapGetters([
    'tasksAll',
    'countTasksAll',
  ]),
  methods: {
    showMobileSidebar() {
      this.$store.commit('showMobileSidebar');
    },
  },
};
</script>
