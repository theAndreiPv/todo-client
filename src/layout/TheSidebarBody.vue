<template lang="pug">
VScrollContainer(class='flex-grow')
  div(class='px-6 py-4')
    VTextarea(v-model='taskInfo.name' @input='updateName' theme='heading' class='mb-4')
    VTextarea(v-model='taskInfo.description' @input='updateDescription' placeholder='Описание')
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
    taskInfo() {
      return this.$store.getters.getTaskById(this.$route.query.task);
    },
  },
  methods: {
    async updateName() {
      await this.$store.dispatch('taskSaveUpdate', {
        id: this.$route.query.task,
        newData: {
          name: this.taskInfo.name,
        },
      });
    },
    async updateDescription() {
      await this.$store.dispatch('taskSaveUpdate', {
        id: this.$route.query.task,
        newData: {
          description: this.taskInfo.description,
        },
      });
    },
    created() {
      this.updateName = debounce(this.updateName, 200);
      this.updateDescription = debounce(this.updateDescription, 200);
    },
  },
};
</script>
