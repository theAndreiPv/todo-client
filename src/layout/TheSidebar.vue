<template lang="pug">
aside(
  class='right-0 flex flex-col w-4/12 bg-white border-l sm:h-full sm:absolute sm:shadow-lg sm:w-2/3 xs:w-full'
  :class='classContainer'
  v-click-outside='hideOnMobile')
  template(v-if='taskInfo && countTasksAll')
    TheSidebarHeader
    TheSidebarBody
    TheSidebarFooter
  div(v-if='!taskInfo && countTasksAll' class='flex items-center justify-center flex-grow p-6')
    VInfoBox(icon='loupe' subtitle='Нажмите на задачу чтобы посмотреть детали')
</template>

<script>
import TheSidebarHeader from '@/layout/TheSidebarHeader.vue';
import TheSidebarBody from '@/layout/TheSidebarBody.vue';
import TheSidebarFooter from '@/layout/TheSidebarFooter.vue';
import VInfoBox from '@/components/VInfoBox.vue';

export default {
  name: 'TheSidebar',
  components: {
    TheSidebarHeader, TheSidebarBody, TheSidebarFooter, VInfoBox,
  },
  computed: {
    classContainer() {
      return { 'sm:hidden': !this.$store.getters.displaySidebar };
    },
    taskInfo() {
      return this.$store.getters.getTaskById(this.$route.query.task);
    },
    countTasksAll() {
      return this.$store.getters.getTasksLength;
    },
  },
  methods: {
    hideOnMobile() {
      if (this.$store.getters.displaySidebar) this.$store.commit('hideMobileSidebar');
    },
  },
};
</script>
