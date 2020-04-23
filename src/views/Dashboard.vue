<template lang='pug'>
div(class='flex h-screen')
  TheNavDrawer
  TheMainBox
  TheSidebar
</template>

<script>
import TheNavDrawer from '@/components/TheNavDrawer.vue';
import TheMainBox from '@/components/TheMainBox.vue';
import TheSidebar from '@/components/TheSidebar.vue';

export default {
  name: 'Dashboard',
  components: {
    TheNavDrawer, TheMainBox, TheSidebar,
  },
};
</script>
