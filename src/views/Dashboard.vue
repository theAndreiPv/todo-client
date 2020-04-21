<template lang='pug'>
div(class='flex h-screen')
  TheNavDrawer
  main(class='flex-grow')
  aside(class='w-4/12 border-l')
</template>

<script>
import TheNavDrawer from '@/components/TheNavDrawer.vue';

export default {
  name: 'Dashboard',
  components: {
    TheNavDrawer,
  },
};
</script>
