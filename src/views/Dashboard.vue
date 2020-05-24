<template lang='pug'>
TheLoader(v-if='loading')
div(v-else class='flex h-full')
  TheNavbar
  TheMainbar
  TheSidebar
</template>

<script>
import TheLoader from '@/components/TheLoader.vue';
import TheNavbar from '@/components/TheNavbar.vue';
import TheMainbar from '@/components/TheMainbar.vue';
import TheSidebar from '@/components/TheSidebar.vue';

export default {
  name: 'Dashboard',
  components: {
    TheNavbar, TheMainbar, TheSidebar, TheLoader,
  },
  data: () => ({
    loading: true,
  }),
  async mounted() {
    await this.$store.dispatch('fetchInfo');
    await this.$store.dispatch('fetchTasks');
    this.loading = false;
  },
  destroyed() {
    this.$store.commit('clearInfo');
    this.$store.commit('clearTasks');
  },
};
</script>
