<template lang='pug'>
div(class='flex h-screen')
  TheNavDrawer
  TheMainBox
  aside(class='w-4/12 border-l')
</template>

<script>
import TheNavDrawer from '@/components/TheNavDrawer.vue';
import TheMainBox from '@/components/TheMainBox.vue';

export default {
  name: 'Dashboard',
  components: {
    TheNavDrawer, TheMainBox,
  },
};
</script>
