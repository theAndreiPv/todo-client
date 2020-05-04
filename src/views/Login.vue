<template lang='pug'>
div(class='flex flex-col items-center justify-center min-h-full px-3 py-12 bg-dim')
  BaseSvg(name='logo' class='w-16 h-16 mb-9 text-theme-accent')
  form(class='w-full px-12 py-10 bg-white border rounded max-w-100')
    BaseInput(class='mb-2' icon='email' placeholder='Email' textError='Email не должен быть пустым')
    BaseInput(class='mb-2' icon='lock' placeholder='Пароль' type='password' textError='Пароль не должен быть пустым')
    button(class='w-full px-4 text-white duration-300 rounded font-secondary bg-theme hover:bg-theme-accent h-9') Войти
    div(class='mt-3 text-center') Нет аккаунта? &#32;
      router-link(to='/registration' class='hover:underline text-theme') Регистрация
</template>

<script>
import BaseInput from '@/components/BaseInput.vue';

export default {
  name: 'Login',
  components: {
    BaseInput,
  },
};
</script>
