<template lang="pug">
header(class='flex items-center flex-shrink-0 px-6 border-b h-18')
  button(class='hidden p-2 mr-3 -ml-2 sm:block' @click='hideOnMobile')
    VSvg(name='arrow' class='w-5 h-5 text-black-30')
  VCheckboxTask(v-model='taskInfo.completed' @change='updateCompleted')
</template>

<script>
import VCheckboxTask from '@/components/VCheckboxTask.vue';

export default {
  name: 'TheSidebarHeader',
  components: {
    VCheckboxTask,
  },
  computed: {
    taskInfo() {
      return this.$store.getters.getTaskById(this.$route.query.task);
    },
  },
  methods: {
    async updateCompleted() {
      await this.$store.dispatch('taskSaveUpdate', {
        id: this.$route.query.task,
        newData: {
          completed: this.taskInfo.completed,
        },
      });
    },
    hideOnMobile() {
      if (this.$store.getters.displaySidebar) this.$store.commit('hideMobileSidebar');
    },
  },
};
</script>
