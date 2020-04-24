<template lang='pug'>
nav(class='w-64 px-3 bg-theme text-white-80')
  header(class='flex items-center px-2 py-5')
    img(src='@/assets/avatar.jpg' class='mr-2 rounded-full w-7 h-7')
    span(class='flex-grow') Андрей Попов
    button
      BaseSvg(name='logout' class='w-5 h-5 text-white-40 hover:text-white-50')
  router-link(to='' class='flex items-center px-2 rounded h-9 bg-black-10')
    BaseSvg(name='all' class='w-6 h-6 mr-2 text-white-8')
    span(class='flex-grow font-bold') Все
    span(class='text-3') 27
</template>

<script>
export default {
  name: 'TheNavDrawer',
};
</script>
