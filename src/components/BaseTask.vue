<template lang="pug">
router-link(:to='to' draggable='false' class='flex h-10 px-3 rounded' :class='classContainer')
  TaskCheckbox(
    class='items-center mr-3'
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
import TaskCheckbox from '@/components/TaskCheckbox.vue';
// import { debounce } from 'debounce';

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
  // methods: {
  //   async updateName() {
  //     await this.$store.dispatch('taskUpdate', {
  //       id: this.id,
  //       newData: {
  //         name: this.taskInfo.name,
  //       },
  //     });
  //   },
  // },
  // created() {
  //   this.updateName = debounce(this.updateName, 200);
  // },
};
</script>
