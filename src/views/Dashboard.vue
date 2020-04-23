<template lang='pug'>
div(class='flex h-screen')
  TheNavDrawer
  TheMainBox
  aside(class='flex flex-col w-4/12 border-l')
    header(class='flex items-center px-6 border-b h-18')
      button
        BaseIcon(name='checkbox' class='w-4 h-4 text-black-20')
    section(class='flex-grow px-6 py-4 overflow-y-scroll')
      TextareaAutosize(rows='1' class='block w-full mb-4 font-bold text-6' value='Обучение веб 6h' )
      TextareaAutosize(rows='1' class='block w-full leading-6 placeholder-black-30' placeholder='Description' value='')
    footer(class='flex items-center h-12 px-6 border-t')
      button
        BaseIcon(name='delete' class='w-6 h-6 text-black-30 hover:text-black-50')
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
