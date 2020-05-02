<template lang='pug'>
div(class='flex flex-col items-center justify-center min-h-full py-12 bg-dim')
  BaseSvg(name='logo' class='w-16 h-16 mb-9')
  form(class='w-full px-12 bg-white border rounded max-w-100 py-9')
    BaseInput(class='mb-8' icon='user' placeholder='Nickname (optional)')
    BaseInput(class='mb-8' icon='lock' type='password' placeholder='Password')
    BaseInput(class='mb-8' icon='email' placeholder='Email')
    button(class='w-full px-4 mb-3 text-white duration-300 rounded font-secondary transition-background bg-theme hover:bg-theme-hover h-9') Get Started - It's Free
    div(class='text-center')
      | Have an account already? &#32;
      router-link(to='/login' class='hover:underline text-theme') Sign in
</template>

<script>
import BaseInput from '@/components/BaseInput.vue';

export default {
  name: 'Registr',
  components: {
    BaseInput,
  },
};
</script>
