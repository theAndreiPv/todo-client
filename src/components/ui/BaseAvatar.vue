<template lang="pug">
img(src='@/assets/avatar.png' class='rounded-full w-7 h-7')
</template>

<script>
export default {
  name: 'BaseAvatar',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>
