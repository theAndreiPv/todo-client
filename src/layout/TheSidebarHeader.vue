<template lang="pug">
header(class='flex items-center flex-shrink-0 px-6 border-b h-18')
  button(class='hidden p-2 mr-3 -ml-2 sm:block' @click='hideOnMobile')
    VSvg(name='arrow' class='w-5 h-5 text-black-30')
  VCheckboxTask(v-model='taskCompleted' @change='')
</template>

<script>
import VCheckboxTask from '@/components/VCheckboxTask.vue';

export default {
  name: 'TheSidebarHeader',
  components: {
    VCheckboxTask,
  },
  computed: {
    taskCompleted() {
      return this.$store.getters.taskCompleted(this.$route.query.task);
    },
  },
  methods: {
    hideOnMobile() {
      if (this.$store.getters.displaySidebar) this.$store.commit('hideMobileSidebar');
    },
  },
};
</script>
