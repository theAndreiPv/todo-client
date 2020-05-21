<template lang="pug">
button(:type='type' class='w-full px-4 text-white duration-300 rounded font-secondary bg-theme hover:bg-theme-accent h-9')
  slot
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: '',
    },
  },
};
</script>
