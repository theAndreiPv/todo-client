<template lang="pug">
textarea(
  v-autosize
  rows='1'
  class='w-full'
  :class='classTheme'
  :value='value'
  :placeholder='placeholder'
  @input='$emit("input", $event.target.value)')
</template>

<script>
export default {
  name: 'VTextarea',
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    theme: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    classTheme() {
      switch (this.theme) {
        case 'heading': return 'font-bold text-6';
        default: return 'leading-6 placeholder-black-30';
      }
    },
  },
};
</script>
