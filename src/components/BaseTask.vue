<template lang="pug">
router-link(:to='to' draggable='false' class='flex h-10 px-3 rounded' :class='classContainer')
  TaskCheckbox(class='items-center mr-3' @click.prevent='' :completed='completed' fade)
  input(type='text' class='flex-grow cursor-pointer' :class='classInput' :value='title')
</template>

<script>
import TaskCheckbox from '@/components/TaskCheckbox.vue';

export default {
  name: 'BaseTask',
  props: {
    title: {
      type: String,
      default: '',
    },
    selected: {
      type: Boolean,
      default: false,
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
      return this.selected ? 'bg-theme-10' : 'hover:bg-theme-6 group';
    },
    classInput() {
      return [
        this.selected ? '' : 'border-b group-hover:border-transparent',
        this.completed ? 'text-black-30' : '',
      ];
    },
  },
  components: {
    TaskCheckbox,
  },
};
</script>
