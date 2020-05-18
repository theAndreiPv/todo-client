<template lang='pug'>
nav(
  class='z-10 w-64 lg:h-full lg:absolute lg:shadow-lg bg-theme text-white-80'
  :class='classContainer'
  v-click-outside='hideOnMobile')
  header(class='flex items-center px-5 py-5')
    img(src='@/assets/avatar.png' class='mr-2 rounded-full w-7 h-7')
    span(class='flex-grow truncate') {{userName}}
    button(@click='logout')
      BaseSvg(name='logout' class='w-5 h-5 text-white-40 hover:text-white-50')
  div(class='px-3')
    router-link(to='' class='flex items-center px-2 rounded h-9 bg-black-10')
      BaseSvg(name='all' class='w-6 h-6 mr-2 text-white-8')
      span(class='flex-grow font-bold') Все
      span(class='text-3') {{$store.getters.getTasksLengthActive || ''}}
</template>

<script>
export default {
  name: 'TheNavbar',
  computed: {
    classContainer() {
      return { 'lg:hidden': !this.$store.getters.displayNavbar };
    },
    userName() {
      return this.$store.getters.userName;
    },
  },
  methods: {
    hideOnMobile() {
      this.$store.commit('hideMobileNavbar');
    },
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.push('/login?message=logout');
    },
  },
};
</script>
