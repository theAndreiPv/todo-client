<template lang="pug">
main(class='flex-grow px-4')
  header(class='px-3 mb-5')
    div(class='flex items-center h-18')
      h1(class='text-9') Все
    input(
      class='block w-full h-10 px-3 border border-transparent rounded outline-none placeholder-black-30 bg-theme-8 focus:border-accent'
      placeholder='Добавьте задачу, нажмите Enter для сохранения.'
      spellcheck='false'
    )
  ul
    //- выбранная
    li(class='flex h-10 px-3 rounded bg-theme-10')
      button(class='items-center pr-3')
        SvgIcon(name='checkbox' class='w-4 h-4 text-black-20')
      router-link(to='' class='flex items-center flex-grow')
        span Обучение веб 6h
    //- не выбранная
    li(class='flex h-10 px-3 rounded hover:bg-theme-6 group')
      button(class='items-center pr-3')
        SvgIcon(name='checkbox' class='w-4 h-4 text-black-20')
      router-link(to='' class='flex items-center flex-grow border-b group-hover:border-transparent')
        span Тренировка
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'TheMainBox',
  components: {
    SvgIcon,
  },
};
</script>
