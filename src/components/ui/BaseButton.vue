<template lang="pug">
button(class='w-full px-4 text-white duration-300 rounded font-secondary bg-theme hover:bg-theme-accent h-9'): slot
</template>

<script>
export default {
  name: 'BaseButton',
};
</script>
