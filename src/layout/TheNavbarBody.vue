<template lang="pug">
div(class='px-3')
  VNavItem(to='/dashboard' icon='all' :count='countTasksActive' active) Все
</template>

<script>
import VNavItem from '@/components/VNavItem.vue';

export default {
  name: 'TheNavbarBody',
  components: {
    VNavItem,
  },
  computed: {
    countTasksActive() {
      return this.$store.getters.getTasksLengthActive;
    },
  },
};
</script>
