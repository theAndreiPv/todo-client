<template lang='pug'>
div(class='flex h-full')
  TheNavbar
  TheMainBox
  TheSidebar
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';
import TheMainBox from '@/components/TheMainBox.vue';
import TheSidebar from '@/components/TheSidebar.vue';

export default {
  name: 'Dashboard',
  components: {
    TheNavbar, TheMainBox, TheSidebar,
  },
  async mounted() {
    await this.$store.dispatch('fetchInfo');
    await this.$store.dispatch('fetchTasks');
  },
};
</script>
