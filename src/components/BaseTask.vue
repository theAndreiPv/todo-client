<template lang="pug">
router-link(:to='to' draggable='false' class='flex h-10 px-3 rounded' :class='classContainer')
  TaskCheckbox(class='items-center mr-3' :taskId='id' :completed='completed' fade)
  input(type='text' class='flex-grow border-b cursor-pointer' :class='classInput' :value='title')
</template>

<script>
import TaskCheckbox from '@/components/TaskCheckbox.vue';

export default {
  name: 'BaseTask',
  components: {
    TaskCheckbox,
  },
  props: {
    id: {
      type: [String, Number],
      required: true,
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
    active() {
      return this.$route.query.task === this.id;
    },
  },
};
</script>
