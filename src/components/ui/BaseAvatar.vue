<template lang="pug">
img(:src='src' class='rounded-full w-7 h-7')
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
