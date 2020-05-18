<template lang="pug">
aside(
  class='right-0 flex flex-col w-4/12 bg-white border-l sm:h-full sm:absolute sm:shadow-lg sm:w-2/3'
  :class='classContainer'
  v-click-outside='hideOnMobile')
  template(v-if='$store.getters.getTasksLength')
    template(v-if='taskInfo')
      header(class='flex items-center flex-shrink-0 px-6 border-b h-18')
        button(class='hidden p-2 mr-3 -ml-2 sm:block' @click='$store.commit("hideMobileSidebar")')
          BaseSvg(name='arrow' class='w-5 h-5 text-black-30')
        TaskCheckbox(v-model='taskInfo.completed')
      ContainerScroll(class='flex-grow')
        div(class='px-6 py-4')
          textarea(
            v-autosize
            rows='1'
            class='block w-full mb-4 font-bold resize-none text-6'
            v-model='taskInfo.name'
            @input='updateName')
          textarea(
            v-autosize
            rows='1'
            class='block w-full leading-6 resize-none placeholder-black-30'
            placeholder='Description'
            v-model='taskInfo.description'
            @input='updateDescription')
      footer(class='flex items-center flex-shrink-0 h-12 px-6 border-t')
        button(@click='$store.dispatch("removeTask", taskId)')
          BaseSvg(name='delete' class='w-6 h-6 text-black-30 hover:text-black-50')
    div(v-else class='flex flex-col items-center justify-center flex-grow px-6')
      div(class='flex w-32 h-32 rounded-full bg-black-5')
        BaseSvg(name='loupe' class='w-20 h-20 m-auto text-black-10')
      div(class='mt-6 text-center text-7 text-black-20') Нажмите на задачу чтобы посмотреть делали
</template>

<script>
import TaskCheckbox from '@/components/TaskCheckbox.vue';
import { debounce } from 'debounce';

export default {
  name: 'TheSidebar',
  components: {
    TaskCheckbox,
  },
  computed: {
    classContainer() {
      return { 'sm:hidden': !this.$store.getters.displaySidebar };
    },
    taskInfo() {
      return this.$store.getters.getTaskById(this.taskId);
    },
    taskId() {
      return this.$route.query.task;
    },
  },
  methods: {
    hideOnMobile() {
      this.$store.commit('hideMobileSidebar');
    },
    async updateName() {
      await this.$store.dispatch('taskUpdate', {
        id: this.taskId,
        newData: {
          name: this.taskInfo.name,
        },
      });
    },
    async updateDescription() {
      await this.$store.dispatch('taskUpdate', {
        id: this.taskId,
        newData: {
          description: this.taskInfo.description,
        },
      });
    },
  },
  created() {
    this.updateName = debounce(this.updateName, 200);
    this.updateDescription = debounce(this.updateDescription, 200);
  },
};
</script>
