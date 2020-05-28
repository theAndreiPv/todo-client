<template lang="pug">
VScrollContainer(class='flex-grow')
  div(class='px-6 py-4')
    VTextarea(:value='taskTitle' @input='updateTitle($event)' theme='heading' class='mb-4')
    VTextarea(:value='taskDescription' @input='updateDescription($event)' placeholder='Описание')
</template>

<script>
import VTextarea from '@/components/VTextarea.vue';
import { debounce } from 'debounce';

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
  created() {
    this.syncTitle = debounce(this.syncTitle, 200);
    this.syncDescription = debounce(this.syncDescription, 200);
  },
  methods: {
    updateTitle(val) {
      this.$store.commit('updateTitle', { id: this.$route.query.task, val });
      this.syncTitle();
    },
    updateDescription(val) {
      this.$store.commit('updateDescription', { id: this.$route.query.task, val });
      this.syncDescription();
    },
    async syncTitle() {
      await this.$store.dispatch('syncTitle', this.$route.query.task);
    },
    async syncDescription() {
      await this.$store.dispatch('syncDescription', this.$route.query.task);
    },
  },
};
</script>
