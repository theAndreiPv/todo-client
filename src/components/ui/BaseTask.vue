<template lang="pug">
router-link(:to='to' draggable='false' class='flex h-10 px-3 rounded' :class='classContainer')
  TaskCheckbox(
    class='mr-3'
    fade
    :checked='completed'
    @change='$emit("update:completed", $event)')
  input(
    type='text'
    class='flex-grow border-b cursor-pointer'
    :class='classInput'
    :value='title'
    @input='$emit("update:title", $event.target.value)')
</template>

<script>
import TaskCheckbox from '@/components/ui/TaskCheckbox.vue';

export default {
  name: 'BaseTask',
  components: {
    TaskCheckbox,
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    completed: {
      type: Boolean,
      default: false,
    },
    to: {
      type: [String, Object],
      required: true,
    },
  },
  computed: {
    classContainer() {
      return this.active ? 'bg-theme-10' : 'hover:bg-theme-6 group';
    },
    classInput() {
      return [
        this.active ? 'border-transparent' : 'group-hover:border-transparent',
        this.completed ? 'text-black-30' : '',
      ];
    },
  },
};
</script>
