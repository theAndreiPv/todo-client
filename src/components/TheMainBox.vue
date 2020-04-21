<template lang="pug">
main(class='flex-grow px-4')
  header(class='px-3')
    div(class='flex items-center h-18')
      h1(class='text-9') Все
    input(
      class='block w-full h-10 px-3 border border-transparent rounded outline-none placeholder-black-3 bg-dim focus:border-accent'
      placeholder='Добавьте задачу, нажмите Enter для сохранения.'
      spellcheck='false'
    )
</template>

<script>
export default {
  name: 'TheMainBox',
};
</script>
