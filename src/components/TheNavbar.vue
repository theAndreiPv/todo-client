<template lang='pug'>
nav(
  class='z-10 w-64 lg:h-full lg:absolute lg:shadow-lg bg-theme text-white-80'
  :class='classContainer'
  v-click-outside='hideOnMobile')
  header(class='flex items-center px-5 py-5')
    BaseAvatar(src='@/assets/avatar.png')
    span(class='flex-grow ml-2 truncate') {{userName}}
    button(@click='logout')
      BaseSvg(name='logout' class='w-5 h-5 text-white-40 hover:text-white-50')
  div(class='px-3')
    NavbarButton(to='/dashboard' icon='all' :count='$store.getters.getTasksLengthActive' active) Все
</template>

<script>
import NavbarButton from '@/components/ui/NavbarButton.vue';
import BaseAvatar from '@/components/ui/BaseAvatar.vue';

export default {
  name: 'TheNavbar',
  components: {
    NavbarButton, BaseAvatar,
  },
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
