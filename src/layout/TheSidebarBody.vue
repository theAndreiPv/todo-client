<template lang="pug">
VScrollContainer(class='flex-grow')
  div(class='px-6 py-4')
    VTextarea(v-model='taskTitle' @input='updateName' theme='heading' class='mb-4')
    VTextarea(v-model='taskDescription' @input='updateDescription' placeholder='Описание')
</template>

<script>
import VTextarea from '@/components/VTextarea.vue';

export default {
  name: 'TheSidebarBody',
  components: {
    VTextarea,
  },
  computed: {
    taskTitle() {
      return this.$store.getters.taskTitle(this.$route.query.task);
    },
    taskDescription() {
      return this.$store.getters.taskDescription(this.$route.query.task);
    },
  },
};
</script>
