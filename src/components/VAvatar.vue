<template lang="pug">
img(:src='src' class='rounded-full w-7 h-7')
</template>

<script>
export default {
  name: 'VAvatar',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>
