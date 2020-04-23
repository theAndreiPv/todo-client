<template lang="pug">
  component(:is='tag' v-bar)
    slot
</template>

<script>
export default {
  name: 'ContainerScroll',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
};
</script>

<style lang='sass'>
.vb-dragger
  @apply right-0 pl-1
.vb-dragger-styler
  @apply w-1 mr-2px rounded-full h-full transition-background duration-300 ease-linear
.vb-visible:hover .vb-dragger-styler
  @apply bg-black-30
</style>
