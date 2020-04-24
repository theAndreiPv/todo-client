<template lang="pug">
main(class='flex-grow')
  header(class='mb-5 px-7')
    div(class='flex items-center h-18')
      h1(class='text-9') Все
    input(
      class='block w-full h-10 px-3 border border-transparent rounded placeholder-black-30 bg-theme-8 focus:border-accent'
      placeholder='Добавьте задачу, нажмите Enter для сохранения.'
      spellcheck='false'
    )
  div(class='px-4')
    BaseTask(title='Обучение веб 6h' to='#1')
    BaseTask(title='Тренировка' to='#2')
    BaseTask(title='Купить еды' to='#3' completed)
    BaseTask(title='Обучение веб 6h' to='#1' selected)
    BaseTask(title='Тренировка' to='#2')
    BaseTask(title='Купить еды' to='#3' completed)
    BaseTask(title='Обучение веб 6h' to='#1')
    BaseTask(title='Тренировка' to='#2')
    BaseTask(title='Купить еды' to='#3' completed)
    BaseTask(title='Обучение веб 6h' to='#1')
    BaseTask(title='Тренировка' to='#2')
    BaseTask(title='Купить еды' to='#3' completed)
    BaseTask(title='Обучение веб 6h' to='#1')
    BaseTask(title='Тренировка' to='#2')
    BaseTask(title='Купить еды' to='#3' completed)
    BaseTask(title='Обучение веб 6h' to='#1')
    BaseTask(title='Тренировка' to='#2')
    BaseTask(title='Купить еды' to='#3' completed)
</template>

<script>
import BaseTask from '@/components/BaseTask.vue';

export default {
  name: 'TheMainBox',
  components: {
    BaseTask,
  },
};
</script>
