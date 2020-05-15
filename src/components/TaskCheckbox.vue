<template lang="pug">
button(@click.prevent='completeToggle')
  BaseSvg(:name='iconName' class='w-4 h-4' :class='classIcon')
</template>

<script>
export default {
  name: 'TaskCheckbox',
  props: {
    taskId: {
      type: [String, Number],
      required: true,
    },
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
  methods: {
    completeToggle() {
      this.$store.dispatch('taskCompleteToggle', this.taskId);
    },
  },
};
</script>
