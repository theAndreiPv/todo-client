<template lang='pug'>
div(class='absolute inset-0 flex')
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
};
</script>
