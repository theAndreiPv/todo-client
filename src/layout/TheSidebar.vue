<template lang="pug">
aside(
  class='right-0 flex flex-col w-4/12 bg-white border-l sm:h-full sm:absolute sm:shadow-lg sm:w-2/3 xs:w-full'
  :class='classContainer'
  v-click-outside='hideOnMobile')
  template(v-if='countTasksAll')
    template(v-if='taskInfo')
      header(class='flex items-center flex-shrink-0 px-6 border-b h-18')
        button(class='hidden p-2 mr-3 -ml-2 sm:block' @click='hideOnMobile')
          VSvg(name='arrow' class='w-5 h-5 text-black-30')
        VCheckboxTask(v-model='taskInfo.completed' @change='updateCompleted')
      VScrollContainer(class='flex-grow')
        div(class='px-6 py-4')
          VTextarea(v-model='taskInfo.name' @input='updateName' theme='heading' class='mb-4')
          VTextarea(v-model='taskInfo.description' @input='updateDescription' placeholder='Описание')
      footer(class='flex items-center flex-shrink-0 h-12 px-6 border-t')
        button(@click='removeTask')
          VSvg(name='delete' class='w-6 h-6 text-black-30 hover:text-black-50')
    div(v-else class='flex flex-col items-center justify-center flex-grow px-6')
      div(class='flex w-32 h-32 rounded-full bg-black-5')
        VSvg(name='loupe' class='w-20 h-20 m-auto text-black-10')
      div(class='mt-6 text-center text-7 text-black-20') Нажмите на задачу чтобы посмотреть делали
</template>

<script>
import VCheckboxTask from '@/components/VCheckboxTask.vue';
import VTextarea from '@/components/VTextarea.vue';
import { debounce } from 'debounce';

export default {
  name: 'TheSidebar',
  components: {
    VCheckboxTask, VTextarea,
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
    countTasksAll() {
      return this.$store.getters.getTasksLength;
    },
  },
  methods: {
    hideOnMobile() {
      if (this.$store.getters.displaySidebar) this.$store.commit('hideMobileSidebar');
    },
    async updateCompleted() {
      await this.$store.dispatch('taskSaveUpdate', {
        id: this.taskId,
        newData: {
          completed: this.taskInfo.completed,
        },
      });
    },
    async updateName() {
      await this.$store.dispatch('taskSaveUpdate', {
        id: this.taskId,
        newData: {
          name: this.taskInfo.name,
        },
      });
    },
    async updateDescription() {
      await this.$store.dispatch('taskSaveUpdate', {
        id: this.taskId,
        newData: {
          description: this.taskInfo.description,
        },
      });
    },
    async removeTask() {
      await this.$store.dispatch('removeTask', this.taskId);
    },
  },
  created() {
    this.updateName = debounce(this.updateName, 200);
    this.updateDescription = debounce(this.updateDescription, 200);
  },
};
</script>
