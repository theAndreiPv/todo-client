<template lang='pug'>
nav(class='w-64 px-3 bg-theme text-white-8')
  div(class='flex items-center px-2 py-5')
    img(src='@/assets/avatar.jpg' class='mr-2 rounded-full w-7 h-7')
    span(class='flex-grow') Андрей Попов
    button
      SvgIcon(name='logout' class='w-5 h-5 text-white-4 hover:text-white-5')
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'TheNavDrawer',
  components: {
    SvgIcon,
  },
};
</script>
