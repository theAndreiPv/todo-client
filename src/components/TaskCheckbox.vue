<template lang="pug">
button
  BaseSvg(:name='iconName' class='w-4 h-4' :class='classIcon')
</template>

<script>
export default {
  name: 'TaskCheckbox',
  props: {
    completed: {
      type: Boolean,
      default: false,
    },
    fade: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classIcon() {
      return this.completed && this.fade ? 'text-black-10' : 'text-black-20';
    },
    iconName() {
      return this.completed ? 'completed' : 'checkbox';
    },
  },
};
</script>
