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
      spellcheck='false')
  ContainerScroll(class='flex-grow')
    div(class='px-4')
      BaseTask(
        v-for='task in tasks'
        :title='task.name'
        :completed='task.completed'
        :to='"#"+task.id'
        @click.native.stop='$store.commit("showMobileSidebar")')
</template>

<script>
import BaseTask from '@/components/BaseTask.vue';

export default {
  name: 'TheMainBox',
  components: {
    BaseTask,
  },
  computed: {
    tasks() {
      return this.$store.getters.getTasks;
    },
  },
};
</script>
