<template lang="pug">
input(
  class='w-full h-10 px-3 border border-transparent rounded placeholder-black-30 bg-theme-8 focus:border-accent'
  :value='value'
  @input='$emit("input", $event.target.value)')
</template>

<script>
export default {
  name: 'BaseTextField',
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
  },
};
</script>
