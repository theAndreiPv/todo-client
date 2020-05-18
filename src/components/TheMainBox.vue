<template lang="pug">
main(class='flex flex-col flex-grow')
  header(class='mb-5 px-7')
    div(class='flex items-center h-18')
      button(class='hidden p-4 -ml-4 lg:block openButton' @click.stop='$store.commit("toggleDisplayMobileNavbar")')
        BaseSvg(name='bars' class='w-4 h-4 text-black-30')
      h1(class='text-9') Все
    input(
      class='block w-full h-10 px-3 border border-transparent rounded placeholder-black-30 bg-theme-8 focus:border-accent'
      placeholder='Добавьте задачу, нажмите Enter для сохранения.'
      spellcheck='false'
      v-model='taskNameInput'
      @keyup.enter='addTask')
  ContainerScroll(v-if='$store.getters.getTasksLength' class='flex-grow')
    div(class='px-4')
      BaseTask(
        v-for='task in tasks'
        :title.sync='task.name'
        :completed.sync='task.completed'
        :active='$route.query.task === task.id'
        :to='{ query: { task: task.id } }'
        @click.native.stop='$store.commit("showMobileSidebar")')
  div(v-else class='flex items-center justify-center flex-grow px-4')
    div(class='flex flex-col items-center -mt-16')
      div(class='flex w-32 h-32 rounded-full bg-black-5')
        BaseSvg(name='clipboard' class='w-20 h-20 m-auto text-black-10')
      div(class='mt-6 text-center')
        div(class='text-9 text-theme') Список задач пуст
        div(class='mt-1 text-black-30') Чтобы добавить новую задачу, нажмите на поле ввода
</template>

<script>
import BaseTask from '@/components/BaseTask.vue';
import messages from '@/utils/messages';

export default {
  name: 'TheMainBox',
  components: {
    BaseTask,
  },
  data: () => ({
    taskNameInput: '',
  }),
  computed: {
    tasks() {
      return this.$store.getters.getTasks;
    },
  },
  methods: {
    async addTask() {
      if (this.taskNameInput) {
        await this.$store.dispatch('addTask', {
          name: this.taskNameInput,
        });
        this.taskNameInput = '';
      } else {
        this.$toasted.show(messages.enterTaskName);
      }
    },
  },
};
</script>
