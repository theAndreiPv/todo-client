<template lang="pug">
main(class='flex flex-col flex-grow')
  header(class='mb-5 px-7')
    div(class='flex items-center h-18')
      button(class='hidden p-4 -ml-4 lg:block' @click.stop='toggleDisplayMobileNavbar')
        VSvg(name='bars' class='w-4 h-4 text-black-30')
      h1(class='text-9') Все
    VTextfieldB(
      v-model='taskNameInput'
      placeholder='Добавьте задачу, нажмите Enter для сохранения.'
      @keyup.native.enter='addTask')
  VScrollContainer(v-if='countTasksAll' class='flex-grow')
    div(class='px-4')
      TheTaskList
  div(v-else class='flex items-center justify-center flex-grow px-4')
    div(class='flex flex-col items-center -mt-16')
      div(class='flex w-32 h-32 rounded-full bg-black-5')
        VSvg(name='clipboard' class='w-20 h-20 m-auto text-black-10')
      div(class='mt-6 text-center')
        div(class='text-9 text-theme') Список задач пуст
        div(class='mt-1 text-black-30') Чтобы добавить новую задачу, нажмите на поле ввода
</template>

<script>
import VTextfieldB from '@/components/VTextfieldB.vue';
import TheTaskList from '@/layout/TheTaskList.vue';
import messages from '@/utils/messages';

export default {
  name: 'TheMainbar',
  components: {
    TheTaskList, VTextfieldB,
  },
  data: () => ({
    taskNameInput: '',
  }),
  computed: {
    countTasksAll() {
      return this.$store.getters.getTasksLength;
    },
  },
  methods: {
    toggleDisplayMobileNavbar() {
      this.$store.commit('toggleDisplayMobileNavbar');
    },
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
