<template lang="pug">
router-link(:to='to' class='flex items-center px-2 rounded h-9' :class='classContainer')
  VSvg(v-if='icon' :name='icon' class='w-6 h-6 mr-2 text-white-8')
  span(class='flex-grow font-bold'): slot
  span(class='text-3' v-if='count') {{count}}
</template>

<script>
export default {
  name: 'VNavItem',
  props: {
    to: {
      type: [String, Object],
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: null,
    },
    count: {
      type: [String, Number],
      default: null,
    },
  },
  computed: {
    classContainer() {
      return this.active ? 'bg-black-10' : 'hover:bg-black-5';
    },
  },
};
</script>
