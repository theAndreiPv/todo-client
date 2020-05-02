<template lang="pug">
aside(
  class='right-0 flex flex-col w-4/12 bg-white border-l sm:h-full sm:absolute sm:shadow-lg sm:w-2/3'
  :class='classContainer'
  v-click-outside='hideOnMobile')
  header(class='flex items-center flex-shrink-0 px-6 border-b h-18')
    button(class='hidden p-2 mr-3 -ml-2 sm:block' @click='$store.commit("hideMobileSidebar")')
      BaseSvg(name='arrow' class='w-5 h-5 text-black-30')
    TaskCheckbox(completed)
  ContainerScroll(class='flex-grow')
    div(class='px-6 py-4')
      textarea(v-autosize rows='1' class='block w-full mb-4 font-bold resize-none text-6') Обучение веб 6h
      textarea(v-autosize rows='1' class='block w-full leading-6 resize-none placeholder-black-30' placeholder='Description')
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
  computed: {
    classContainer() {
      return { 'sm:hidden': !this.$store.getters.displaySidebar };
    },
  },
  methods: {
    hideOnMobile() {
      this.$store.commit('hideMobileSidebar');
    },
  },
};
</script>
