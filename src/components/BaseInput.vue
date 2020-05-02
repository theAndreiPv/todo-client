<template lang="pug">
div
  div(class='flex items-center')
    BaseSvg(v-if='icon' :name='icon' class='w-6 h-6' :class='onFocus ? "text-theme" : "text-black-20"')
    input(
      :type='type'
      :placeholder='placeholder'
      class='flex-grow h-9 placeholder-black-20 font-secondary text-6'
      :class='{"px-3": icon}'
      @focus='toggleFocus'
      @blur='toggleFocus')
  div(class='border-t')
    hr(class='mx-auto -mt-px duration-300 border-theme transition-width' :class='onFocus ? "w-full" : "w-0"')
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    icon: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    onFocus: false,
  }),
  methods: {
    toggleFocus() {
      this.onFocus = !this.onFocus;
    },
  },
};
</script>
