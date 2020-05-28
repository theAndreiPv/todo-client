<template lang='pug'>
TheLayoutSheet(class='text-center')
  div(class='text-theme-accent text-24') 404
  div(class='mb-2 text-theme-accent text-7') Страница не найдена
</template>

<script>
import TheLayoutSheet from '@/layout/TheLayoutSheet.vue';

export default {
  name: 'NotFound',
  components: {
    TheLayoutSheet,
  },
};
</script>
