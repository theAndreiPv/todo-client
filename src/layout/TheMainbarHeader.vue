<template lang="pug">
header(class='mb-5 px-7')
  div(class='flex items-center h-18')
    button(class='hidden p-4 -ml-4 lg:block' @click.stop='toggleDisplayMobileNavbar')
      VSvg(name='bars' class='w-4 h-4 text-black-30')
    h1(class='text-9') Все
  VTextfieldB(
    v-model='taskNameInput'
    placeholder='Добавьте задачу, нажмите Enter для сохранения.'
    @keyup.native.enter='addTask')
</template>

<script>
import VTextfieldB from '@/components/VTextfieldB.vue';
import messages from '@/utils/messages';

export default {
  name: 'TheMainbarHeader',
  components: {
    VTextfieldB,
  },
  data: () => ({
    taskNameInput: '',
  }),
  methods: {
    toggleDisplayMobileNavbar() {
      this.$store.commit('toggleDisplayMobileNavbar');
    },
    async addTask() {
      if (this.taskNameInput) {
        await this.$store.dispatch('addTask', {
          name: this.taskNameInput,
          description: '',
          completed: false,
        });
        this.taskNameInput = '';
      } else {
        this.$toasted.show(messages.enterTaskName);
      }
    },
  },
};
</script>
