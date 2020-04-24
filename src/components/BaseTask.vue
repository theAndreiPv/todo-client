<template lang="pug">
router-link(:to='to' draggable='false' class='flex h-10 px-3 rounded' :class='classContainer')
  button(class='items-center mr-3' @click.prevent='')
    BaseSvg(:name='iconName' class='w-4 h-4' :class='classIcon')
  input(type='text' class='flex-grow cursor-pointer' :class='classInput' :value='title')
</template>

<script>
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
      type: String,
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
    classIcon() {
      return this.completed ? 'text-black-10' : 'text-black-20';
    },
    iconName() {
      return this.completed ? 'completed' : 'checkbox';
    },
  },
};
</script>
