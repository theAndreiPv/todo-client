<template lang='pug'>
nav(
  class='z-10 w-64 lg:h-full lg:absolute lg:shadow-lg bg-theme text-white-80'
  :class='classContainer'
  v-click-outside='hideOnMobile')
  header(class='flex items-center px-5 py-5')
    VAvatar(:src='userAvatar')
    span(class='flex-grow ml-2 truncate') {{userName}}
    button(@click='logout')
      VSvg(name='logout' class='w-5 h-5 text-white-40 hover:text-white-50')
  div(class='px-3')
    VNavItem(to='/dashboard' icon='all' :count='countTasksActive' active) Все
</template>

<script>
import VNavItem from '@/components/VNavItem.vue';
import VAvatar from '@/components/VAvatar.vue';

const avatarDefault = require('@/assets/avatar.png');

export default {
  name: 'TheNavbar',
  components: {
    VNavItem, VAvatar,
  },
  computed: {
    classContainer() {
      return { 'lg:hidden': !this.$store.getters.displayNavbar };
    },
    userName() {
      return this.$store.getters.userName;
    },
    userAvatar() {
      return avatarDefault;
    },
    countTasksActive() {
      return this.$store.getters.getTasksLengthActive;
    },
  },
  methods: {
    hideOnMobile() {
      if (this.$store.getters.displayNavbar) this.$store.commit('hideMobileNavbar');
    },
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.push('/login?message=logout');
    },
  },
};
</script>
