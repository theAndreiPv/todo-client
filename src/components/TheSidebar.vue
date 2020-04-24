<template lang="pug">
aside(class='flex flex-col w-4/12 border-l')
  header(class='flex items-center flex-shrink-0 px-6 border-b h-18')
    TaskCheckbox(completed)
  ContainerScroll(class='flex-grow')
    div(class='px-6 py-4')
      TextareaAutosize(rows='1' class='block w-full mb-4 font-bold text-6' value='Обучение веб 6h' )
      TextareaAutosize(rows='1' class='block w-full leading-6 placeholder-black-30' placeholder='Description' value='')
  footer(class='flex items-center flex-shrink-0 h-12 px-6 border-t')
    button
      BaseSvg(name='delete' class='w-6 h-6 text-black-30 hover:text-black-50')
</template>

<script>
import TaskCheckbox from '@/components/TaskCheckbox.vue';

export default {
  name: 'TheSidebar',
  components: {
    TaskCheckbox,
  },
};
</script>
