<template lang="pug">
header(class='flex items-center px-5 py-5')
  VAvatar(:src='userAvatar')
  span(class='flex-grow ml-2 truncate') {{userName}}
  button(@click='logout')
    VSvg(name='logout' class='w-5 h-5 text-white-40 hover:text-white-50')
</template>

<script>
import VAvatar from '@/components/VAvatar.vue';

const avatarDefault = require('@/assets/avatar.png');

export default {
  name: 'TheNavbarHeader',
  components: {
    VAvatar,
  },
  computed: {
    userName() {
      return this.$store.getters.userName;
    },
    userAvatar() {
      return avatarDefault;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.push('/login?message=logout');
    },
  },
};
</script>
